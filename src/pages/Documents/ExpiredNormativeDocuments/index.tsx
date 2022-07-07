import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { filesUrl } from '../../../api/apiUrls';
import baseAPI from '../../../api/baseAPI';
import { FileUrlInfoType, FileUrlResType } from '../../../types';

function ExpiredNormativeDocuments() {
  const { slug } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [pageData, setPageData] = useState<FileUrlInfoType>([]);

  const getPageData = useCallback(() => {
    setLoading(true);
    baseAPI.fetchAll<FileUrlResType>(filesUrl + "/" + slug)
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

  // const [current, setCurrent] = useState<number>(1);

  // const onPageChange = (page: number) => {
  //   setCurrent(page);
  // }
  return (
    <div className="statistics_considered page_card">
      <h4 className="page_title">
        {pageData[0]?.subcategory_id}
      </h4>
      <div className="statistics_body">
        {
          pageData.map((item) => (
            <a
              key={item.id}
              className='statistic_link'
              href={item.file_download}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.file_name}
            </a>
          ))
        }
      </div>
    </div>
  )
}

export default ExpiredNormativeDocuments