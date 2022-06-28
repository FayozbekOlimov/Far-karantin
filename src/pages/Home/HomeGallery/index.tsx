import { Col, Row } from "antd";
import { useCallback, useEffect, useState } from "react";
import { bannerUrl } from "../../../api/apiUrls";
import baseAPI from "../../../api/baseAPI";
import PhotoGalleryCard from "../../../components/PhotoGalleryCard";
import eventCardDatas from "./eventCardDatas.json";

function HomeGallery() {
  return (
    <div className="home_gallery">
      <div className="container">
        <Row gutter={[16, 16]}>
          {
            eventCardDatas.map((eventCardData, ind) => (
              <Col xs={24} lg={12} key={ind}>
                <PhotoGalleryCard {...eventCardData} />
              </Col>
            ))
          }
        </Row>
      </div>
    </div>
  )
}

export default HomeGallery