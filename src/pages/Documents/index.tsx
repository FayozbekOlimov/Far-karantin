import React from 'react';
import { Col, Row } from 'antd'
import { Outlet } from 'react-router-dom'
import MainSidebar from '../../components/MainSidebar'

function Documents() {
  return (
    <div className='documents main_page'>
      <div className="container">
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={18}>
            <Outlet />
          </Col>
          <Col xs={0} lg={6}>
            <MainSidebar id={'3'} />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Documents