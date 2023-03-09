import React, { useState } from 'react'
import axios from 'axios'
import style from '../../../style/Admin.module.css'
import { useNavigate } from 'react-router-dom';

export const AdminLogin = ()=>{
    const [userEmail , userEmails] = useState('');
    const [userPassword , userPasswords] = useState('');
    const Navigate = useNavigate();
    const Emailcheck = (e)=>{
        userEmails(e.target.value)
    }
    const PasswordCheck = (e)=>{
        userPasswords(e.target.value)    }
    const dataget = (e)=>{
        e.preventDefault();
            axios.post(`http://localhost:3333/Admin/single`,{email:userEmail})
            .then((res)=>{
                console.log(res.data)
                if(res.data.password === userPassword){
                    Navigate("/")
                    alert("Successfull")
                }
            })
            .catch((err)=>{
                alert("Err")
            })
    }
    return(
        <>
            <div className={style.admincontainer}>
                <h1>ADMIN</h1>
                <form className={style.adminform}>
                    <div className={style.admindata_1}>
                        <label>Email</label>
                        <input type="email" placeholder='Email'
                        onChange={Emailcheck} required/>
                    </div>
                    <div className={style.admindata_2}>
                        <label>Password</label>
                        <input type="password" placeholder='Password' 
                        onChange={PasswordCheck}required/>
                    </div>
                    <button className={style.adminbutton} 
                    onClick={dataget}
                    >Submit</button>
                </form>
            </div>
        </>
    )
}