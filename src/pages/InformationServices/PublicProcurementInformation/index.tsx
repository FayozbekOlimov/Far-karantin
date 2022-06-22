import React, { useState } from 'react';
import { Col, Pagination, Row } from 'antd'
import InfoCard from '../../../components/InfoCard'
import PublicProcurementInformationData from "./PublicProcurementInformationData.json"


function PublicProcurementInformation() {

  const [current, setCurrent] = useState<number>(1);

  const onPageChange = (page: number) => {
    setCurrent(page);
  }

  return (
    <div className="public_info">
      <h4 className="page_title">
        Davlat xaridlari to'g'risida ma'lumot
      </h4>
      <div className="public_info_body">
        <Row gutter={[16, 16]}>
          {PublicProcurementInformationData?.map(news => (
            <Col lg={24} key={news.id}>
              <InfoCard {...news}
              />
            </Col>
          ))
          }
        </Row>
        <Row>
          <div className="pagination_area">
            <Pagination
              defaultCurrent={1}
              total={200}
              onChange={onPageChange}
              defaultPageSize={12}
              showSizeChanger={false}
            />
          </div>

        </Row>
      </div>
    </div>
  )
}

export default PublicProcurementInformation