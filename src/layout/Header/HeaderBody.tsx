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
              <Fade direction='down' delay={100}>
                <Link to="/" className='site_logo'>
                  <div className='logo_imgBx'>
                    <img className="site_logo_img" src="/assets/img/logo.svg" alt="karantin agentligi" />
                  </div>
                  <h2 className="site_title">{t(`state.${lang}`)}</h2>
                </Link>
              </Fade>
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className="right">
              <Row gutter={[16, 16]} justify='center'>
                <Col xs={0} sm={12}>
                  <div className="fax">
                    <i className="fa-solid fa-map-location-dot"></i>
                    <p className="fax_text">
                      {t(`address.${lang}`)}: <br />
                      {t(`fullAddress.${lang}`)} <br />
                      {t(`email.${lang}`)}: <a href="mailto: info@farkarantin.uz" className='email'>
                         info@farkarantin.uz
                      </a>
                    </p>
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
                        <a className="phone_url" href="tel:+998732431046">
                          (+99873)
                          <span className="tel_number">
                            243 10 46
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
                        <a className="phone_url" href="tel:+998732431115">
                          (+99873)
                          <span className="tel_number">
                            243 11 15
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