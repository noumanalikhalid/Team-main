import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import style from "../../style/ModelCarsouel.module.css";

export const ModelCarsouel = () => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        loop={true}
        className={style.mainModelCarso}
      >
        <SwiperSlide>
          <h1>718 Cayman</h1>
          <img src="https://i.ibb.co/0CBjkMp/cayman.png" />
          <div className={style.powercontainer}>
            <div className={style.power}>
              <h2>4,2s</h2>
              <p>Acceleration 0-100km/h</p>
            </div>
            <div className={style.power}>
              <h2>283kW/385 PS</h2>
              <p>Power[kW]/Power[PS]</p>
            </div>
            <div className={style.power}>
              <h2>291km/h</h2>
              <p>Top Speed</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <h1>718 Cayman</h1>
          <img src="https://i.ibb.co/37vSjxS/boxster.png" />
          <div className={style.powercontainer}>
            <div className={style.power}>
              <h2>4,5s</h2>
              <p>Acceleration 0-100km/h</p>
            </div>
            <div className={style.power}>
              <h2>280kW/375 PS</h2>
              <p>Power[kW]/Power[PS]</p>
            </div>
            <div className={style.power}>
              <h2>300km/h</h2>
              <p>Top Speed</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
