import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import style from '../../style/CarCarsouel.module.css'

export const CarCarsouel = ()=>{
    return<>
        <div className={style.CarCarsouel}>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                loop={true}
            >
                <SwiperSlide className={style.sliders}>
                <h1>911 Carrera</h1>
                <img src="https://i.ibb.co/gvMZ6d2/911carrera.png" />
                <div className={style.powerContain}>
                <div className={style.power}>
                    <h2>283kW/385 PS</h2>
                    <p>Power[kW]/Power[PS]</p>
                </div>
                <div className={style.power}>
                    <h2>4,2s</h2>
                    <p>Acceleration 0-100km/h</p>
                </div>
                <div className={style.power}>
                    <h2>291km/h</h2>
                    <p>Top Speed</p>
                </div>
                </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </>
}