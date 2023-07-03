import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import style from "../../style/ModelCarsouel.module.css";
import axios from "axios";

export const ModelCarsouel = () => {
  const [cardata, setCardata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3333/ModelPage/single",
          {
            params: {
              name: "Taycan",
              model: "Turbo S",
              color: "Silver",
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
                  height="500px"
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
