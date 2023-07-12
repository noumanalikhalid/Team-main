import React from "react";
import style from '../../style/Light.module.css'
import { useState } from "react";

export const Light = () => {
  const [selectedColorIndex, setSelectedColorIndex] = useState(null);
  const [selectedButton, setSelectedButton] = useState(null);

  const lights = (index, event) => {
    localStorage.setItem("Light" , data[index].title);

    setSelectedColorIndex(index);

    const clickedButton = event.currentTarget;

    if (selectedButton) {
      selectedButton.style.background = "";
      selectedButton.style.borderRadius = "";
      selectedButton.style.padding = "";
    }

    clickedButton.style.background = "yellow";
    clickedButton.style.borderRadius = "50%";
    clickedButton.style.padding = "3%";

    setSelectedButton(clickedButton);
  };
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
            <button 
              className={`${style.lightclass} ${
                selectedColorIndex === index ? style.selected : ""
              }`}
              onClick={(event)=>lights(index,event)} key={index}>
              <img src={datas.image} alt={datas.title}/>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
