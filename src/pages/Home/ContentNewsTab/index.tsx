import React, { useCallback, useEffect, useState } from 'react'
import { Col, Row, Tabs } from 'antd';
import "./style.scss";
import { Link } from 'react-router-dom';
import News from "./Components/News"
import { NewsUrlInfoType, NewsUrlResType } from '../../../types';
import { bannerNewsUrl } from '../../../api/apiUrls';
import baseAPI from '../../../api/baseAPI';
import NewsCard from '../../../components/NewsCard';
const { TabPane } = Tabs;

const operations = <Link to="/news" className={"news_link"}>Axborot xizmati</Link>;

// tablinkData
// const tabLinkDatas = [
//   {
//     tab: "Yangiliklar",
//     key: "1",
//     component: News
//   },
//   {
//     tab: "Tadbirlar",
//     key: "2",
//     component: News
//   },
//   {
//     tab: "Yangiliklar",
//     key: "3",
//     component: News
//   },
//   {
//     tab: "Yangiliklar",
//     key: "4",
//     component: News
//   }
// ]

function ContentNewsTab() {
  const [bannerNews, setBannerNews] = useState<NewsUrlInfoType>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getBannerNewsData = useCallback(() => {
    setLoading(true);
    baseAPI.fetchAll<NewsUrlResType>(bannerNewsUrl)
      .then((res) => {
        if (res.data.status === "200") {
          setBannerNews(res.data?.data);
          setLoading(false);
        }
      })
      .catch(e => console.log('Error:', e.message));
  }, []);

  useEffect(() => {
    getBannerNewsData();
  }, [getBannerNewsData])

  return (
    <div className='content_news_tab'>
      <div className="container">
        <h4 className="page_title">
          Axborot xizmati
        </h4>
        <Row gutter={[16, 16]}>
          {bannerNews.map((news) => (
            <Col lg={8} md={12} key={news.id}>
              <NewsCard {...news} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default ContentNewsTab