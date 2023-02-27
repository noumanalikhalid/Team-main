import { ChevronLeft, ChevronRight, X, SaveFill } from "react-bootstrap-icons";
import style from "../../style/modify.module.css";

import Details from "./Detail";
import Datas from "./Datas";
import { ModelCarsouel } from "./ModelCarsouel";
import { useState } from "react";
import { Wheel } from "./Wheel";
import { Interrior } from "./Interrior";
import { Light } from "./Light";

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
          <button className={style.sav}>
            <SaveFill />
            Save
          </button>
        </div>
        {/* Left Side  */}
        <div className={style.modifymain}>
          <div className={style.modifyleft}>
            <h2>MODEL NAME</h2>
            <ModelCarsouel />
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
      {/* <div className={style.container_modify}>
        <div className={style.breadcrumb}>
          <p>Porsche</p>
        </div>
        <div className= {style.buttonsdiv}>
          <button className={style.back}>
            <ChevronLeft />
            Back
          </button>
          <button className={style.sav}>
            <SaveFill />
            Save
          </button>
        </div>
        <div className={style.selectionpart}>
          <div className={style.leftselect} style={{position:changes}}>
            <h2>MODELS</h2>
            <div className={style.mainleft}>
              <ModelCarsouel/>
            </div>
          </div>
          <div className={style.rightmain} style={{left:lefted}}>
            <h1 className={style.heading}>
              {" "}
              <ChevronRight />
              Details
            </h1>
            <hr></hr>
            {Data.map((datas) => (
              <Details
                Price={datas.Price}
                Mileage={datas.Mileage}
                Maxpower={datas.Maxpower}
              />
            ))}
            <hr></hr>
            <h1 className={style.paintheading}>Exterior Paint</h1>
            <Paint />
            <hr></hr>
            <h1 className={style.wheelshead}>Wheels</h1>
            <Wheel />
            <hr></hr>
            <h1 className={style.interriorhead}> Interior Colors</h1>
            <Interrior />
            <hr></hr>
            <h1 className={style.Lighthead}>Lights/Vision</h1>
            <Lights />
            <hr></hr>
          </div>
        </div>
      </div>
      <div className={style.modal} style={{ visibility: "hidden" }} id="dis">
        <div>
          <button className={style.cross} onClick={Closes}>
            <X />
          </button>
          <div>
            {Data.map((dataes) => (
              <Exdetail
                Name={dataes.Name}
                Price={dataes.Price}
                Mileage={dataes.Mileage}
                Maxpower={dataes.Maxpower}
              />
            ))}
          </div>
        </div>
      </div> */}
    </>
  );
};
