import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import style from '../../style/Shop.module.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export const Shop = ()=>{
    return<>
        <div className={style.shopmain}>
            <div className={style.shopimage}>
                <Swiper navigation={true} modules={[Navigation]} className={style.mySwiper}>
                    <SwiperSlide className={style.swiperslides}>
                        <img src="https://nav.porsche.com/00BC524/series-assets/1024/718@2x.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide className={style.swiperslides}>
                        <img src="https://nav.porsche.com/00BC524/series-assets/1024/718@2x.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide className={style.swiperslides}>
                        <img src="https://nav.porsche.com/00BC524/series-assets/1024/718@2x.jpg"/>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className={style.shoppay}>
                <div className={style.shopbtngroup}>
                    <button>Cash</button>
                </div>
                <div className={style.shoppaymentmain}>
                    <div className={style.shoppayment}>
                        <h5>Vehicle Price</h5><h5 className={style.shoppayprice}>30,000$</h5>
                    </div>
                    <div className={style.shoppayment}>
                        <h5>Destination fee</h5><h5 className={style.shoppayprice}>1,000$</h5>
                    </div>
                    <div className={style.shoppayment}>
                        <h5>Order fee</h5><h5 className={style.shoppayprice}>100$</h5>
                    </div>
                </div>
                <hr/>
                <div className={style.shoppaylast}>
                    <h4>Due Today</h4>
                    <h4>250$</h4>
                </div>
                <button className={style.shopend}>Order with Card</button>
            </div>
        </div>
    </>
}