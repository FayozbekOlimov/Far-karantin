import { Col, Row, Pagination } from 'antd';
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { newsUrl } from '../../../api/apiUrls';
import baseAPI from '../../../api/baseAPI';
import NewsCard from '../../../components/NewsCard';
import { NewsUrlInfoType, NewsUrlResType } from '../../../types';
import cardData from "../../cardData.json"

function Youth() {
  const { slug } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [pageData, setPageData] = useState<NewsUrlInfoType>([]);

  const getPageData = useCallback(() => {
    setLoading(true);
    baseAPI.fetchAll<NewsUrlResType>(newsUrl + "/" + slug)
      .then((res) => {
        if (res.data.status === "200") {
          setPageData(res.data?.data);
          setLoading(false);
          console.log(res.data.data);
          
        }
      })
      .catch(e => console.log('Error:', e.message));
  }, [slug]);

  useEffect(() => {
    getPageData();
  }, [getPageData])

  const [current, setCurrent] = useState<number>(1);

  const onPageChange = (page: number) => {
    setCurrent(page);
  }

  return (
    <div className="youth">
      <h4 className="page_title">
        {pageData[0]?.post_category_id}
      </h4>
      <div className="youth_body">
        <Row gutter={[16, 16]}>
          {pageData.map(data => (
            <Col lg={8} md={12} key={data.id}>
              <NewsCard {...data}
              />
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

export default Youth