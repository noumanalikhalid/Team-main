import { ChevronLeft, ChevronRight, X, Save } from "react-bootstrap-icons";
import style from "../../style/modify.module.css";

import Details from "./Detail";
import Datas from "./Datas";
import { ModelCarsouel } from "./ModelCarsouel";
import { useState } from "react";
import { Wheel } from "./Wheel";
import { Interrior } from "./Interrior";
import { Light } from "./Light";
import { useNavigate } from "react-router-dom";
import { Threesixty } from "./Threesixty";

export const Modify = () => {
  const [lefted, lefteds] = useState("0%");
  const [mar, margs] = useState("0%");
  const [changes, changepropertys] = useState("static");
  const changeproperty = () => {
    if (window.scrollY >= 300 && window.scrollY <= 1100) {
      changepropertys("fixed");
      margs("25%");
      lefteds("75%");
    } else if (window.scrollY > 1100) {
      changepropertys("static");
      margs("0%");
      lefteds("0%");
    }
  };
  window.addEventListener("scroll", changeproperty);
  const Navigation = useNavigate();
  const MovetoShop = ()=>{
    Navigation("/Shop")
  }
  const Closes = () => {
    var x = document.getElementById("dis");
    x.style.visibility = "hidden";
    console.log("Working");
  };
  const worked = () => {
    var x = document.getElementById("dis");
    x.style.visibility = "visible";
    console.log("Working");
  };
  return (
    <>
      <div className={style.container_modify}>
        {/* BreadCrumb */}
        <div className={style.breadcrumb}>
          <p>Porsche</p>
        </div>
        <div className={style.buttonsdiv}>
          <button className={style.back}>
            <ChevronLeft />
            Back
          </button>
          <button className={style.sav} onClick={MovetoShop}>
            <Save />
            Save
          </button>
        </div>
        {/* Left Side  */}
        <div className={style.modifymain}>
          <div className={style.modifyleft} >
            <ModelCarsouel />
            <Threesixty/>
          </div>
          {/* Right Side */}
          <div className={style.modifyright}>
            <h2>
              <ChevronRight />
              Details
            </h2>
            <Details />
            <div>
              <h3>Exterior Paint</h3>
              <Datas />
            </div>
            <hr />
            <div>
              <h3>Wheels</h3>
              <Wheel />
            </div>
            <hr />
            <div>
              <h3>Interior</h3>
              <Interrior />
            </div>
            <hr />
            <div>
              <h3>Lights</h3>
              <Light />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
