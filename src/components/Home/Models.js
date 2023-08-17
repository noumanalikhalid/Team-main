import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "../../style/models.module.css";
import axios from "axios";

const Models = () => {
  const [data, setdata] = useState([]);

  const storethecarname = (carname)=>{
    localStorage.setItem("CarName" , carname);
    localStorage.setItem("CarColor" , "Silver")
  }

  useEffect(() => {
    axios
      .get("http://localhost:3333/MainPage/Get")
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log("Error Reteriving Data");
      });
  },[]);
  return (
    <>
      <section className={style.sec}>
        <h1>Models</h1>
        <div className={style.modelContainer}>
          {data.map((datas , index) => (
            <Link
              to="/Built"
              key={index}
              className={style.modelBox}
              onClick={()=>storethecarname(datas.name)}
              style={{ backgroundImage: `url(http://localhost:3333/uploads/${datas.mainimag})` }}
            >
            <img className={style.modelImage} src={`http://localhost:3333/uploads/${datas.mainimage}`} alt={datas.name}/>
              <h2>{datas.name}</h2>
              <button className={style.btnModel}>All Models</button>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};
export default Models;
