import React from "react";
import { useNavigate } from "react-router-dom";
import style from "../../style/Accountpage.module.css";
export const Signup = () => {
  const navigate = useNavigate();
  const movetologin = ()=>{
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
            <input type="text" placeholder="" required />
            <label>Last Name</label>
            <input type="text" placeholder="" required />
            <label>Email</label>
            <input type="email" placeholder="" required />
            <label>Password</label>
            <input type="password" placeholder="" required />
            <label>Confirm Password</label>
            <input type="password" placeholder="" required />
            <input className={style.btn} type="button" value="Submit" />

            <closeform></closeform>
          </form>
          <p>
            By clicking the Sign Up button,you agree to our <br />
            <a href="#">Terms and Condition</a> and{" "}
            <a href="#">Policy Privacy</a>
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
