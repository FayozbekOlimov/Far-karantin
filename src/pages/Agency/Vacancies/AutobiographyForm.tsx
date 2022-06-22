import React, { useState } from 'react'
import { Button, Col, Form, Input, Row } from "antd";

function AutobiographyForm() {
  const [formValues, setFormValues] = useState<{ name: string, phone: string, email: string }>({
    name: "",
    phone: "",
    email: ""
  })
  const onFinish = (values: any) => {
    console.log('Success:', values);
    setFormValues(values)
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };



  return (
    <div className='autobioraphy_form'>
      <h2 className="form_title">
        Tarjimai hol jo'natish
      </h2>
      <div className="form_area">
        <Form
          name="basic"
          // initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout='vertical'
        >
          <Row gutter={[16, 16]}>
            <Col md={8} sm={24}>
              <Form.Item

                label="Ism"
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col md={8} sm={24}>

              <Form.Item
                label="Elektron manzil"
                name="email"
                rules={[{ required: true, message: "Please input your E-mail!" }, { message: "The input is not valid E-mail!", type: "email" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col md={8} sm={24}>
              <Form.Item
                label="Telefon"
                name="phone"
                rules={[{ required: true, message: 'Please input your telefon!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col lg={24}>
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
            <Col lg={16}>
              <Form.Item
                name="file"

                rules={[{ required: true, message: 'Please choose File!' }]}
              >
                <Button className='upload_file_btn'>
                  <Input type="file" />
                  <i className="fa-solid fa-cloud-arrow-up"></i>
                  File tanlang
                </Button>
              </Form.Item>
            </Col>
            <Col lg={8} >
              <Button className="send_btn" htmlType="submit">
                <i className="fa-solid fa-paper-plane"></i>
                Jo'natish
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div >
  )
}

export default AutobiographyForm