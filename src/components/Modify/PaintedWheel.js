import React from "react";
import style from "../../style/Paintedwheel.module.css";

export const PaintedWheel=()=>
{
     const Painteddata=[
        {
            imgsrc : "https://www.suncoastparts.com/mm5/graphics/00000002/porsche%20black%20painted%20center%20cap%20emblem.jpg",
            Name :"wheel paint black gloss"
        },
        {
            imgsrc : "https://files.porsche.com/filestore/image/multimedia/none/tequipment-winter-komplettrad-718-03/normal/58b04721-1ced-11eb-80cf-005056bbdc38;sL;twebp065/porsche-normal.webp",
            Name :"wheel paint  stain black"
        },
        {
            imgsrc : "https://static.alloywheelsdirect.net/images/wheels/15257-ml.jpg",
            Name :"wheel paint  stain platinum"
        }
    ]
    return(
    <>
    <div className={style.PaintedWheel}>
        {Painteddata.map((datais)=>(
            <div className={style.paintwheelclass}>
            <img src="https://static.alloywheelsdirect.net/images/wheels/15257-ml.jpg"/>
            <p>nomi</p>
                    {/* <img src={datais.imgsrc}/>
                    <p className={style.paintwheelname} >{datais.Name}</p> */}
                </div>
                ))}
        
    </div>

    </>
    )
}