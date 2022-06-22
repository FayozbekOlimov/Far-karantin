import { Col, Row } from 'antd';
import React from 'react'
import "./style.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <Row gutter={[16, 16]}>
          <Col lg={9} md={24}>
            <div className="copyrigt">
              <figure>
                <img src="/assets/img/gerb_logo.png" alt="gerb" />
              </figure>
              <div className="copyright_text">
                <h3>
                  O'ZBEKISTON RESPUBLIKASI <br />
                  O'SIMLIKLAR KARANTINI VA HIMOYASI <br />
                  AGENTLIGI
                </h3>
                <p>
                  2022 © Barcha huquqlar himoyalangan.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={15} md={24}>
            <div className="right">

            </div>
          </Col>

        </Row>
      </div>
    </div>
  )
}

export default Footer