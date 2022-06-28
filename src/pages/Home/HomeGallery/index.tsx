import { Col, Row } from "antd";
import { useCallback, useEffect, useState } from "react";
import { bannerUrl } from "../../../api/apiUrls";
import baseAPI from "../../../api/baseAPI";
import PhotoGalleryCard from "../../../components/PhotoGalleryCard";
import eventCardDatas from "./eventCardDatas.json";

function HomeGallery() {
  // type BannerUrlResType = {
  //   status: number,
  //   message: string,
  //   data: BannerUrlInfoType
  // }
  // type BannerUrlInfoType = {
  //   item: {
  //     id: number,
  //     image: string
  //   }[]
  // }
  // const [loading, setLoading] = useState<boolean>(true);
  // const [bannerData, setBannerData] = useState<BannerUrlInfoType>({} as BannerUrlInfoType);
  // const getBannerData = useCallback(() => {
  //   setLoading(true);
  //   baseAPI.fetchAll<BannerUrlResType>(bannerUrl)
  //     .then((res) => {
  //       if (res.data.status === 200) {
  //         setBannerData(res.data.data);
  //         console.log(res.data.data)
  //         setLoading(false);
  //       } else {
  //         alert(res.data.message)
  //       }
  //     })
  // }, []);

  // useEffect(() => {
  //   getBannerData();
  // }, [getBannerData])

  return (
    <div className="home_gallery">
      <div className="container">
        <Row gutter={[16, 16]}>
          {
            eventCardDatas.map((eventCardData, ind) => (
              <Col xs={24} lg={12} key={ind}>
                <PhotoGalleryCard {...eventCardData} />
              </Col>
            ))
          }
        </Row>
      </div>
    </div>
  )
}

export default HomeGallery