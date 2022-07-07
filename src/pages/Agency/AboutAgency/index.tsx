import { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pageUrl } from "../../../api/apiUrls";
import baseAPI from "../../../api/baseAPI";
import { PageUrlInfoType, PageUrlResType } from "../../../types";

function AboutAgency() {
  const { slug } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [pageData, setPageData] = useState<PageUrlInfoType>({} as PageUrlInfoType);

  const getPageData = useCallback(() => {
    setLoading(true);
    baseAPI.fetchAll<PageUrlResType>(pageUrl + "/" + slug)
      .then((res) => {
        if (res.data.status === "200") {
          setPageData(res.data?.data);
          setLoading(false);
        }
      })
      .catch(e => console.log('Error:', e.message))
  }, [slug]);

  useEffect(() => {
    getPageData();
  }, [getPageData])

  const { title, content } = pageData;

  return (
    <div className="about_agency_card page_card">
      <h4 className="page_title">
        {title}
      </h4>
      <div 
        className="about_agency_body" 
        dangerouslySetInnerHTML={{__html: content}}
      />
    </div>
  )
}

export default AboutAgency