import { useCallback, useEffect, useState } from 'react'
import { Col, Row } from 'antd';
import "./style.scss";
// import { Link } from 'react-router-dom';
// import News from "./Components/News"
import { NewsUrlInfoType, NewsUrlResType } from '../../../types';
import { bannerNewsUrl } from '../../../api/apiUrls';
import baseAPI from '../../../api/baseAPI';
import NewsCard from '../../../components/NewsCard';
import { useT } from '../../../custom-hooks/useT';
// const { TabPane } = Tabs;

function ContentNewsTab() {
  const [bannerNews, setBannerNews] = useState<NewsUrlInfoType>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const {t, lang} = useT();

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
          {t(`infoService.${lang}`)}
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