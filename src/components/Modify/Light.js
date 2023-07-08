import React from "react";
import style from '../../style/Light.module.css'

export const Light = () => {
  const wheels=(data)=>{
    localStorage.setItem("Light" , data);
    window.location.reload()
  }
  const data = [
    {
      title :"Normal",
      image:
        "https://configurator.porsche.com/model/2023/992110/common/detail_M8IS_m_0.jpg",
    },
    {
      title:"HD Matrix",
      image:
        "https://configurator.porsche.com/model/2023/992110/common/detail_M8IU_m_0.jpg",
    },
    {
      title:"Glare Free",
      image:
        "https://configurator.porsche.com/model/2023/992110/common/detail_M8JU_m_0.jpg",
    },
  ];
  return (
    <>
      <div className={style.mainlight}>
        <div className={style.lightline}>
          {data.map((datas , index) => (
            <button className={style.lightclass} onClick={()=>wheels(datas.title)} key={index}>
              <img src={datas.image} alt={datas.title}/>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
