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
      .post(`http://localhost:3333/Admin/single`, { email: Lemail , password : userPassword})
      .then((res) => {
        if (res) {
          localStorage.setItem("UserEmail" , Lemail)
          localStorage.setItem("UserName" , res.data.name)
          localStorage.setItem("User_ID" , res.data._id)
          if(res.data.admin === "True"){
            localStorage.setItem("Admin" , res.data.admin)
          }
          else{
            localStorage.setItem("Admin" , "False")
          }
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
