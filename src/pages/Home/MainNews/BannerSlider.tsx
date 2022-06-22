import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';


import { Swiper, SwiperSlide } from 'swiper/react';


function BannerSlider() {
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
          Array.of(1, 2, 3).map(arg => (
            <SwiperSlide>
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