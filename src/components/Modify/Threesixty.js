import React from 'react'
import ThreeSixty from 'react-360-view'
import style from '../../style/Threesixty.module.css'

export const Threesixty = ()=>{
    return(
        <>
            <div className={style.mainview360}>
                <ThreeSixty
                    amount={36}
                    imagePath="img360/"
                    fileName="cayenne{index}.jpg"
                    spinReverse="true"
                />
            </div>
        </>
    )
}