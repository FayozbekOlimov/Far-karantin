import React, { useCallback, useEffect, useState } from 'react'
import "./style.scss";
import LeaderCard from "./LeaderCard";
import { Divider } from 'antd';
import { useParams } from 'react-router-dom';
import baseAPI from '../../../api/baseAPI';
import { LeaderUrlInfoType, LeaderUrlResType } from '../../../types';
import { leaderUrl } from '../../../api/apiUrls';

function Leadership() {
  const { slug } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [pageData, setPageData] = useState<LeaderUrlInfoType>([]);

  const getPageData = useCallback(() => {
    setLoading(true);
    baseAPI.fetchAll<LeaderUrlResType>(leaderUrl + "/" + slug)
      .then((res) => {
        if (res.data.status === "200") {
          setPageData(res.data?.data);
          setLoading(false);
        }
      })
      .catch(e => console.log('Error:', e.message));
  }, [slug]);

  useEffect(() => {
    getPageData();
  }, [getPageData])

  return (
    <div className="leadership_card">
      <h4 className="page_title">
        {pageData[0]?.leader_category_id}
      </h4>
      <div className="leadership_body">
        {pageData.map((item) => (
          <React.Fragment key={item.id}>
            <LeaderCard {...item} />
            <Divider className='divider' />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default Leadership