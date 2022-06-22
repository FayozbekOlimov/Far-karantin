import { Col, Pagination, Row } from 'antd';
import React, { useState } from 'react'
import PhotoGalleryCard from '../../../components/PhotoGalleryCard';
import fotoGalleryData from "./fotoGalleryData.json";

function FotoGallery() {

  const [current, setCurrent] = useState<number>(1);

  const onPageChange = (page: number) => {
    console.log("page", page);
    setCurrent(page);
  }

  return (
    <div className="foto_gallery">
      <h4 className="page_title">
        Fotogaleriya
      </h4>
      <div className='foto_gallery_body'>
        <Row gutter={[16, 16]}>
          {
            fotoGalleryData?.map(foto => (
              <Col md={24} key={foto.id}>
                <PhotoGalleryCard {...foto} />
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

export default FotoGallery