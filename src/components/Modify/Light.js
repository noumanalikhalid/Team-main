import React from "react";
import style from '../../style/Light.module.css'

export const Light = () => {
  const data = [
    {
      image:
        "https://configurator.porsche.com/model/2023/992110/common/detail_M8IS_m_0.jpg",
    },
    {
      image:
        "https://configurator.porsche.com/model/2023/992110/common/detail_M8IU_m_0.jpg",
    },
    {
      image:
        "https://configurator.porsche.com/model/2023/992110/common/detail_M8JU_m_0.jpg",
    },
  ];
  return (
    <>
      <div className={style.mainlight}>
        <div className={style.lightline}>
          {data.map((datas) => (
            <div className={style.lightclass}>
              <img src={datas.image} />
              {/* <p className={style.lightname}>{datas.title}</p> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
