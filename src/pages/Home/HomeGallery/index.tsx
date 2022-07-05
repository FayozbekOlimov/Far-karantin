import { Button, Col, Row } from "antd";
import { useCallback, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { latestGalleryUrl, latestVideoUrl } from "../../../api/apiUrls";
import baseAPI from "../../../api/baseAPI";
import { useT } from "../../../custom-hooks/useT";
import { LatestVideoUrlInfoType, LatestVideoUrlResType, NewsUrlResType, PhotoGalleryCardInfoType, PhotoGalleryCardResType } from "../../../types";
import './style.scss';

function HomeGallery() {
  const [loading, setLoading] = useState<boolean>(true);
  const [galleryCard, setGalleryCard] = useState<PhotoGalleryCardInfoType>({} as PhotoGalleryCardInfoType);

  const getGalleryCardData = useCallback(() => {
    setLoading(true);
    baseAPI.fetchAll<PhotoGalleryCardResType>(latestGalleryUrl)
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

  const [video, setVideo] = useState<LatestVideoUrlInfoType>({} as LatestVideoUrlInfoType);
  const getVideoData = useCallback(() => {
    setLoading(true);
    baseAPI.fetchAll<LatestVideoUrlResType>(latestVideoUrl)
      .then((res) => {
        if (res.data.status === "200") {
          setVideo(res.data?.data);
          setLoading(false);
        }
      })
      .catch(e => console.log('Error:', e.message));
  }, []);

  useEffect(() => {
    getVideoData();
  }, [getVideoData])

  const { t, lang } = useT();

  return (
    <div className="home_gallery">
      <div className="container">
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={12}>
            <div className="photo_gallery_card">
              <div className="photo_gallery_top">
                <h2 className="photo_gallery_top_title">
                  {t(`pics.${lang}`)}
                </h2>
                <Link to={"axborot-xizmati/c-action/gallery"} className="more_link">{t(`allPics.${lang}`)}</Link>
              </div>

              <Link to={`/gallery-detail/${galleryCard.slug}`} >
                <div className="photo_gallery_body">
                  <img
                    className='photo_gallery_img'
                    src={galleryCard?.image}
                    alt={galleryCard?.title}
                  />
                  <div className={`content`}>
                    <div className="left">
                      <span className="content_title">
                        {galleryCard?.title}
                      </span>
                      <Button type="text">{galleryCard?.created_at}</Button>
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
                  {t(`video.${lang}`)}
                </h2>
                <Link to={"axborot-xizmati/c-action/video"} className="more_link"> {t(`allVideos.${lang}`)}</Link>
              </div>

              <div className="photo_gallery_body video-player-wrapper">
                <ReactPlayer
                  className='video-player'
                  url={video?.video_url}
                  controls={true}
                  light={true}
                />
                <div className={`content`}>
                  <div className="left">
                    <span className="content_title">
                      {video?.name}
                    </span>
                    <Button type="text">{video?.created_at}</Button>
                  </div>
                </div>
              </div>
              {/* </Link> */}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default HomeGallery