import React from "react";
import style from "../../style/Wheel.module.css";

export const Wheel = () => {
  const data = [
    {
      imgsrc:
        "https://s3-us-west-1.amazonaws.com/cdn.wheelenhancement.com/img/product-440x412/9961802_ow.jpg",
    },
    {
      imgsrc:
        "https://s3-us-west-1.amazonaws.com/cdn.wheelenhancement.com/img/product-440x412/981_14base_obw.jpg",
    },
    {
      imgsrc:
        "https://s3-us-west-1.amazonaws.com/cdn.wheelenhancement.com/img/product-440x412/SportTechno_ow.jpg",
    },
  ];

  return (
    <>
      <div className={style.mainwheel}>
        <div className={style.wheelsline}>
        {data.map((datas , index) => (
          <div className={style.wheelclass} key={index}>
            <img src={datas.imgsrc} />
          </div>
        ))}
        </div>
      </div>
    </>
  );
};
