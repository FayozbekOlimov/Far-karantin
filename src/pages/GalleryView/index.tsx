import React from 'react'
import { Col, Row, Image } from 'antd'
import "./style.scss";

const galleryViewData = {
  "1": {
    src: "/assets/img/gallery_view.jpg"
  },
  "2": {
    src: "/assets/img/gallery_view2.jpg"
  },
  "3": {
    src: "/assets/img/gallery_view.jpg"
  },
  "4": {
    src: "/assets/img/gallery_view2.jpg"
  },

}

function GalleryView() {
  return (
    <section className="gallery_view">
      <div className="container">
        <h4 className="page_title">
          Chigirtkaga qarshi kurashda xalqaro tajriba
        </h4>
        <Row gutter={[16, 16]}>
          <Image.PreviewGroup>
            {
              Object.entries(galleryViewData).map(([id, { src }]) => (
                <Col
                  lg={6}
                  md={8}
                  sm={12}
                  key={id}
                >
                  <Image
                    src={src}
                    width={"100%"} />
                </Col>
              ))
            }
          </Image.PreviewGroup>
        </Row>
      </div>
    </section>
  )
}

export default GalleryView