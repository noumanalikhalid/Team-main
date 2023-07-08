import React, { useState } from 'react'
import axios from 'axios'
import style from '../../../style/Admin.module.css'
import { useNavigate } from 'react-router-dom';
import { X } from 'react-bootstrap-icons';

export const AdminLogin = ()=>{
    const [userEmail , userEmails] = useState('');
    const [Password , userPasswords] = useState('');
    const [loginfailed , setLoginFailed] = useState('');
    const navigate = useNavigate();
    const Emailcheck = (e)=>{
        userEmails(e.target.value)
    }
    const PasswordCheck = (e)=>{
        userPasswords(e.target.value)    
    }
    const adminfailedclose = ()=>{
        var y = document.getElementById("adminfailed");
        y.style.display = "none"
    }
    const adminsuccessclose = ()=>{
        var x = document.getElementById("adminsuccess");
        x.style.display = "none"
    }
    const dataget = (e)=>{
        e.preventDefault();
            var x = document.getElementById("adminsuccess");
            var y = document.getElementById("adminfailed");
            axios.post(`http://localhost:3333/Admin/single`,{email:userEmail , password:Password})
            .then((res)=>{
                if(res.status === 200){
                    x.style.display = "flex"
                    y.style.display = "none"
                    console.log(res.data)
                    setTimeout(() => {
                        navigate("/Admins")
                    }, 500);
                }
                else{
                    x.style.display = "none"
                    y.style.display = "flex";
                    setLoginFailed("Account / Password is Incorrect")
                }
            })
            .catch((err)=>{
                if(err.message === "Request failed with status code 300"){
                    console.log(err.message)
                    x.style.display = "none"
                    y.style.display = "flex";
                    setLoginFailed("Account / Password is Incorrect")
                }
                else{
                    x.style.display = "none"
                    y.style.display = "flex";
                }
            })
    }
    return(
        <>
            <div className={style.admincontainer}>
                <h1>ADMIN</h1>
                <div id="adminsuccess" className={style.adminloginsuccess}>
                    <p>Login Sucessfull</p>
                    <X onClick={adminsuccessclose}/>
                </div>
                <div id="adminfailed" className={style.adminloginfailed}>
                    <p>Login Failed , {loginfailed}</p>
                    <X onClick={adminfailedclose}/>
                </div>
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