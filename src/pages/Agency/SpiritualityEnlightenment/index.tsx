import React, { useState } from 'react'
import { Col, Row, Pagination } from 'antd';
import "./style.scss";
import NewsCard from '../../../components/NewsCard';
import SpiritualityEnlightenmentData from "./SpiritualityEnlightenmentData.json";


function SpiritualityEnlightenment() {

  const [current, setCurrent] = useState<number>(1);

  const onPageChange = (page: number) => {
    setCurrent(page);
  }

  return (
    <div className="spirituality_enlightenment">
      <h4 className="page_title">
        Ma'naviyat va ma'rifat
      </h4>
      <div className="spirituality_enlightenment_body">
        <Row gutter={[16, 16]}>
          {SpiritualityEnlightenmentData?.map(spirituality => (
            <Col lg={8} md={12} key={spirituality.id}>
              <NewsCard {...spirituality}
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

export default SpiritualityEnlightenment