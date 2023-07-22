import React, { useEffect, useState } from 'react'
import style from '../../../../style/AdminHome.module.css'
import { Sidebar } from '../Sidebar/Sidebar'
import { useNavigate } from 'react-router-dom';
import { Box, Person, PersonCheck } from 'react-bootstrap-icons';
import axios from 'axios';


export const AdminHome = ()=>{
    const navigate = useNavigate();
    const userLogin = localStorage.getItem("Admin");

    const [hasLoaded, setHasLoaded] = useState(false);
    const [Order , setOrder] = useState([])
    const [User , setUser] = useState([])
    const [Admin , setAdmin] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3333/UserOrder/read")
        .then((res)=>{
            setOrder(res.data.length)
        })
        .catch((err)=>{
            console.log("Error : ",err)
        })
    },[])

    useEffect(()=>{
        axios.get("http://localhost:3333/Admin/read")
        .then((res)=>{
            setUser(res.data.length)
        })
        .catch((err)=>{
            console.log("Error : ",err)
        })
    },[])

    useEffect(()=>{
        axios.get("http://localhost:3333/Admin/readAdmin" , {data:{admin : "True"}})
        .then((res)=>{
            setAdmin(res.data.length+1)
            setHasLoaded(true);
        })
        .catch((err)=>{
            console.log("Error : ",err)
        })
    },[hasLoaded])

    useEffect(() => {
        if (userLogin === "true" || userLogin === "True") {
            navigate("/Dashboard");
        }
        else{
            navigate("/")
        }
    }, [navigate, userLogin]);

    return(
        <>
            <div className={style.Admin}>
                <div className={style.Adminleft}>
                    <Sidebar/>
                </div>
                <div className={style.AdminRight}>
                    <div className={style.AdminRightBox}>
                        <div className={style.AdminRightBoxOrder}>
                            <div>
                                Orders {Order}
                            </div>
                            <Box/>
                        </div>
                        <div className={style.AdminRightBoxUser}>
                            <div>
                                Users {User}
                            </div>
                            <Person/>
                        </div>
                        <div className={style.AdminRightBoxAdmin}>
                            <div>
                                Admin {Admin}
                            </div>
                            <PersonCheck/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}