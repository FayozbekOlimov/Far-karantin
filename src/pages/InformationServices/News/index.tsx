import React, { useState } from 'react'
import { Col, Row, Pagination } from 'antd';
import NewsCard from '../../../components/NewsCard';
import NewsData from "./NewsData.json"

function News() {
  const [current, setCurrent] = useState<number>(1);

  const onPageChange = (page: number) => {
    setCurrent(page);
  }

  return (
    <div className="news">
      <h4 className="page_title">
        Agentlik yangiliklari
      </h4>
      <div className="news_body">
        <Row gutter={[16, 16]}>
          {NewsData?.map(news => (
            <Col lg={8} md={12} key={news.id}>
              <NewsCard {...news}
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

export default News