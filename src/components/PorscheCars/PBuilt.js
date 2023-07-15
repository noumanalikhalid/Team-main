import React, { useEffect, useState } from 'react'
import style from '../../style/Carbuilt.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios';


export const PBuilt = ()=>{
    const [data ,setData ] = useState([])

    const datafetch = (name , carcolor)=>{
        console.log(name)
        axios
        .get(`http://localhost:3333/ModelPage/Get/` , {params:{name , carcolor}})
        .then((res) => {
            setData(res.data);
            })
          .catch((err) => {
            console.log("Failed to get the data");
          });
    }
    const name = localStorage.getItem("CarName");
    const carColor = localStorage.getItem("CarColor")

    useEffect(()=>{
        datafetch(name , carColor);
    },[name , carColor])
    const cardatasubtwo=(carmodel)=>{
        localStorage.setItem("CarModel" , carmodel);
        localStorage.setItem("Color" , "Default")
        localStorage.setItem("CarWheel" , "Default")
        localStorage.setItem("Light" , "Default")
    }
    return<>
        {data.map((datas , index)=>(
            <Link to="/Modify" key={index} className={style.carbuild} onClick={cardatasubtwo(datas.model)}>
                <div className={style.carpicture}>
                <img src={`http://localhost:3333/uploads/${datas.carimage}`} alt={datas.model}/>
                    <div className={style.carname}>
                        <h4>{datas.model}</h4>
                    </div>
                </div>
            </Link>
            ))}
        
    </>
}

    



