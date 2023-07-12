import React from "react";
import style from "../../style/Wheel.module.css";
import { useState } from "react";

export const Wheel = () => {
  const [selectedColorIndex, setSelectedColorIndex] = useState(null);
  const [selectedButton, setSelectedButton] = useState(null);

  const wheels = (index, event) => {
    localStorage.setItem("CarWheel" , data[index].title);

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
          <button
          className={`${style.wheelclass} ${
            selectedColorIndex === index ? style.selected : ""
          }`}  
            onClick={(event)=>wheels(index, event)} key={index}>
            <img src={datas.imgsrc} alt={datas.title} />
          </button>
        ))}

        {/* {data.map((datas, index) => (
            <button
              className={`${style.paintclassess} ${
                selectedColorIndex === index ? style.selected : ""
              }`}
              id="selected"
              onClick={(event) => colors(index, event)}
              key={index}
            >
              <img src={datas.imgsrc} alt={datas.title} />
            </button>
          ))} */}

        </div>
      </div>
    </>
  );
};
