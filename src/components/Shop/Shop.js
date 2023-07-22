import React, { useEffect, useState } from "react";
import style from "../../style/Shop.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Shop = () => {
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
  }, [carLight , carWheel , carcolor , carname , carmodel]);
  const Destination = 1000;
  const Order = 120;

  const OrderNavigation = useNavigate();
  const MovetoOrder = (price) => {
    localStorage.setItem("Total Price", price);
    OrderNavigation("/Order");
  };

  return (
    <div>
      {cardata.map((data, index) => (
        <div className={style.shopmain} key={index}>
          <div className={style.shopimage}>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className={style.shopSwiper}
            >
              {data.productimage.map((image, imageIndex) => (
                <SwiperSlide key={imageIndex} 
                  style={{display:'flex' , justifyContent:'center' , alignItems:'center' , width:'100%'}}  
                  >
                  <img
                    style={{width:'100%'}}
                    // style
                    src={`http://localhost:3333/uploads/${image}`}
                    alt={data.model}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={style.shoppay}>
            <div className={style.shopbtngroup}>
              <h2>Payment</h2>
            </div>
            <div className={style.shoppaymentmain}>
              <div className={style.shoppayment}>
                <h5>Vehicle Price</h5>
                <h5 className={style.shoppayprice}>{data.price}$</h5>
              </div>
              <div className={style.shoppayment}>
                <h5>Destination fee</h5>
                <h5 className={style.shoppayprice}>{Destination}$</h5>
              </div>
              <div className={style.shoppayment}>
                <h5>Order fee</h5>
                <h5 className={style.shoppayprice}>{Order}$</h5>
              </div>
            </div>
            <hr />
            <div className={style.shoppaylast}>
              <h4>Total Price</h4>
              <h4>{data.price + Destination + Order}$</h4>
            </div>
            <button
              className={style.shopend}
              onClick={() => MovetoOrder(data.price + Destination + Order)}
            >
              Order with Card
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
