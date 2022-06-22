import React, { useState } from 'react'
import { Col, Row, Pagination } from 'antd';
import cardData from "../../cardData.json"
import NewsCard from '../../../components/NewsCard';

function MediaAboutUs() {
  const [current, setCurrent] = useState<number>(1);

  const onPageChange = (page: number) => {
    setCurrent(page);
  }

  return (
    <div className="media_about_us">
      <h4 className="page_title">
        OAV biz haqimizda
      </h4>
      <div className="media_about_us_body">
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

export default MediaAboutUs