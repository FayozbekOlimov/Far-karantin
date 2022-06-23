import { Col, Row } from 'antd'
import BannerSlider from './BannerSlider';
import MainNewsRight from './MainNewsRight';
import "./style.scss";

function MainNews() {
  return (
    <div className='main_news'>
      <div className="container">
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={18}>
            <BannerSlider />
          </Col>
          <Col xs={24} lg={6}>
            <MainNewsRight />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default MainNews