import React from 'react'
import { Col, Row } from 'antd'
import { Outlet } from 'react-router-dom'
import MainSidebar from '../../components/MainSidebar'

function Activity() {
  return (
    <section className="activity main_page">
      <div className="container">
        <Row gutter={[16, 16]}>
          <Col md={18}>
            <Outlet />
          </Col>
          <Col md={6}>
            <MainSidebar id={1} />
          </Col>

        </Row>
      </div>
    </section>
  )
}

export default Activity