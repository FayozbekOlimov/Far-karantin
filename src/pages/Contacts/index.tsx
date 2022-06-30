import { Row, Col, Form, Input, Button } from "antd";
import { useCallback, useEffect, useState } from "react";
import { contactDataUrl } from "../../api/apiUrls";
import baseAPI from "../../api/baseAPI";
import { BASE_IMG_URL } from "../../constants";
import { useT } from "../../custom-hooks/useT";
import { ContactDataInfoType, ContactDataResType } from "../../types";
import FerganaMap from '../Home/FerganaMap';
import './style.scss';

function Contacts() {
  const { t, lang } = useT();

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const [contactData, setContactData] = useState<ContactDataInfoType>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getContactData = useCallback(() => {
    setLoading(true);
    baseAPI.fetchAll<ContactDataResType>(contactDataUrl)
      .then((res) => {
        if (res.data.status === "200") {
          setContactData(res.data?.data);
          setLoading(false);
        }
      })
      .catch(e => console.log('Error:', e.message));
  }, []);

  useEffect(() => {
    getContactData();
  }, [getContactData]);

  return (
    <section className="contact main_page">
      <div className="container">
        <div className="contact_top page_card">
          <Row gutter={[16, 16]}>
            <Col lg={6} md={12}>
              <div className="address_card">
                <p className="address_text"><strong>{t(`address.${lang}`)}: </strong>{contactData[0]?.address}</p>
                <p className="address_text"><strong>{t(`nextTo.${lang}`)}: </strong>{contactData[0]?.destination}</p>
                <p className="address_text"><strong>{t(`stations.${lang}`)}: </strong> Alisher Navoiy nomidagi Toshkent davlat o'zbek tili va adabiyoti universiteti</p>
                <p className="address_text"><strong>{t(`buses.${lang}`)}: </strong>47, 11, 76, 32, 126, 3, 92, 81</p>
                <p className="address_text"><strong>{t(`schedule.${lang}`)}: </strong>{contactData[0]?.work_time}</p>
                <p className="address_text"><strong>{t(`lunch.${lang}`)}: </strong>{contactData[0]?.lunch_time}</p>
                <p className="address_text">
                  <strong>{t(`phoneNumbers.${lang}`)}: </strong> <br />
                  <a href={`tel: ${contactData[0]?.phone_first}`}>{contactData[0]?.phone_first}</a> <br />
                  <a href={`tel: ${contactData[0]?.phone_second}`}>{contactData[0]?.phone_second}</a>
                </p>
                <p className="address_text">
                  <strong>{t(`email.${lang}`)}: </strong>
                  <a className="email" href={`mailto: ${contactData[0]?.email}`}>{contactData[0]?.email}</a>
                </p>
                <p className="address_text">
                  <strong>{t(`rule.${lang}`)}: </strong>
                </p>
                <a href={BASE_IMG_URL + contactData[0]?.download} target="_blank" rel="noopener noreferrer">
                  {t(`see.${lang}`)}
                </a>
              </div>
            </Col>
            <Col lg={6} md={12}>
              <div className="address_card">
                <p className="address_text">
                  <strong>{t(`bankDetails.${lang}`)}: </strong><br />
                  {contactData[0]?.bank_detail}
                </p>
              </div>
            </Col>
            <Col lg={12}>
              <div className="contact_form_card">
                <h3 className="form_title">
                  {t(`reconnect.${lang}`)}
                </h3>
                <div className="contact_form">
                  <Form
                    name="basic"
                    // initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout='vertical'
                  >
                    <Row gutter={[16, 16]}>
                      <Col xs={12}>
                        <Form.Item
                          style={{ marginBottom: '0' }}
                          label={t(`name.${lang}`)}
                          name="name"
                          rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={12} >
                        <Form.Item
                          style={{ marginBottom: '0' }}
                          label={t(`email.${lang}`)}
                          name="email"
                          rules={[{ required: true, message: "Please input your E-mail!" }, { message: "The input is not valid E-mail!", type: "email" }]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>

                      <Col xs={24}>
                        <Form.Item
                          style={{ marginBottom: '0' }}
                          label={t(`phone.${lang}`)}
                          name="phone"
                          rules={[{ required: true, message: 'Please input your telefon!' }]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24}>
                        <Form.Item
                          name="message"
                          label={t(`msg.${lang}`)}
                          rules={[{ required: true, message: 'Please input Message!' }]}
                        >
                          <Input.TextArea rows={10} showCount maxLength={500} />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={[16, 16]}>
                      <Col md={24}>
                        <Button className="send_btn" htmlType="submit">
                          <i className="fa-solid fa-paper-plane"></i>
                          {t(`send.${lang}`)}
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <FerganaMap />
    </section>
  )
}

export default Contacts