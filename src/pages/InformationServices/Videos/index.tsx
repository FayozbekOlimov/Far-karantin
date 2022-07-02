import { Col, Pagination, Row } from 'antd'
import React, { useState } from 'react'
import VideoCard from './VideoCard'
import "./style.scss";
import videoCardData from "./videoCardData.json"
import { useParams } from 'react-router-dom';

function Videos() {
  const [current, setCurrent] = useState<number>(1);
  // const [pageData, setPageData] = useState<PageUrlInfoType>();
  const { slug } = useParams();
  const [loading, setLoading] = useState<boolean>(true);

  const onPageChange = (page: number) => {
    setCurrent(page);
  }

  // const getPageData = useCallback(() => {
  //   setLoading(true);
  //   baseAPI.fetchWithPagination<PageUrlResType>(newsUrl + "/" + slug)
  //     .then((res) => {
  //       if (res.data.status === "200") {
  //         setPageData(res.data?.data);
  //         setLoading(false);
  //       }
  //     })
  //     .catch(e => console.log('Error:', e.message));
  // }, [slug]);

  // useEffect(() => {
  //   getPageData();
  // }, [getPageData])

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