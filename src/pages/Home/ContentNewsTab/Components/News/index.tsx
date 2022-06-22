import { Col, Row } from 'antd';


import contentNewsCardDatas from "./contentNewsCardDatas.json";
import NewsCard from '../../../../../components/NewsCard';

function News() {
  return (
    <div className='content_news'>
      <Row gutter={[16, 16]}>
        {
          contentNewsCardDatas.map(contentNewsCardData => (
            <Col lg={6} key={contentNewsCardData.id}>
              <NewsCard  {...contentNewsCardData} />
            </Col>
          ))
        }
      </Row>
    </div>
  )
}

export default News