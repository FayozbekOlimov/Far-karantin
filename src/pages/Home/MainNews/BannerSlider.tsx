import { useCallback, useEffect, useState } from 'react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { bannerUrl } from '../../../api/apiUrls';
import baseAPI from '../../../api/baseAPI';

function BannerSlider() {
  type BannerUrlResType = {
    status: number,
    message: string,
    data: BannerUrlInfoType
  }
  type BannerUrlInfoType = {
    item: {
      id: number,
      image: string
    }[]
  }

  const [loading, setLoading] = useState<boolean>(true);
  const [bannerData, setBannerData] = useState<BannerUrlInfoType>({} as BannerUrlInfoType);
  
  const getBannerData = useCallback(() => {
    setLoading(true);
    baseAPI.fetchAll<BannerUrlResType>(bannerUrl)
      .then((res) => {
        if (res.data.status === 200) {
          setBannerData(res.data.data);
          setLoading(false);
        } else {
          console.log(res.data.message)
        }
      })
  }, []);

  useEffect(() => {
    getBannerData();
  }, [getBannerData])

  console.log(bannerData)

  return (
    <div className='banner_slider'>
      <Swiper
        // install Swiper modules
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        loop={true}
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {
          Array.of(1, 2, 3).map((arg, ind) => (
            <SwiperSlide key={ind}>
              <div className="slider_img_container">
                <img className="main_news_img" src={`/assets/img/slide${arg}.jpg`} alt={`slide${arg}`} />
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default BannerSlider