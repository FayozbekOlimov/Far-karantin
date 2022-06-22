import { useState } from 'react';
import { Col, Row, Radio, Space, RadioChangeEvent, Button, Modal, Progress, Alert } from 'antd'
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';
import "./style.scss";

import { Swiper, SwiperSlide } from 'swiper/react';
import TitleBlock from './TitleBlock';
import { Link } from 'react-router-dom';

const blockBannerImages = [
  {
    id: "1",
    imgUrl: "/assets/img/blockBannerImg.jpg"
  },
  {
    id: "2",
    imgUrl: "/assets/img/itpark.png"
  },
  {
    id: "3",
    imgUrl: "/assets/img/blockBannerImg.jpg"
  },
  {
    id: "4",
    imgUrl: "/assets/img/itpark.png"
  }

]

const usefulLinksDatas = [
  {
    id: "1",
    img: "/assets/img/aloqa.png",
    text: "Aloqa, axborotlashtirish va  telekommunikatsiya texnologiyalari sohasida nazorat bo‘yicha davlat inspeksiyasi",
    link: "#"
  },
  {
    id: "2",
    img: "/assets/img/aloqa.png",
    text: "Aloqa, axborotlashtirish va  telekommunikatsiya texnologiyalari sohasida nazorat bo‘yicha davlat inspeksiyasi",
    link: "#"
  },
  {
    id: "3",
    img: "/assets/img/aloqa.png",
    text: "Aloqa, axborotlashtirish va  telekommunikatsiya texnologiyalari sohasida nazorat bo‘yicha davlat inspeksiyasi",
    link: "#"
  },
  {
    id: "4",
    img: "/assets/img/aloqa.png",
    text: "Aloqa, axborotlashtirish va  telekommunikatsiya texnologiyalari sohasida nazorat bo‘yicha davlat inspeksiyasi",
    link: "#"
  },
  {
    id: "5",
    img: "/assets/img/aloqa.png",
    text: "Aloqa, axborotlashtirish va  telekommunikatsiya texnologiyalari sohasida nazorat bo‘yicha davlat inspeksiyasi",
    link: "#"
  },
  {
    id: "6",
    img: "/assets/img/aloqa.png",
    text: "Aloqa, axborotlashtirish va  telekommunikatsiya texnologiyalari sohasida nazorat bo‘yicha davlat inspeksiyasi",
    link: "#"
  },
  {
    id: "7",
    img: "/assets/img/aloqa.png",
    text: "Aloqa, axborotlashtirish va  telekommunikatsiya texnologiyalari sohasida nazorat bo‘yicha davlat inspeksiyasi",
    link: "#"
  },
  {
    id: "8",
    img: "/assets/img/aloqa.png",
    text: "Aloqa, axborotlashtirish va  telekommunikatsiya texnologiyalari sohasida nazorat bo‘yicha davlat inspeksiyasi",
    link: "#"
  },

]

function BlockBanner() {
  const [surveyValue, setSurveyValue] = useState<string>("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isOpenAlert, setIsOpenAlert] = useState<boolean>(false)
  const [alertProps, setAlertProps] = useState<{ message: string, type: "success" | "info" | "warning" | "error" }>({
    message: "",
    type: "success"
  })

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
        message: "Sizning javobingiz qabul qilindi",
        type: 'success'
      }))
    } else {
      setAlertProps(prev => ({
        ...prev,
        message: "Bitta javobni tanlang",
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

  return (
    <div className="block_banner">
      <div className="container">
        <Row gutter={[16, 16]}>
          {/* block slider */}
          <Col lg={6} md={12}>
            <div className="slider_card">
              <Swiper
                // install Swiper modules
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                effect={"fade"}
                loop={true}
                modules={[Autoplay, Navigation, Pagination, EffectFade]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
              >
                {
                  blockBannerImages.map(blockBannerImage => (
                    <SwiperSlide>
                      <div
                        className="slider_img_container"
                        key={blockBannerImage.id}>
                        <img
                          className="main_news_img"
                          src={blockBannerImage.imgUrl}
                          alt={"bannerImg"}
                        />
                      </div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
          </Col>

          <Col lg={6} md={12}>
            <div className="weather_card">
              <TitleBlock text="Toshkentda ob-havo" />
              <div className="weather_body">
                <div className="title">
                  <h2>
                    Toshkent
                  </h2>
                  <p>Bugun 08:00 dagi ob-havo</p>
                </div>
                <figure>
                  <img src="/assets/img/sunny.png" alt="sunny" />
                </figure>
                <h4 className="temperature">
                  +20,5 °C
                </h4>
              </div>
            </div>
          </Col>

          <Col lg={6} md={12}>
            <div className="useful_link_card">
              <TitleBlock text="Foydali havolalar" />
              <div className="useful_link_body">
                {
                  usefulLinksDatas.map(usefulLink => (
                    <Link
                      to={usefulLink.link}
                      key={usefulLink.id}
                    >
                      <div className="useful_link">

                        <img
                          src={usefulLink.img}
                          alt={usefulLink.text}
                          title={usefulLink.text}
                        />
                        <p className="link_text">
                          {usefulLink.text}
                        </p>
                      </div>
                    </Link>
                  ))
                }
              </div>
            </div>
          </Col>
          <Col lg={6} md={12}>
            <div className="survey_card">
              <TitleBlock text="So'rovnoma" />
              <div className="survey">
                <h5 className="survey_title">
                  Saytning yangi dizayni yoqdimi?
                </h5>
                <div className="survey_radios">
                  <Radio.Group onChange={onChange} value={surveyValue}>
                    <Space direction="vertical">
                      <Radio value={"alo"}>A'lo</Radio>
                      <Radio value={"yaxshi"}>Yaxshi</Radio>
                      <Radio value={"qoniqarli"}>Qoniqarli</Radio>
                      <Radio value={"qoniqarsiz"}>Qoniqarsiz</Radio>
                    </Space>
                  </Radio.Group>
                </div>

                <div className="button_area">
                  <Button
                    type='primary'
                    onClick={openAlert}
                  >
                    Yuborish
                  </Button>
                  <div className="left">
                    <Button
                      type="primary"
                      onClick={showModal}
                    >
                      Natijalar
                    </Button>
                    <Modal
                      title="Saytni yangi dizayni yoqdimi?"
                      visible={isModalVisible}
                      onOk={handleOk}
                      onCancel={handleCancel}
                      footer={null}
                    >
                      <span>A'lo</span>
                      <Progress
                        percent={75}
                        showInfo={false}
                        strokeWidth={18}

                      />
                      <span>Yaxshi</span>
                      <Progress
                        percent={75}
                        status="exception"
                        showInfo={false}
                        strokeWidth={18}
                      />
                      <span>Qoniqarli</span>
                      <Progress
                        percent={30}
                        showInfo={false}
                        strokeColor={"#2baab1"}
                        strokeWidth={18}
                      />
                      <span>Qoniqarsiz</span>
                      <Progress
                        percent={75}
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