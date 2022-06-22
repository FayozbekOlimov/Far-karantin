import { Col, Pagination, Row } from 'antd';
import React, { useState } from 'react'
import NewsCard from '../../../components/NewsCard';
import congratulationsData from "./congratulationsData.json";

function Congratulations() {
  const [current, setCurrent] = useState<number>(1);

  const onPageChange = (page: number) => {
    setCurrent(page);
  }

  return (
    <div className="congratulations">
      <h4 className="page_title">
        Tabriklar, bayonotlar
      </h4>
      <div className="congratulations_body">
        <Row gutter={[16, 16]}>
          {congratulationsData?.map(congratulation => (
            <Col lg={8} md={12} key={congratulation.id}>
              <NewsCard {...congratulation}
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

export default Congratulations