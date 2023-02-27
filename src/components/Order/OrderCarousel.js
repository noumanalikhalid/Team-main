import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import style from '../../style/OrderCarousel.module.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export const OrderCarousel = () => {
  return (
    <>
      <div>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className={style.shopSwiper}
        >
          <SwiperSlide className={style.swiperslides}>
            <img src="https://nav.porsche.com/00BC524/series-assets/1024/718@2x.jpg" />
          </SwiperSlide>
          <SwiperSlide className={style.swiperslides}>
            <img src="https://nav.porsche.com/00BC524/series-assets/1024/718@2x.jpg" />
          </SwiperSlide>
          <SwiperSlide className={style.swiperslides}>
            <img src="https://nav.porsche.com/00BC524/series-assets/1024/718@2x.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
