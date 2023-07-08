import React from "react";
import style from "../../style/Wheel.module.css";

export const Wheel = () => {
  const wheels = (wheeldata)=>{
    localStorage.setItem("CarWheel" , wheeldata)
    window.location.reload()
  }
  const data = [
    {
      title : "Steel",
      imgsrc:
        "https://s3-us-west-1.amazonaws.com/cdn.wheelenhancement.com/img/product-440x412/9961802_ow.jpg",
    },
    {
      title : "Alloy",
      imgsrc:
        "https://s3-us-west-1.amazonaws.com/cdn.wheelenhancement.com/img/product-440x412/981_14base_obw.jpg",
    },
    {
      title : "Chrome",
      imgsrc:
        "https://s3-us-west-1.amazonaws.com/cdn.wheelenhancement.com/img/product-440x412/SportTechno_ow.jpg",
    },
  ];

  return (
    <>
      <div className={style.mainwheel}>
        <div className={style.wheelsline}>
        {data.map((datas , index) => (
          <button className={style.wheelclass} onClick={()=>wheels(datas.title)} key={index}>
            <img src={datas.imgsrc} alt={datas.title} />
          </button>
        ))}
        </div>
      </div>
    </>
  );
};
