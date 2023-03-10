import React from 'react'
import style from '../../../../style/AdminHome.module.css'
import { Sidebar } from '../Sidebar/Sidebar'


export const AdminHome = ()=>{
    return(
        <>
            <div className={style.Admin}>
                <div className={style.Adminleft}>
                    <Sidebar/>
                </div>
                <div className={style.AdminRight}>
                </div>
            </div>
        </>
    )
}