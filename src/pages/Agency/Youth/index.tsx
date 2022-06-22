import { Col, Row, Pagination } from 'antd';
import React, { useState } from 'react'
import NewsCard from '../../../components/NewsCard';
import cardData from "../../cardData.json"


function Youth() {

  const [current, setCurrent] = useState<number>(1);

  const onPageChange = (page: number) => {
    setCurrent(page);
  }

  return (
    <div className="youth">
      <h4 className="page_title">
        Yoshlarga oid yangiliklar
      </h4>
      <div className="youth_body">
        <Row gutter={[16, 16]}>
          {cardData?.map(data => (
            <Col lg={8} md={12} key={data.id}>
              <NewsCard {...data}
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

export default Youth