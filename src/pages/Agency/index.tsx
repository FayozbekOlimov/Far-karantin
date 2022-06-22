
import { Outlet } from 'react-router-dom'
import { Row, Col } from "antd";
import "./style.scss";
import MainSidebar from '../../components/MainSidebar';

function Agency() {

  return (
    <section className="about_agency main_page">
      <div className="container">
        <Row gutter={[16, 16]}>
          <Col md={18}>
            <Outlet />
          </Col>
          <Col md={6}>
            <MainSidebar id={0} />
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default Agency