import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import { Fade } from "react-awesome-reveal";
import { useT } from '../../custom-hooks/useT';

function HeaderBody() {
  const { t, lang } = useT();
  return (
    <div className="header_body">
      <div className="container">
        <Row gutter={[16, 16]} justify='center'>
          <Col xs={24} lg={12}>
            <div className="left">
              {/* <Fade direction='down' delay={100}> */}
              <Link to="/">
                <figure>
                  <img className="site_logo_img" src="/assets/img/logo.svg" alt="karantin agentligi" />
                </figure>
                <h2 className="site_title" dangerouslySetInnerHTML={{__html: t(`state.${lang}`)}} />
              </Link>
              {/* </Fade> */}
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className="right">
              <Row gutter={[16, 16]} justify='center'>
                <Col xs={0} sm={12}>
                  <div className="fax">
                    {/* <a href="#"> */}
                    <i className="fa-solid fa-map-location-dot"></i>
                    <p className="fax_text">
                      {t(`address.${lang}`)}: <br />
                      100100, Toshkent sh., <br />
                      "Bobur" 1-berk ko'chasi, 17-uy <br />
                      {t(`email.${lang}`)}: <a href="mailto:info@karantin.uz" className='email'>
                        info@karantin.uz
                      </a>
                    </p>
                    {/* </a> */}
                  </div>
                </Col>
                <Col xs={24} sm={12}>
                  <div className="phone">
                    <div className="phone_top">
                      <div>
                        <i className="fa-solid fa-phone"></i>
                      </div>
                      <p className="phone_body">
                        <span className="tel_text">{t(`hotline.${lang}`)}</span> <br />
                        <a className="phone_url" href="tel:+998712028484">
                          (+99871)
                          <span className="tel_number">
                            202 84 84
                          </span>
                        </a>
                      </p>
                    </div>
                    <div className="phone_top bottom">
                      <div>
                        <i className="fa-solid fa-phone"></i>
                      </div>
                      <p className="phone_body">
                        <span className="tel_text">{t(`callCenter.${lang}`)}</span> <br />
                        <a href="tel:1288" className="tel_number">
                          1288,
                        </a>
                        <a className="phone_url" href="tel:+998712028484">
                          (+99871)
                          <span className="tel_number">
                            202 84 84
                          </span>
                        </a>
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default HeaderBody