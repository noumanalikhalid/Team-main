import React from "react";
import ThreeSixty from 'react-360-view'
import style from '../../style/View.module.css'
export const View = ()=>{
    return<>
        <div className={style.mainview}>
            <h1>360 Exterior</h1>
                <div className={style.mainview360}>
                    <ThreeSixty
                        amount={36}
                        imagePath="img360/"
                        fileName="cayenne{index}.jpg"
                        spinReverse="true"
                    />
                </div>
        </div>
    </>
}