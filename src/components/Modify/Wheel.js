import React from "react";
import style from "../../style/Wheel.module.css";

export const Wheel = () => {
  const data = [
    {
      imgsrc:
        "https://s3-us-west-1.amazonaws.com/cdn.wheelenhancement.com/img/product-440x412/9961802_ow.jpg",
      Name: "Normal Wheel",
    },
    {
      imgsrc:
        "https://s3-us-west-1.amazonaws.com/cdn.wheelenhancement.com/img/product-440x412/981_14base_obw.jpg",
      Name: "Eco-Sytem Wheel",
    },
    {
      imgsrc:
        "https://s3-us-west-1.amazonaws.com/cdn.wheelenhancement.com/img/product-440x412/SportTechno_ow.jpg",
      Name: "Sport Wheel",
    },
  ];

  return (
    <>
      <div className={style.mainwheel}>
        <div className={style.wheelsline}>
        {data.map((datas) => (
          <div className={style.wheelclass}>
            <img src={datas.imgsrc} />
            <p className={style.wheelname}>{datas.Name}</p>
          </div>
        ))}
        </div>
      </div>
    </>
  );
};
