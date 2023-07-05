import React from "react";
import { useNavigate } from "react-router-dom";
import style from "../../style/Accountpage.module.css";
import { useState } from "react";
import axios from "axios";
export const Signup = () => {
  const navigate = useNavigate();
  const [fname , setFName] = useState('');
  const [lname , setLName] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const firstname = (e)=>{
    setFName(e.target.value);
  }
  const lastname = (e)=>{
    setLName(e.target.value);
  }
  const emails = (e)=>{
    setEmail(e.target.value);
  }
  const passwords = (e)=>{
    setPassword(e.target.value);
  }
  const signupdata = ()=>{
    const data = {
      name : fname + lname,
      email,
      password
    }
    axios.post("http://localhost:3333/Admin/register" , data)
    .then((res)=>{
      console.log("Working" , res.data)
      navigate("/Login")
    })
    .catch((err)=>{
      console.log("Error")
    })
  }
  const movetologin = ()=>{
    alert("Working")
    navigate("/Login")
  }
  return (
    <>
      <div className={style.Accpage}>
        <div className={style.signupbox}>
          <h1 className={style.accounttitle}>Sign Up</h1>
          <h4>It's free and only takes a minute</h4>
          <form className={style.accountform}>
            <label>First Name</label>
            <input type="text" placeholder="" onChange={firstname} required />
            <label>Last Name</label>
            <input type="text" placeholder="" onChange={lastname} required />
            <label>Email</label>
            <input type="email" placeholder="" onChange={emails} required />
            <label>Password</label>
            <input type="password" placeholder="" onChange={passwords} required />
            <input className={style.btn} onClick={signupdata} type="button" value="Submit" />

            <closeform></closeform>
          </form>
          <p>
            By clicking the Sign Up button,you agree to our <br />
            <p >Terms and Condition</p> and
            <p >Policy Privacy</p>
          </p>
          <p className={style.para - 2}>
            Already have an account?
            <button className={style.loginbtn} onClick={movetologin}>Login here</button>
          </p>
        </div>
      </div>
    </>
  );
};
