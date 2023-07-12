import React, { useEffect } from 'react'
import style from '../../../../style/AdminHome.module.css'
import { Sidebar } from '../Sidebar/Sidebar'
import { useNavigate } from 'react-router-dom';


export const AdminHome = ()=>{
    const navigate = useNavigate();
    const userLogin = localStorage.getItem("Admin");

    useEffect(() => {
        if (userLogin === "True" || userLogin === "True") {
            navigate("/Dashboard");
        }
    }, [navigate, userLogin]);

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