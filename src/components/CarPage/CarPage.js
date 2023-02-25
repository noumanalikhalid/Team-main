import React from "react";
import { View } from "./View";
import style from '../../style/CarPage.module.css'
import { CarCarsouel } from "./CarCarsouel";
export const CarPage = ()=>{
    return<>
        <div className={style.CarPage}>
            <CarCarsouel/>
            <View/>
        </div>
    </>
}