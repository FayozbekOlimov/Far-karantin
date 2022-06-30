import { useCallback, useEffect, useState } from 'react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { bannerImageUrl } from '../../../api/apiUrls';
import baseAPI from '../../../api/baseAPI';
import { BannerUrlInfoType, BannerUrlResType } from '../../../types';

function BannerSlider() {
  const [loading, setLoading] = useState<boolean>(true);
  const [bannerData, setBannerData] = useState<BannerUrlInfoType>([]);

  const getBannerData = useCallback(() => {
    setLoading(true);
    baseAPI.fetchAll<BannerUrlResType>(bannerImageUrl)
      .then((res) => {
        if (res.data.status === "200") {
          setBannerData(res.data?.data);
          setLoading(false);
        }
      })
      .catch(e => console.log('Error:', e.message));
  }, []);

  useEffect(() => {
    getBannerData();
  }, [getBannerData])

  return (
    <div className='banner_slider'>
      <Swiper
        // install Swiper modules
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect={"slide"}
        loop={true}
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {
          bannerData?.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="slider_img_container">
                <img className="main_news_img" src={item.image} alt={`slide${item.image}`} />
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default BannerSlider