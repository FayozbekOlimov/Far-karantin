import React from 'react';
import { Col, Row } from 'antd';
import "./style.scss";
import { Link } from 'react-router-dom';

const categoriesDatas = [
  {
    id: "1",
    categoryName: "Agentlik",
    to: "agency",
    subcategories: [
      {
        to: "/agency/about",
        subcategoryName: "Agentlik haqida"
      },
      {
        to: "/agency/about",
        subcategoryName: "Agentlik haqida"
      },
      {
        to: "/agency/about",
        subcategoryName: "Agentlik haqida"
      },
      {
        to: "/agency/about",
        subcategoryName: "Agentlik haqida"
      },
      {
        to: "/agency/about",
        subcategoryName: "Agentlik haqida"
      }
    ]
  },
  {
    id: "2",
    categoryName: "Agentlik",
    to: "agency",
    subcategories: [
      {
        id: "1",
        to: "/agency/about",
        subcategoryName: "Agentlik haqida"
      },
      {
        id: "2",
        to: "/agency/about",
        subcategoryName: "Agentlik haqida"
      },
      {
        id: "3",
        to: "/agency/about",
        subcategoryName: "Agentlik haqida"
      },
      {
        id: "4",
        to: "/agency/about",
        subcategoryName: "Agentlik haqida"
      },
      {
        id: "5",
        to: "/agency/about",
        subcategoryName: "Agentlik haqida"
      }
    ]
  }
]

function SiteMap() {



  return (
    <section className="site_map main_page">
      <div className="container">
        <Row gutter={[16, 16]} justify="center">
          <Col md={18}>
            <div className="site_map_card page_card">
              <h4 className="page_title">
                Sayt xaritasi
              </h4>
              <div className="site_map_body">
                <Link to="/" className={"site_link"}>
                  Bosh sahifa
                </Link>
                {
                  categoriesDatas.map(categories => (
                    <React.Fragment key={categories.id}>
                      <Link
                        to={categories.to}
                        className="site_link"
                      >
                        {categories.categoryName}
                      </Link>
                      <ul className="subcategories">
                        {
                          categories.subcategories.map(subcategory => (
                            <li className="subcategory">
                              <Link
                                to={subcategory.to}
                                className={"site_link"}
                              >
                                {subcategory.subcategoryName}
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