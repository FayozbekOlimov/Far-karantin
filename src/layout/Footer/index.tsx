import { Col, Row } from 'antd';
import { useT } from '../../custom-hooks/useT';
import "./style.scss";

function Footer() {
  const {t, lang} = useT();
  return (
    <div className="footer">
      <div className="container">
        <Row gutter={[16, 16]}>
          <Col lg={9} xs={24}>
            <div className="copyrigt">
              <figure>
                <img src="/assets/img/gerb_logo.png" alt="gerb" />
              </figure>
              <div className="copyright_text">
                <h3>{t(`state.${lang}`)}</h3>
                <p>
                  2022 © {t(`copyright.${lang}`)}
                </p>
              </div>
            </div>
          </Col>
          <Col lg={15} xs={24}>
            <div className="right">
              <p>{t(`updated.${lang}`)}: 04.07.2022, 12:52</p>
              <p>{t(`source.${lang}`)}</p>
              <p>{t(`license.${lang}`)}: <a href="https://creativecommons.org/licenses/by/4.0/" target={'_blank'}>Creative Commons Attribution 4.0 International</a></p>
            </div>
          </Col>
        </Row>
        <p className='creator'>{t(`creator.${lang}`)}: <a href="http://isoftware.uz/" target={'_blank'}>iSoft - IT Company</a></p>
      </div>
    </div>
  )
}

export default Footer