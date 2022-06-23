
import { Outlet } from 'react-router-dom'
import { Row, Col } from "antd";
import "./style.scss";
import MainSidebar from '../../components/MainSidebar';

function Agency() {

  return (
    <section className="about_agency main_page">
      <div className="container">
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={18}>
            <Outlet />
          </Col>
          <Col xs={0} lg={6}>
            <MainSidebar id={0} />
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default Agency