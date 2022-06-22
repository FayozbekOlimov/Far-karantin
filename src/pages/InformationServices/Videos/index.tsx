import { Col, Pagination, Row } from 'antd'
import React, { useState } from 'react'
import VideoCard from './VideoCard'
import "./style.scss";
import videoCardData from "./videoCardData.json"

function Videos() {
  const [current, setCurrent] = useState<number>(1);

  const onPageChange = (page: number) => {
    setCurrent(page);
  }

  return (
    <div className="videos page_card">
      <h4 className="page_title">
        Video
      </h4>
      <div className="videos_body">
        <Row gutter={[16, 16]}>
          {
            Object.entries(videoCardData).map(([id, video]) => (
              <Col
                key={id}
                lg={8}
                md={12}
              >
                <VideoCard {...video} />
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

export default Videos