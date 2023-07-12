import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import style from "../../style/ModelCarsouel.module.css";
import axios from "axios";

export const ModelCarsouel = () => {
  const [cardata, setCardata] = useState([]);
  let carname = localStorage.getItem("CarName");
  let carmodel = localStorage.getItem("CarModel");
  let carcolor = localStorage.getItem("Color");
  let carWheel = localStorage.getItem("CarWheel");
  let carLight = localStorage.getItem("Light");
  if (carcolor === "Default"){
      carcolor = "Silver";
  }
  if(carWheel === "Default"){
      carWheel = "Steel";
  }
  if(carLight === "Default"){
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
              light: carLight
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
    <div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        loop={true}
        className={style.mainModelCarso}
      >
        {cardata.map((cardatas, index) => (
          <div key={index}>
            {cardatas.productimage.map((image, imageIndex) => (
              <SwiperSlide key={imageIndex}>
                <img
                  key={imageIndex}
                  src={`http://localhost:3333/uploads/${image}`}
                  height="450px"
                  alt={cardatas.model}
                />
                <div className={style.powercontainer}>
                  <div className={style.power}>
                    <h2>{cardatas.milage}</h2>
                    <p>Power[kW]/Power[PS]</p>
                  </div>
                  <div className={style.power}>
                    <h2>{cardatas.maxpower}</h2>
                    <p>Top Speed</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        ))}
      </Swiper>
    </div>
  );
};
