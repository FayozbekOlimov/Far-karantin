import { Col, Pagination, Row } from 'antd';
import { useCallback, useEffect, useState } from 'react'
import { galleryUrl } from '../../../api/apiUrls';
import baseAPI from '../../../api/baseAPI';
import PhotoGalleryCard from '../../../components/PhotoGalleryCard';
import { GalleryUrlInfoType, GalleryUrlResType } from '../../../types';

function FotoGallery() {
  const [current, setCurrent] = useState<number>(1);

  const onPageChange = (page: number) => {
    console.log("page", page);
    setCurrent(page);
  }

  const [galleryData, setGalleryData] = useState<GalleryUrlInfoType>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getGalleryData = useCallback(() => {
    setLoading(true);
    baseAPI.fetchAll<GalleryUrlResType>(galleryUrl)
      .then((res) => {
        if (res.data.status === "200") {
          setGalleryData(res.data?.data);
          setLoading(false);
        }
      })
      .catch(e => console.log('Error:', e.message));
  }, []);

  useEffect(() => {
    getGalleryData();
  }, [getGalleryData])

  return (
    <div className="foto_gallery">
      <h4 className="page_title">
        Fotogaleriya
      </h4>
      <div className='foto_gallery_body'>
        <Row gutter={[16, 16]}>
          {
            galleryData?.map(foto => (
              <Col md={24} key={foto.id}>
                <PhotoGalleryCard {...foto} />
              </Col>
            ))
          }
        </Row>
        {/* <Row>
          <div className="pagination_area">
            <Pagination
              defaultCurrent={1}
              total={200}
              onChange={onPageChange}
              defaultPageSize={12}
              showSizeChanger={false}
            />
          </div>
        </Row> */}
      </div>
    </div>
  )
}

export default FotoGallery