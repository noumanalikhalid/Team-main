import React from "react";
import style from "../../style/Accountpage.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export const AULogin = () => {
  const navigate = useNavigate();
  const [Lemail, setLEmail] = useState("")
  const [userPassword , setPassword] = useState("")

  const changeemail = (e) => {
    setLEmail(e.target.value);
  };

  const passwords = (e)=>{
    setPassword(e.target.value)
  }

  const logintotheadminpannel = () => {
    axios
      .post(`http://localhost:3333/Admin/single`, { email: Lemail })
      .then((res) => {
        if (res.data.password === userPassword) {
          localStorage.setItem("User" , Lemail)
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const movetosignup = () => {
    navigate("/Signup");
  };
  return (
    <>
      <div className={style.loginbox}>
        <h1 className={style.accounttitle}>Login</h1>
        <form className={style.accountform} action="" method="GET">
          <label>Email</label>
          <input type="email" placeholder="" onChange={changeemail} />
          <label>Password</label>
          <input type="password" placeholder="" onChange={passwords}/>
          <input
            className={style.btn3}
            onClick={logintotheadminpannel}
            type="button"
            value="Submit"
          />
        </form>
      </div>
      <p className={style.para_2}>
        Not have an account?{" "}
        <button className={style.signupbtn} onClick={movetosignup}>
          Sign Up Here
        </button>
      </p>
    </>
  );
};
