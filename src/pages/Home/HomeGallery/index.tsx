import { Button, Col, Row } from "antd";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { galleryUrl } from "../../../api/apiUrls";
import baseAPI from "../../../api/baseAPI";
import PhotoGalleryCard from "../../../components/PhotoGalleryCard";
import eventCardDatas from "./eventCardDatas.json";
import './style.scss';


type PhotoGalleryCardResType = {
  status: string,
  message: string,
  data: PhotoGalleryCardInfoType
}

type PhotoGalleryCardInfoType = {
  id: string,
  title: string,
  image: string,
  slug: string,
  created_at: string
}[]

function HomeGallery() {
  const [loading, setLoading] = useState<boolean>(true);
  const [galleryCard, setGalleryCard] = useState<PhotoGalleryCardInfoType>([]);

  const getGalleryCardData = useCallback(() => {
    setLoading(true);
    baseAPI.fetchAll<PhotoGalleryCardResType>(galleryUrl)
      .then((res) => {
        if (res.data.status === "200") {
          setGalleryCard(res.data?.data);
          setLoading(false);
        }
      })
      .catch(e => console.log('Error:', e.message));
  }, []);

  useEffect(() => {
    getGalleryCardData();
  }, [getGalleryCardData])


  return (
    <div className="home_gallery">
      <div className="container">
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={12}>
            <div className="photo_gallery_card">
              <div className="photo_gallery_top">
                <h2 className="photo_gallery_top_title">
                  Rasmlar
                </h2>
                <Link to={"c-action/gallery"} className="more_link">Barcha rasmlar</Link>
              </div>

              <Link to={'csdcs'} >
                <div className="photo_gallery_body">
                  <img
                    className='photo_gallery_img'
                    src={galleryCard[0]?.image}
                    alt={galleryCard[0]?.title}
                  />
                  <div className={`content`}>
                    <div className="left">
                      <span className="content_title">
                        {galleryCard[0]?.title}
                      </span>
                      <Button type="text">{galleryCard[0]?.created_at}</Button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className="photo_gallery_card">
              <div className="photo_gallery_top">
                <h2 className="photo_gallery_top_title">
                  Videolar
                </h2>
                <Link to={"c-action/gallery"} className="more_link">Barcha rasmlar</Link>
              </div>

              <Link to={'csdcs'} >
                <div className="photo_gallery_body">
                  <img
                    className='photo_gallery_img'
                    src={galleryCard[0]?.image}
                    alt={galleryCard[0]?.title}
                  />
                  <div className={`content`}>
                    <div className="left">
                      <span className="content_title">
                        {galleryCard[0]?.title}
                      </span>
                      <Button type="text">{galleryCard[0]?.created_at}</Button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default HomeGallery