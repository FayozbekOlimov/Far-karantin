import React, { useCallback, useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import "./style.scss";
import { Link } from 'react-router-dom';
import { MenuItemInfoType, MenuUrlResType } from '../../types';
import { menuUrl } from '../../api/apiUrls';
import baseAPI from '../../api/baseAPI';

function SiteMap() {
  const [loading, setLoading] = useState<boolean>(true);
  const [menuUrls, setMenuUrls] = useState<MenuItemInfoType>([]);

  const getMenuUrls = useCallback(() => {
    setLoading(true);
    baseAPI.fetchAll<MenuUrlResType>(menuUrl)
      .then((res) => {
        if (res.data[0].status === "200") {
          setMenuUrls(res.data[0].data);
          setLoading(false);
        }
      })
      .catch(e => console.log('Error:', e.message));
  }, []);

  useEffect(() => {
    getMenuUrls();
  }, [getMenuUrls])

  return (
    <section className="site_map">
      <div className="container">
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} md={18}>
            <div className="site_map_card page_card">
              <h4 className="page_title">
                Sayt xaritasi
              </h4>
              <div className="site_map_body">
                <Link to="/" className={"site_link-title"}>
                  Bosh sahifa
                </Link>
                {
                  menuUrls.map((categories, ind) => (
                    <React.Fragment key={ind}>
                      <p className="site_link-title">
                        {categories.menuName}
                      </p>
                      <ul className="subcategories">
                        {
                          menuUrls[ind].subMenus.map((subcategory, ind) => (
                            <li className="subcategory" key={ind}>
                              <Link
                                to={`/${categories.to}/${subcategory.type}/${subcategory.to}`}
                                className={"site_link"}
                              >
                                {subcategory.subName}
                              </Link>
                            </li>
                          ))
                        }
                      </ul>
                    </React.Fragment>
                  ))
                }
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default SiteMap