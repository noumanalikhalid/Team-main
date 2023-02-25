import React from 'react'
import style from '../../style/carousel.module.css'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay , Navigation} from "swiper";

export default () => {
    return (
        <div className={style.caros}>
        <Swiper 
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation = {true} 
        modules={[Autoplay , Navigation]}
        loop = {true}
        className={style.caros}>
            <SwiperSlide>
                <img src="https://di-uploads-pod15.dealerinspire.com/porscheofhuntsville/uploads/2020/05/2017-Macan-GTS-Red-small.jpg"  />
            </SwiperSlide>
            <SwiperSlide >
                <img src="https://di-uploads-pod15.dealerinspire.com/porschestpaul/uploads/2019/03/911_CarreraS_Hero_Image-1024x320.jpg"  />
            </SwiperSlide>
            <SwiperSlide >
                <img src="https://di-uploads-pod15.dealerinspire.com/porscheminneapolis/uploads/2022/05/porsche-normal.jpg"  />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://files.porsche.com/filestore/image/multimedia/none/countryselector-panamera-platinum-edition/normal/f2415bd6-3e3a-11ec-80e2-005056bbdc38;s45/porsche-normal.jpg"/>
            </SwiperSlide>
        </Swiper>
        </div>
    )
}

