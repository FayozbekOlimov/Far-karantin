import { Col, Row } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { searchUrl, newsDetailUrl } from '../../api/apiUrls';
import baseAPI from '../../api/baseAPI';
import { useT } from '../../custom-hooks/useT';
import { NewsDetailInfoType, SearchUrlResType } from '../../types';
import './style.scss';

function Search() {
  const { t, lang } = useT();
  const [searchParams] = useSearchParams();
  let key = searchParams.get("key");

  const [searchResult, setSearchResult] = useState<NewsDetailInfoType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getSearchResults = useCallback(() => {
    setLoading(true);
    baseAPI.fetchAll<SearchUrlResType>(searchUrl + "/" + key)
      .then(res => {
        if (res.data.status === '200') {
          setSearchResult(res.data?.data);
          setLoading(false);
        }
      })
      .catch(e => console.log('Error:', e.message));
  }, [key]);

  useEffect(() => {
    getSearchResults();
  }, [getSearchResults])

  return (
    <div className='search'>
      <div className="container">
        <Row gutter={[16, 16]} justify='center'>
          <Col xs={24} md={18}>
            <div className="search_result page_card">
              <h4 className="page_title">
                {t(`searchRes.${lang}`)}
              </h4>
              {!loading && (
                <ul className='search_list'>
                  {searchResult.length !== 0 ? searchResult.map(res => (
                    <li key={res.id}>
                      <NavLink to={`/${newsDetailUrl}/${res.slug}`}>{res.title}</NavLink>
                    </li>
                  )) : (
                    <p className='no-found'>Hech narsa topilmadi</p>
                  )}
                </ul>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Search