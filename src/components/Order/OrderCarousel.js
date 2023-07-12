import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "../../style/OrderCarousel.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export const OrderCarousel = () => {
  const [cardata, setCardata] = useState([]);
  let carname = localStorage.getItem("CarName");
  let carmodel = localStorage.getItem("CarModel");
  let carcolor = localStorage.getItem("Color");
  let carWheel = localStorage.getItem("CarWheel");
  let carLight = localStorage.getItem("Light");
  if (carcolor === "Default") {
    carcolor = "Silver";
  }
  if (carWheel === "Default") {
    carWheel = "Steel";
  }
  if (carLight === "Default") {
    carLight = "Normal";
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3333/ModelPage/single",
          {
            params: {
              name: carname,
              model: carmodel,
              color: carcolor,
              wheel: carWheel,
              light: carLight,
            },
          }
        );
        setCardata(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div>
        {cardata.map((data, index) => (
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className={style.shopSwiper}
            loop={true}
            key={index}
          >
            {data.productimage.map((image, imageIndex) => (
              <SwiperSlide key={imageIndex} className={style.swiperslides}>
                <img
                  src={`http://localhost:3333/uploads/${image}`}
                  alt={data.model}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ))}
      </div>
    </>
  );
};
