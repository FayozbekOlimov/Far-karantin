import { Col, Pagination, Row } from 'antd'
import React, { useCallback, useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import "./style.scss";
import videoCardData from "./videoCardData.json"
import { useParams } from 'react-router-dom';
import { VideoUrlInfoType, VideoUrlResType } from '../../../types';
import { videoUrl } from '../../../api/apiUrls';
import baseAPI from '../../../api/baseAPI';

function Videos() {
  const [current, setCurrent] = useState<number>(1);
  const [videoData, setVideoData] = useState<VideoUrlInfoType>([]);
  // const { slug } = useParams();
  const [loading, setLoading] = useState<boolean>(true);

  const onPageChange = (page: number) => {
    setCurrent(page);
  }

  const getVideoData = useCallback(() => {
    setLoading(true);
    baseAPI.fetchAll<VideoUrlResType>(videoUrl)
      .then((res) => {
        if (res.data.status === "200") {
          setVideoData(res.data?.data);
          setLoading(false);
        }
      })
      .catch(e => console.log('Error:', e.message));
  }, []);

  useEffect(() => {
    getVideoData();
  }, [getVideoData])

  return (
    <div className="videos page_card">
      <h4 className="page_title">
        Video
      </h4>
      <div className="videos_body">
        <Row gutter={[16, 16]}>
          {
            videoData.map((item) => (
              <Col
                key={item.id}
                lg={8}
                md={12}
                xs={24}
              >
                <VideoCard {...item} />
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

export default Videos