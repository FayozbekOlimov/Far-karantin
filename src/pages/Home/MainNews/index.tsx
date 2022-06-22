import { Col, Row } from 'antd'
import BannerSlider from './BannerSlider';
import MainNewsRight from './MainNewsRight';
import "./style.scss";

function MainNews() {
  return (
    <div className='main_news'>
      <div className="container">
        <Row gutter={[16, 16]}>
          <Col lg={18}>
            <BannerSlider />
          </Col>
          <Col lg={6}>
            <MainNewsRight />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default MainNews