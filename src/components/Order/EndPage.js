import React, { useState } from 'react'
import { CheckCircle, XCircle } from 'react-bootstrap-icons'
import style from '../../style/End.module.css'
import { useNavigate } from 'react-router-dom';
export const EndPage = ()=>{
    const flag = 0;
    const [pro , proper] = useState("block")
    const [secpro , secproper] = useState("none")
    const navigate = useNavigate()
    if(flag === 1){
        proper("block")
    }
    else if(flag === 2 ){
        secproper("block");
    }
    setTimeout(()=>{
        navigate("/")
    }, 2000)
    return(
        <>
            <div className={style.verifiend}>
                <div className={style.done} style={{display:pro}}>
                    <CheckCircle/>
                    <h4>PAYMENT DONE</h4>
                </div>
                <div className={style.notdone} style={{display:secpro}}>
                    <XCircle/>
                    <h4>PAYMENT PROBLEM</h4>
                </div>
            </div>
        </>
    )
}