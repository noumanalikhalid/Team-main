import React from "react";
import {ChevronLeft, ChevronRight,SaveFill} from "react-bootstrap-icons";


import style from "../../style/Built.module.css";
import { PBuilt} from "./PBuilt";
const Data=[
    {
        imgsrc:"https://files.porsche.com/filestore/image/multimedia/none/982-718-c7-modelimage-sideshot/thumbwhite/230138a1-e874-11ea-80cd-005056bbdc38;sL;twebp/porsche-thumbwhite.webp",
        sname:"718 Cayman",
    },
    {
        imgsrc:"https://files.porsche.com/filestore/image/multimedia/none/982-718-bo-modelimage-sideshot/thumbwhite/85f01af2-a8ce-11eb-80d5-005056bbdc38;sR;twebp/porsche-thumbwhite.webp",
        sname:"718 Boxster",  
    },
    {
        imgsrc:"https://files.porsche.com/filestore/image/multimedia/none/982-718-c7-se-modelimage-sideshot/thumbwhite/7bdc3629-4ea4-11ed-80f7-005056bbdc38;sL;twebp/porsche-thumbwhite.webp",
        sname:"718 Cayman Style Edition",        
    },
    {
        imgsrc:"https://files.porsche.com/filestore/image/multimedia/none/982-718-bo-se-modelimage-sideshot/thumbwhite/a43e6499-4ea4-11ed-80f7-005056bbdc38;sL;twebp/porsche-thumbwhite.webp",
        sname:"718 Boxster Style Edition",
    },
    {
        imgsrc:"https://files.porsche.com/filestore/image/multimedia/none/982-718-c7s-modelimage-sideshot/thumbwhite/c479e09b-d5ba-11ec-80ef-005056bbdc38;sL;twebp/porsche-thumbwhite.webp",
        sname:"718 Cayman S",
    },
    {
        imgsrc:"https://files.porsche.com/filestore/image/multimedia/none/982-718-bos-modelimage-sideshot/thumbwhite/a20dde91-bbf3-11ec-80ed-005056bbdc38;sL;twebp/porsche-thumbwhite.webp",
        sname:"718 Boxster S"
    },
    {
        imgsrc:"https://files.porsche.com/filestore/image/multimedia/none/982-718-c7-gts-4-modelimage-sideshot/thumbwhite/780ea921-a8d0-11eb-80d5-005056bbdc38;sR;twebp/porsche-thumbwhite.webp",
        sname:"718 Cayman GTS 4.0"
    },
    {
        imgsrc:"https://files.porsche.com/filestore/image/multimedia/none/982-718-bo-gts-4-modelimage-sideshot/thumbwhite/d5906520-2308-11ea-80c6-005056bbdc38;sL;twebp/porsche-thumbwhite.webp",
        sname:"718 Boxster GTS 4.0"
    }
]
const sports = [
    {
        imgsrc:"https://files.porsche.com/filestore/image/multimedia/none/982-718gt4-modelimage-sideshot/thumbwhite/3c0c6b3d-fa4e-11e9-80c6-005056bbdc38;sL;twebp/porsche-thumbwhite.webp",
        sname:"718 Cayman GT4 "
    },
    {
        imgsrc:"https://files.porsche.com/filestore/image/multimedia/none/982-718spyder-modelimage-sideshot/thumbwhite/e9f11134-fa4e-11e9-80c6-005056bbdc38;sL;twebp/porsche-thumbwhite.webp",
        sname:"718 Spyder "
    },
    {
        imgsrc:"https://files.porsche.com/filestore/image/multimedia/none/982-718-cayman-gt4rs-modelimage-sideshot/thumbwhite/da102245-46e5-11ec-80e2-005056bbdc38;sL;twebp/porsche-thumbwhite.webp",
        sname:"718 Cayman GT4 RS "
    }
]

//var slider = document.getElementById("myRange");
//var output = document.getElementById("demo");
//output.innerHTML = slider.value;
//slider.oninput = function() {
  //  output.innerHTML = this.value;
//}
export const Built= () => { 
    // console.log(slider.value)
    return<>
        <div className={style.container}>
            <div className={style.breadcrumb}>
                <p>Porsche Car Configurator</p>  
            </div>
            <button className={style.back}>
                <ChevronLeft/>
                Back
            </button>
            
            <div className={style.selectionpart}>
                <div className={style.leftselect}>
                    {/* Models */}
                    <h2>MODELS</h2>
                    <div className={style.childleftselect}>
                        <button>718</button>
                        <button>911</button>
                        <button>Taycan</button>
                        <button>Panamera</button>
                        <button>Macan</button>
                        <button>Cayenne</button>
                    </div>
                    {/* Body Design */}
                    <h2>BODY DESGIN</h2>
                    <div className={style.childleftselectbody}>
                        <button>COUPE</button>
                        <button>CABORIOLET</button>
                        <button>ROADSTER</button>
                        <button>SUV</button>
                        <button>SPORT SALON</button>
                        <button>EXECUTIVE</button>
                        <button>SUPORT TRUISOMO</button>
                        <button>CROSS TURISOMO</button>
                    </div>
                    {/* Transmission */}
                    <h2>TRANSMISSION</h2>
                    <div className={style.childleftselectbody}>
                        <button>MANUAL</button>
                        <button>TIPTRONIC</button>
                        <button>PDK</button>
                        <button>2-SPEED TRANSMISSION</button>
                    </div>
                    {/* SEATS */}
                    <h2>SEATS</h2>
                    <div className={style.childleftselectbody}>
                        <button>2</button>
                        <button>4 - 5</button>
                    </div>
                    {/* DRIVE */}
                    <h2>DRIVE</h2>
                    <div className={style.childleftselectbody}>
                        <button>REAR WHEEL DRIVE</button>
                        <button>ALL WHEEL DRIVE</button>
                    </div>
                    {/* FUELTYPE */}
                    <h2>FUELTYPE</h2>
                    <div className={style.childleftselectbody}>
                        <button>GASOLINE</button>
                        <button>DIESEL</button>
                        <button>HYBRID</button>
                        <button>ELECTRO</button>
                    </div>
                    {/* HORESPOWER */}
                    <h2>HORESPOWER</h2>
                    <div className={style.setuprange}>
                        <p id="demo"></p><p>HP</p>
                    </div>
                    <div className={style.leftrange}>
                        <input type="range" min="200" max="800" id="myRange"/> 
                    </div>
                    <div className={style.childleftselectbody}>
                        <button>RESET FILTER</button>
                    </div>
                </div>
                <div className={style.rightmain}>
                
                <h1 className={style.heading}> <ChevronRight/>718 Models</h1>
                    {Data.map((datas)=>(
                        <PBuilt
                        imgsrc={datas.imgsrc}
                        sname={datas.sname}
                        />
                        ))}
                  {sports.map((mapping)=>(
                    <div>
                        <h1 className={style.heading}> <ChevronRight/>{mapping.sname}</h1> 
                        <PBuilt
                        imgsrc={mapping.imgsrc}
                        sname={mapping.sname}
                        />
                  </div>
                  ))} 
                </div>
            </div>
           
        </div>
    </>
}