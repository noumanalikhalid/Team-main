import React from 'react'
import style from '../../style/Carbuilt.module.css'
import { Link } from 'react-router-dom'

export const PBuilt = (props)=>{
    return<>
        <Link to="/Modify" className={style.carbuild}>
            <div className={style.carpicture}>
            <img src={props.imgsrc} alt='my_picture'/>
                <div className={style.carname}>
                    <h4>{props.sname}</h4>
                </div>
            </div>
        </Link>
        
    </>
}

    



