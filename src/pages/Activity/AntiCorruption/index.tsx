import { Col, Row, Pagination } from 'antd';
import { useState } from "react";
import NewsCard from '../../../components/NewsCard';
import antiCorruptionData from "./antiCorruptionData.json";


function AntiCorruption() {

  const [current, setCurrent] = useState<number>(1);

  const onPageChange = (page: number) => {
    setCurrent(page);
  }

  return (
    <div className="youth">
      <h4 className="page_title">
        Korrupsiyaga qarshi faoliyat
      </h4>
      <div className="youth_body">
        <Row gutter={[16, 16]}>
          {antiCorruptionData?.map(antiCorruption => (
            <Col lg={8} md={12} key={antiCorruption.id}>
              <NewsCard {...antiCorruption}
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

export default AntiCorruption