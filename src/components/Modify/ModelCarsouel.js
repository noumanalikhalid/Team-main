import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

import style from "../../style/ModelCarsouel.module.css";

export const ModelCarsouel = () => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        loop={true}
        className={style.mainModelCarso}
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/0CBjkMp/cayman.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/37vSjxS/boxster.png" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
