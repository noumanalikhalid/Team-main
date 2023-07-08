import React, { useEffect, useState } from 'react'
import ThreeSixty from 'react-360-view'
import axios from 'axios';

export const Threesixty = ()=>{
    const [CarThreeSixty , setCarThreeSixty] = useState([]);
    let carname = localStorage.getItem("CarName");
    let carmodel = localStorage.getItem("CarModel");
    let carcolor = localStorage.getItem("Color");
    let carWheel = localStorage.getItem("CarWheel");
    let carLight = localStorage.getItem("Light");
    if (carcolor === "Default"){
        carcolor = "Silver";
    }
    if(carWheel === "Default"){
        carWheel = "Steel";
    }
    if(carLight === "Default"){
      carLight = "Normal";
    }
    useEffect(()=>{
        axios.get(
            "http://localhost:3333/ModelPage/single",
            {
              params: {
                name: carname,
                model: carmodel,
                color: carcolor,
                wheel: carWheel,
                light: carLight
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