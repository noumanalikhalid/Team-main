import React from "react";
import { useNavigate } from "react-router-dom";

import style from "../../style/Accountpage.module.css";

export const Login = () => {
  const navigate = useNavigate();
  const movetosignup = ()=>{
    navigate("/Signup")
  }
  return (
    <>
      <div className={style.loginbox}>
        <h1 className={style.accounttitle}>Login</h1>
        <form className={style.accountform}>
          <label>Email</label>
          <input type="email" placeholder="" />
          <label>Password</label>
          <input type="password" placeholder="" />
          <input className={style.btn3} type="button" value="Submit" />
          <closeform></closeform>
        </form>
      </div>
      <p className={style.para_2}>Not have an account? <button className={style.signupbtn} onClick={movetosignup}>Sign Up Here</button></p>
    </>
  );
};
