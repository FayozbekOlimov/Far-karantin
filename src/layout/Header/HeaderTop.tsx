import { Col, Input, Row } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { socialNetworkUrl } from '../../api/apiUrls';
import baseAPI from '../../api/baseAPI';
import { useT } from '../../custom-hooks/useT';
import { changeLang, getLang, setLang } from '../../helpers';
import { LangType, SocialLinkInfoType, SocialLinkResType, Tlangs } from '../../types';
const { Search } = Input;

function HeaderTop() {
  // const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState<{ key: string }>({} as { key: string });

  const { t, lang } = useT();
  let langs: Tlangs = [{ 1: "O'z", 2: "uz" }, { 1: "Ru", 2: "ru" }, { 1: "En", 2: "en" }];
  const handleSetLang = (language: LangType) => {
    let currLang = getLang();

    if (language !== currLang) {
      changeLang(language);
      setLang(language);
      window.location.reload();
    }
  }

  const location = useLocation();
  const mobileVersion = () => { window.open(location.pathname, "_blank", "width=375px,height=576px,left=300,top=100"); }
  const verForVisImp = () => { document.body.classList.toggle('white-black'); }

  const [socialLinks, setSocialLinks] = useState<SocialLinkInfoType>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getSocialLinks = useCallback(() => {
    setLoading(true);
    baseAPI.fetchAll<SocialLinkResType>(socialNetworkUrl)
      .then(res => {
        if (res.data.status === '200') {
          setSocialLinks(res.data?.data);
          setLoading(false);
        }
      })
      .catch(e => console.log('Error:', e.message));
  }, []);

  useEffect(() => {
    getSocialLinks();
  }, [getSocialLinks])

  const handleSearchValue = (e: any) => {
    setSearchValue({ key: e.target.value });
  }

  const onSearch = () => {
    if (searchValue.key && searchValue.key.trim().length > 2) {
      navigate(`/search?${new URLSearchParams(searchValue)}`);
      setSearchValue({ key: '' });
    }
  }

  const SocialMedia = () => {
    return (
      <ul className="social_medias">
        {socialLinks.map((link) => (
          <li className="social_media" key={link.id}>
            <a href={link.url_name} target="_blank" rel="noopener noreferrer">
              <i className={`fab ${link.icon_code}`}></i>
            </a>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div className="header_top">
      <div className="container">
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={8} md={14} style={{ display: 'flex', gap: '20px', justifyContent: 'space-between' }}>
            <div className="left">
              <div className="special_menu">
                <ul className="special_menu_links">
                  <li className="special_menu_link">
                    <Link to={"/siteMap"}>
                      <i className="fa fa-sitemap"></i>
                      <span>{t(`siteMap.${lang}`)}</span>
                    </Link>
                  </li>
                  <li className="special_menu_link" onClick={mobileVersion}>
                    <i className="fa fa-mobile-screen"></i>
                    <span>{t(`mobileVersion.${lang}`)}</span>
                  </li>
                  <li className="special_menu_link" onClick={verForVisImp}>
                    <i className="fa fa-eye"></i>
                    <span>{t(`verForVisImp.${lang}`)}</span>
                  </li>
                  {/* <li className="special_menu_link">
                    <i className="fa fa-volume-up"></i>
                    <span>{t(`soundAcc.${lang}`)}</span>
                  </li> */}
                </ul>
              </div>
              <SocialMedia />
            </div>
          </Col>
          <Col xs={24} sm={16} md={10}>
            <div className="right">
              <SocialMedia />
              <div className="search_area">
                <Search
                  placeholder={t(`search.${lang}`)}
                  type='search'
                  value={searchValue.key}
                  onChange={handleSearchValue}
                  onSearch={onSearch}
                  enterButton={<i className="fa-solid fa-magnifying-glass"></i>}
                />
              </div>
              <div className="language_area">
                <ul className="languages">
                  {langs.map(lang => (
                    <li className={getLang() === lang[2] ? 'active' : undefined} key={lang[2]} onClick={() => handleSetLang(lang[2])}>{lang[1]}</li>
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