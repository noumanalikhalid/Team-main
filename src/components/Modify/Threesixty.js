import React, { useEffect, useState } from 'react'
import ThreeSixty from 'react-360-view'
import style from '../../style/Threesixty.module.css'
import axios from 'axios';

export const Threesixty = ()=>{
    const [CarThreeSixty , setCarThreeSixty] = useState([]);
    let carname = localStorage.getItem("CarName");
    let carmodel = localStorage.getItem("CarModel");
    let carcolor = localStorage.getItem("Color");
    if (carcolor === "Default"){
        carcolor = "Silver";
    }
    useEffect(()=>{
        axios.get(
            "http://localhost:3333/ModelPage/single",
            {
              params: {
                name: carname,
                model: carmodel,
                color: carcolor,
              },
            }
        )
        .then((res)=>{
            setCarThreeSixty(res.data)
        })
        .catch((err)=>{
            console.log("Not Working : ", err)
        })
    },[])
    return(
        <>
        {CarThreeSixty.map((datas , index)=>(
            <ThreeSixty
                key={index}
                amount={datas.threesixty.length}
                imagePath="http://localhost:3333/uploads/"
                fileName={`${carname}{index}.jpg`}
                spinReverse="true"
            />
        ))}
        </>
    )
}