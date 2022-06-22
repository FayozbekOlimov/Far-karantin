import React from 'react'
import { Row, Col, Form, Input, Button } from "antd";
import FerganaMap from '../Home/FerganaMap';


function Contacts() {

  const onFinish = (values: any) => {
    console.log('Success:', values);

  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <section className="contact main_page">
      <div className="container">
        <div className="contact_top page_card">
          <Row gutter={[16, 16]}>
            <Col lg={6} md={12}>
              <div className="address_card">
                <p className="address_text">
                  <strong>  Manzil:</strong> 100100, O'zbekiston Respublikasi, Toshkent sh., Bobur ko`chasi 17-uy
                </p>

                <p className="address_text"> <strong> Mo’ljal:</strong> "NEXT" savdo markazi</p>

                <p className="address_text"> <strong> Yaqin bekatlar:</strong> Alisher Navoiy nomidagi Toshkent davlat o'zbek tili va adabiyoti universiteti</p>

                <p className="address_text"> <strong>Avtobuslar:</strong> 47, 11, 76, 32, 126, 3, 92, 81</p>

                <p className="address_text"> <strong>Ish kunlari va vaqtlari (soat):</strong> Dushanba-Juma 9:00 dan 18:00 gacha</p>

                <p className="address_text"> <strong> Tushlik vaqti:</strong> 13:00 dan 14:00 gacha</p>

                <p className="address_text"> <strong> Telefon raqamlar:</strong> (+99871)202-10-00</p>



                <p className="address_text"> <strong>Elektron manzil:</strong> info@karantin.uz</p>

                <p className="address_text"> <strong>O'zbekiston Respublikasi O'simliklar Karantini va Himoyasi Agentligi davlat xizmatlarini ko'rsatishda aloqa markazi (ishonch telefoni) faoliyatini tashkil etish tartibi to'g'risidagi nizom:</strong></p>

                <a href="/assets/docs/nizom.doc" target="_blank" rel="noopener noreferrer">
                  Ko'rish
                </a>
              </div>
            </Col>
            <Col lg={6} md={12}>
              <div className="address_card">
                <p className="address_text">
                  <strong>
                    Bank Rekvizitlari:
                  </strong><br />
                  Toshkent sh. Bobur 1-berk ko`ch, 17 uy. <br />
                  M.V. G`aznachiligi <br />
                  Yagona hisob raqami: 2340 2000 3001 0000 1010 <br />
                  Bank Kodi: 00014 <br />
                  M.V. G`aznachiligi STIRi 201122919 <br />
                  SH/R: 4001 1086 0262 7379 5010 0020 001     <br />
                  Inspeksiya STIRi 201 283 204
                </p>
              </div>
            </Col>
            <Col lg={12}>

              <div className="contact_form_card">
                <h3 className="form_title">
                  Qayta bog'lanish
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
                      <Col md={12}>
                        <Form.Item

                          label="Ism"
                          name="name"
                          rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col md={12} >

                        <Form.Item
                          label="Elektron manzil"
                          name="email"
                          rules={[{ required: true, message: "Please input your E-mail!" }, { message: "The input is not valid E-mail!", type: "email" }]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>

                      <Col md={24}>
                        <Form.Item
                          label="Telefon"
                          name="phone"
                          rules={[{ required: true, message: 'Please input your telefon!' }]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col md={24}>
                        <Form.Item
                          name="message"
                          label="Xabar"
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
                          Jo'natish
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