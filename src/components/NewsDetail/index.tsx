import { Col, Image, Row } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { newsDetailUrl } from "../../api/apiUrls";
import baseAPI from "../../api/baseAPI";
import { NewsDetailInfoType, NewsDetailResType, NewsUrlInfoType, NewsUrlResType } from "../../types";
import './style.scss';

function NewsDetail() {
    let { slug } = useParams();
    const [newsDetail, setNewsDetail] = useState<NewsDetailInfoType>({} as NewsDetailInfoType);
    const [loading, setLoading] = useState<boolean>(true);

    const getNewsDetailData = useCallback(() => {
        setLoading(true);
        baseAPI.fetchAll<NewsDetailResType>(newsDetailUrl + "/" + slug)
            .then((res) => {
                if (res.data.status === "200") {
                    setNewsDetail(res.data?.data);
                    setLoading(false);
                }
            })
            .catch(e => console.log('Error:', e.message));
    }, [slug]);

    useEffect(() => {
        getNewsDetailData();
    }, [getNewsDetailData])

    return (
        <div className='newsDetail'>
            <div className="container">
                <h3 className="title">{newsDetail.title}</h3>
                <Row gutter={[16, 16]}>
                    <Col xs={24} md={8} className="newsDetail-imgBx">
                        <Image
                            src={newsDetail.image}
                            width={"100%"} 
                        />
                    </Col >
                    <Col xs={24} md={16}
                        dangerouslySetInnerHTML={{ __html: newsDetail.content }}
                    />
                </Row>
            </div>
        </div>
    )
}

export default NewsDetail