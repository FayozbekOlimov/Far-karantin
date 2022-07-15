import { useCallback, useEffect, useMemo, useState } from 'react';
import { Col, Row, Radio, Space, RadioChangeEvent, Button, Modal, Progress, Alert } from 'antd'
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';
import "./style.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import TitleBlock from './TitleBlock';
import { AdsImgUrlInfoType, AdsImgUrlResType, CardLinksInfoType, CardLinksResType } from '../../../types';
import baseAPI from '../../../api/baseAPI';
import { adsImgUrl, cardLinksUrl } from '../../../api/apiUrls';
import { useT } from '../../../custom-hooks/useT';
import axios from 'axios';
import { weatherAPI } from '../../../constants';

function BlockBanner() {
  const [surveyValue, setSurveyValue] = useState<string>("");
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isOpenAlert, setIsOpenAlert] = useState<boolean>(false);

  type AlertType = "success" | "info" | "warning" | "error";
  const [alertProps, setAlertProps] = useState<{ message: string, type: AlertType }>({
    message: "",
    type: "success"
  })

  const { t, lang } = useT();

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setSurveyValue(e.target.value);
  };

  // alert
  const openAlert = (e: React.MouseEvent<HTMLElement>) => {
    setIsOpenAlert(true);
    if (surveyValue !== "") {
      setAlertProps(prev => ({
        ...prev,
        message: t(`accReply.${lang}`),
        type: 'success'
      }))
    } else {
      setAlertProps(prev => ({
        ...prev,
        message: t(`chooseOne.${lang}`),
        type: 'error'
      }))
    }
    setTimeout(() => {
      setIsOpenAlert(false)
    }, 3000)
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [cardLinks, setCardLinks] = useState<CardLinksInfoType>([]);
  const [adsImg, setAdsImg] = useState<AdsImgUrlInfoType>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getCardLink = useCallback(() => {
    setLoading(true);
    baseAPI.fetchAll<CardLinksResType>(cardLinksUrl)
      .then((e) => {
        if (e.data.status === "200") {
          setCardLinks(e.data.data);
          setLoading(false);
        }
      })
      .catch(e => console.log('Error:', e.message));
  }, [])

  useEffect(() => {
    getCardLink();
  }, [getCardLink])

  const getAdsImg = useCallback(() => {
    setLoading(true);
    baseAPI.fetchAll<AdsImgUrlResType>(adsImgUrl)
      .then((e) => {
        if (e.data.status === "200") {
          setAdsImg(e.data.data);
          setLoading(false);
        }
      })
      .catch(e => console.log('Error:', e.message));
  }, [])

  useEffect(() => {
    getAdsImg();
  }, [getAdsImg])

  const apiKey = '7a13b51f1f360b2a5e6559a9c06c1a51';

  const [hour, setHour] = useState<number>();
  const [temp, setTemp] = useState<number>();
  const [weatherImg, setWeatherImg] = useState<string>('');

  let todayWeather =
    lang === 'uz' ? `Bugun ${hour && (hour >= 10 ? hour + ":00" : "0" + hour + ":00")} dagi ob-havo`
      : lang === 'ru' ? `Сегодняшняя погода в ${hour && (hour >= 10 ? hour + ":00" : "0" + hour + ":00")}`
        : lang === 'en' ? `Today's weather at ${hour && (hour >= 10 ? hour + ":00" : "0" + hour + ":00")}` : null;


  const getCurrentWeather = () => {
    axios
      .get(`${weatherAPI}Fergana&units=metric&appid=${apiKey}`)
      .then(res => {
        if (res.status !== 404) {
          return res.data;
        }
      })
      .then(data => {
        setTemp(data.main.temp);
        setHour(new Date(data.dt * 1000).getHours());
        setWeatherImg(`${data.weather[0].icon}@2x.png`);
      })
      .catch(e => console.log('Error:', e.message));
  }

  useMemo(() => getCurrentWeather(), []);

  return (
    <div className="block_banner">
      <div className="container">
        <Row gutter={[16, 16]}>
          <Col lg={6} sm={12} xs={24}>
            <div className="slider_card">
              <Swiper
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                effect={"slide"}
                loop={true}
                modules={[Autoplay, Navigation, Pagination, EffectFade]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
              >
                {
                  adsImg.map(img => (
                    <SwiperSlide key={img.id}>
                      <div
                        className="slider_img_container"
                        key={img.id}
                      >
                        <img
                          className="main_news_img"
                          src={img.ad_image}
                          alt={`bannerImg${img.id}`}
                        />
                      </div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
          </Col>
          <Col lg={6} sm={12} xs={24}>
            <div className="weather_card">
              <TitleBlock text={t(`weather.${lang}`)} />
              <div className="weather_body">
                <div className="title">
                  <h2>
                    {t(`fergana.${lang}`)}
                  </h2>
                  <p>{todayWeather}</p>
                </div>
                <figure>
                  {weatherImg &&
                    <img src={'http://openweathermap.org/img/wn/' + weatherImg} alt="weather-logo" />}
                </figure>
                <h4 className="temperature">
                  {temp && temp > 0 ? "+" + temp?.toFixed(1) + "°C" : temp?.toFixed(1) + "°C"}
                </h4>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={12} xs={24}>
            <div className="useful_link_card">
              <TitleBlock text={t(`usefulLinks.${lang}`)} />
              <div className="useful_link_body">
                {
                  cardLinks.map(usefulLink => (
                    <a
                      href={usefulLink.url_name}
                      key={usefulLink.id}
                      target={"_blank"}
                    >
                      <div className="useful_link">
                        <img
                          src={usefulLink.image}
                          alt={`link${usefulLink.id}`}
                        />
                        <p className="link_text">
                          {usefulLink.name}
                        </p>
                      </div>
                    </a>
                  ))
                }
              </div>
            </div>
          </Col>
          <Col lg={6} sm={12} xs={24}>
            <div className="survey_card">
              <TitleBlock text={t(`interview.${lang}`)} />
              <div className="survey">
                <h5 className="survey_title">
                  {t(`survey.${lang}`)}
                </h5>
                <div className="survey_radios">
                  <Radio.Group onChange={onChange} value={surveyValue}>
                    <Space direction="vertical">
                      <Radio value="A'lo">{t(`ans1.${lang}`)}</Radio>
                      <Radio value="Yaxshi">{t(`ans2.${lang}`)}</Radio>
                      <Radio value="Qoniqarli">{t(`ans3.${lang}`)}</Radio>
                      <Radio value="Qoniqarsiz">{t(`ans4.${lang}`)}</Radio>
                    </Space>
                  </Radio.Group>
                </div>

                <div className="button_area">
                  <Button
                    type='primary'
                    onClick={openAlert}
                  >
                    {t(`vote.${lang}`)}
                  </Button>
                  <div className="left">
                    <Button
                      type="primary"
                      onClick={showModal}
                    >
                      {t(`results.${lang}`)}
                    </Button>
                    <Modal
                      title={t(`survey.${lang}`)}
                      visible={isModalVisible}
                      onOk={handleOk}
                      onCancel={handleCancel}
                      footer={null}
                    >
                      <span>{t(`ans1.${lang}`)}</span>
                      <Progress
                        percent={75}
                        showInfo={false}
                        strokeWidth={18}
                      />
                      <span>{t(`ans2.${lang}`)}</span>
                      <Progress
                        percent={40}
                        status="exception"
                        showInfo={false}
                        strokeWidth={18}
                      />
                      <span>{t(`ans3.${lang}`)}</span>
                      <Progress
                        percent={50}
                        showInfo={false}
                        strokeColor={"#2baab1"}
                        strokeWidth={18}
                      />
                      <span>{t(`ans4.${lang}`)}</span>
                      <Progress
                        percent={20}
                        showInfo={false}
                        strokeColor="#383f48"
                        strokeWidth={18}
                      />
                    </Modal>
                  </div>
                </div>
                <div className="alert_area">
                  {
                    isOpenAlert ? (
                      <Alert
                        message={alertProps.message}
                        type={alertProps.type}
                        closable

                      />
                    ) : null
                  }
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default BlockBanner