import { useCallback, useEffect, useState } from 'react'
import { Col, Row, Tabs } from 'antd';
import { NewsUrlInfoType, NewsUrlResType } from '../../../types';
import { bannerNewsUrl, congratulationUrl, mediaUrl, moralUrl } from '../../../api/apiUrls';
import baseAPI from '../../../api/baseAPI';
import NewsCard from '../../../components/NewsCard';
import { useT } from '../../../custom-hooks/useT';
import "./style.scss";

function ContentNewsTab() {
  const [bannerNews, setBannerNews] = useState<NewsUrlInfoType>([]);
  const [congratulation, setCongratulation] = useState<NewsUrlInfoType>([]);
  const [media, setMedia] = useState<NewsUrlInfoType>([]);
  const [moral, setMoral] = useState<NewsUrlInfoType>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const { t, lang } = useT();
  const { TabPane } = Tabs;
  const operation = <h4 className="page_title">{t(`infoService.${lang}`)}</h4>;

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

  const getCongratulationData = useCallback(() => {
    setLoading(true);
    baseAPI.fetchAll<NewsUrlResType>(congratulationUrl)
      .then((res) => {
        if (res.data.status === "200") {
          setCongratulation(res.data?.data);
          setLoading(false);
        }
      })
      .catch(e => console.log('Error:', e.message));
  }, []);

  useEffect(() => {
    getCongratulationData();
  }, [getCongratulationData])

  const getMediaData = useCallback(() => {
    setLoading(true);
    baseAPI.fetchAll<NewsUrlResType>(mediaUrl)
      .then((res) => {
        if (res.data.status === "200") {
          setMedia(res.data?.data);
          setLoading(false);
        }
      })
      .catch(e => console.log('Error:', e.message));
  }, []);

  useEffect(() => {
    getMediaData();
  }, [getMediaData])

  const getMoralData = useCallback(() => {
    setLoading(true);
    baseAPI.fetchAll<NewsUrlResType>(moralUrl)
      .then((res) => {
        if (res.data.status === "200") {
          setMoral(res.data?.data);
          setLoading(false);
        }
      })
      .catch(e => console.log('Error:', e.message));
  }, []);

  useEffect(() => {
    getMoralData();
  }, [getMoralData])

  return (
    <div className='content_news_tab'>
      <div className="container">
        <Tabs defaultActiveKey="1" tabBarExtraContent={{ left: operation }} animated={{ tabPane: true }}>
          <TabPane tab={bannerNews[0]?.post_category_id} key="1">
            <Row gutter={[16, 16]}>
              {bannerNews.slice(-4).map((news) => (
                <Col lg={6} md={12} key={news.id}>
                  <NewsCard {...news} />
                </Col>
              ))}
            </Row>
          </TabPane>
          <TabPane tab={congratulation[0]?.post_category_id} key="2">
            <Row gutter={[16, 16]}>
              {congratulation.slice(-4).map((news) => (
                <Col lg={6} md={12} key={news.id}>
                  <NewsCard {...news} />
                </Col>
              ))}
            </Row>
          </TabPane>
          <TabPane tab={media[0]?.post_category_id} key="3">
            <Row gutter={[16, 16]}>
              {media.slice(-4).map((news) => (
                <Col lg={6} md={12} key={news.id}>
                  <NewsCard {...news} />
                </Col>
              ))}
            </Row>
          </TabPane>
          <TabPane tab={moral[0]?.post_category_id} key="4">
            <Row gutter={[16, 16]}>
              {moral.slice(-4).map((news) => (
                <Col lg={6} md={12} key={news.id}>
                  <NewsCard {...news} />
                </Col>
              ))}
            </Row>
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
}

export default ContentNewsTab