import React from 'react'
import { Row, Col } from "antd";
import { Outlet } from "react-router-dom";
import MainSidebar from '../../components/MainSidebar';


function InformationServices() {

  return (
    <section className="information_services main_page">
      <div className="container">
        <Row gutter={[16, 16]}>
          <Col md={18}>
            <Outlet />
          </Col>
          <Col md={6}>
            <MainSidebar id={2} />
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default InformationServices