import { Link } from 'react-router-dom';
import VirtualAdmission from './VirtualAdmission';
import "./style.scss";
import { useCallback, useEffect, useState } from 'react';
import { usefulLinkUrl } from '../../../../api/apiUrls';
import baseAPI from '../../../../api/baseAPI';
import { UsefulLinkInfoType, UsefulLinkResType } from '../../../../types';
import { useT } from '../../../../custom-hooks/useT';

function MainNewsRight() {
  const {t, lang} = useT();
  const [loading, setLoading] = useState<boolean>(true);
  const [usefulLink, setUsefulLink] = useState<UsefulLinkInfoType>([]);

  const getUsefulLink = useCallback(() => {
    setLoading(true);
    baseAPI.fetchAll<UsefulLinkResType>(usefulLinkUrl)
      .then((res) => {
        if (res.data.status === "200") {
          setUsefulLink(res.data?.data);
          setLoading(false);
        }
      })
      .catch(e => console.log('Error:', e.message));
  }, []);

  useEffect(() => {
    getUsefulLink();
  }, [getUsefulLink]);

  return (
    <div className="main_news_right">
      {usefulLink.map((item) => (
        <VirtualAdmission {...item} key={item.id} />
      ))}

      <Link
        to={'/symbols'}
        rel="noopener noreferrer"
        className='symbol_box_link'
      >
        <div className="sidebar_sybols">
          <span dangerouslySetInnerHTML={{__html: t(`symbols.${lang}`)}} />
        </div>
      </Link>

      <div className="sidebar_block1">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/img/prezident.jpg" alt="prezident" />
          <h4 className='sidebar_block_title'>
            {t(`yearName.${lang}`)}
          </h4>
        </a>
      </div>
    </div>
  )
}

export default MainNewsRight