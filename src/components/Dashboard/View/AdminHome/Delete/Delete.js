import React from 'react'
import style from '../../../../../style/Dashboard.module.css'
import { Sidebar } from '../../Sidebar/Sidebar'
export const Delete = ()=>{
    return(
        <>
        <div className={style.dashboardmain}>
            <div className={style.dashboardleft}>
                <Sidebar/>
            </div>
            <div className={style.dashboardRight}>

            </div>
        </div>
        </>
    )
}