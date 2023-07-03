import { ChevronLeft, ChevronRight, Save } from "react-bootstrap-icons";
import style from "../../style/modify.module.css";

import Details from "./Detail";
import Datas from "./Datas";
import { ModelCarsouel } from "./ModelCarsouel";
// import { useState } from "react";
import { Wheel } from "./Wheel";
import { Light } from "./Light";
import { useNavigate } from "react-router-dom";
import { Threesixty } from "./Threesixty";

export const Modify = () => {
  const Navigation = useNavigate();
  const MovetoShop = () => {
    Navigation("/Shop");
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
        <div className={style.modifymain}>
          <div>
            <div className={style.carsdetails}>
              <ModelCarsouel />
              <div>
                <h2>Details</h2>
              </div>
              <div className={style.detailsmain}>
                <div className={style.innerdetails}>
                  <h3>Exterior Paint</h3>
                  <Datas />
                </div>
                <div className={style.innerdetails}>
                  <h3>Wheels</h3>
                  <Wheel />
                </div>
                <div className={style.innerdetails}>
                  <h3>Lights</h3>
                  <Light />
                </div>
              </div>
            </div>
          </div>
          <div style={{marginTop:'5%'}}>
            <Threesixty />
          </div>
        </div>
      </div>
    </>
  );
};
