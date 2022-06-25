import { Col, Row, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useT } from '../../custom-hooks/useT';
import { changeLang, LangType, setLang } from '../../helpers';

// const { Search } = Input;

function HeaderTop() {
  const onSearch = (value: string) => console.log(value);
  const { t, lang } = useT();

  type Tlangs = [
    { 1: string, 2: "uz" },
    { 1: string, 2: "ru" },
    { 1: string, 2: "en" }
  ]

  let langs: Tlangs = [{ 1: "O'z", 2: "uz" }, { 1: "Ru", 2: "ru" }, { 1: "En", 2: "en" }];

  const handleSetLang = (language: LangType) => {
    setLang(language);
    changeLang(language);
    window.location.reload();
  }

  const SocialMedia = () => {
    return (
      <ul className="social_medias">
        <li className="social_media">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-telegram"></i>
          </a>
        </li>
        <li className="social_media">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </li>
      </ul>
    )
  }

  return (
    <div className="header_top">
      <div className="container">
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={8} md={12} style={{ display: 'flex', gap: '20px', justifyContent: 'space-between' }}>
            <div className="left">
              <div className="special_menu">
                <ul className="special_menu_links">
                  <li className="special_menu_link">
                    <Link to={"/siteMap"}>
                      <i className="fa fa-sitemap"></i>
                      <span>{t(`siteMap.${lang}`)}</span>
                    </Link>
                  </li>
                  <li className="special_menu_link">
                    <i className="fa fa-mobile-screen"></i>
                    <span>Mobil taqvim</span>
                  </li>
                  <li className="special_menu_link">
                    <i className="fa fa-eye"></i>
                    <span>Zaif ko'ruvchilar uchun</span>
                  </li>
                  <li className="special_menu_link">
                    <i className="fa fa-volume-up"></i>
                    <span>Ovozli o'qish</span>
                  </li>
                </ul>
              </div>
              <SocialMedia />
            </div>
          </Col>
          <Col xs={24} sm={16} md={12}>
            <div className="right">
              <SocialMedia />
              <div className="search_area">
                <input type="search" placeholder="Sayt bo'ylab qidiruv" /><i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <div className="language_area">
                <ul className="languages">
                  {langs.map(lang => (
                    <li key={lang[2]} onClick={() => handleSetLang(lang[2])}>{lang[1]}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default HeaderTop