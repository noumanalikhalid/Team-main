import React from "react";
import style from "../../style/Wheel.module.css";

export const Wheel =(props)=>
{
    const data = [
        {
            imgsrc : "https://s3-us-west-1.amazonaws.com/cdn.wheelenhancement.com/img/product-440x412/9961802_ow.jpg",
            Name :"CARRERA 02 5-SPOKE",
            price:"1000/Rs"
        },
        {
            imgsrc : "https://s3-us-west-1.amazonaws.com/cdn.wheelenhancement.com/img/product-440x412/981_14base_obw.jpg",
            Name :"PORSCHE CAYMAN III",
            price:"2000/Rs"
        },
        {
            imgsrc : "https://s3-us-west-1.amazonaws.com/cdn.wheelenhancement.com/img/product-440x412/SportTechno_ow.jpg",
            Name :"CARRERA SPORT WHEEL",
            price:"3000/Rs"
        }
    ]

    return(
        <>
            <div className={style.mainwheel}>
            {data.map((datas)=>(
                <div className={style.wheelclass}>
                    <img src={datas.imgsrc}/>
                    <p className={style.wheelname} >{datas.Name}</p>
                    <h4 className={style.price}>{datas.price}</h4>
                </div>
                ))}
                <button>Add</button>
        </div>
        </>
    )

}