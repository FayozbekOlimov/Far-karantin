import React, { useCallback, useEffect, useState } from 'react'
import { Col, Row, Image } from 'antd'
import "./style.scss";
import { useParams } from 'react-router-dom';
import baseAPI from '../../api/baseAPI';
import { galleryUrl } from '../../api/apiUrls';
import { GalleryViewUrlInfoType, GalleryViewUrlResType } from '../../types';

function GalleryView() {
  const { slug } = useParams();
  const [galleryView, setGalleryView] = useState<GalleryViewUrlInfoType>({} as GalleryViewUrlInfoType);
  const [loading, setLoading] = useState<boolean>(true);

  const getGalleryViewData = useCallback(() => {
    setLoading(true);
    baseAPI.fetchAll<GalleryViewUrlResType>(galleryUrl + "/" + slug)
      .then((res) => {
        if (res.data.status === "200") {
          setGalleryView(res.data?.data);
          setLoading(false);
        }
      })
      .catch(e => console.log('Error:', e.message));
  }, []);

  useEffect(() => {
    getGalleryViewData();
  }, [getGalleryViewData])

  return (
    <section className="gallery_view">
      <div className="container">
        <h4 className="page_title">
          {galleryView.title}
        </h4>
        <Row gutter={[16, 16]}>
          <Image.PreviewGroup>
            {
              galleryView?.images?.map((link, ind) => (
                <Col
                  lg={6}
                  md={8}
                  sm={12}
                  key={ind}
                >
                  <Image
                    src={link}
                    width={"100%"} 
                    height={"240px"}
                  />
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