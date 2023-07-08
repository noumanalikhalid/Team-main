import React from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

import style from "../../style/Built.module.css";
import { PBuilt } from "./PBuilt";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export const Built = () => {
  let carName = localStorage.getItem("CarName");
  const navigation = useNavigate();

  const movetohome = () => {
    navigation("/");
  };

  const [carNames, setCarNames] = useState([]);

  const setCar = (carName) =>{
    localStorage.setItem("CarName" , carName);
    window.location.reload()
  }

  useEffect(() => {
    axios
      .get("http://localhost:3333/MainPage/Get")
      .then((res) => {
        setCarNames(res.data);
      })
      .catch((err) => {
        console.log("Error Getting the Data");
      });
  }, []);
  return (
    <>
      <div className={style.container}>
        <div className={style.breadcrumb}>
          <p>Porsche Car Configurator</p>
        </div>
        <button className={style.back} onClick={movetohome}>
          <ChevronLeft />
          Back
        </button>

        <div className={style.selectionpart}>
          <div className={style.leftselect}>
            {/* Models */}
            <h2>MODELS</h2>
            {carNames.map((cars , index) => (
              <div className={style.childleftselect} key={index}>
                <button onClick={()=>setCar(cars.name)}>{cars.name}</button>
                {/* <button>718</button>
                <button>911</button>
                <button>Taycan</button>
                <button>Panamera</button>
                <button>Macan</button>
                <button>Cayenne</button> */}
              </div>
            ))}
          </div>
          <div className={style.rightmain}>
            <h1 className={style.heading}>
              {" "}
              <ChevronRight />
              {carName} Models
            </h1>
            <PBuilt />
          </div>
        </div>
      </div>
    </>
  );
};
