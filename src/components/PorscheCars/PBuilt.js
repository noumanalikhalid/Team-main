import React, { useEffect, useState } from 'react'
import style from '../../style/Carbuilt.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios';


export const PBuilt = (props)=>{
    const [data ,setData ] = useState([])
    const [matches, setMatches] = useState(false);

    const datafetch = (name)=>{
        console.log(name)
        axios
        .get(`http://localhost:3333/ModelPage/Get/` , {params:{name}})
        .then((res) => {
            setData(res.data);
            setMatches(true)
            })
          .catch((err) => {
            console.log("Failed to get the data");
          });
    }
    const name = localStorage.getItem("CarName");
    useEffect(()=>{
        datafetch(name);
    },[matches])
    const cardatasubtwo=(carmodel)=>{
        localStorage.setItem("CarModel" , carmodel);
        localStorage.setItem("Color" , "Default")
    }
    return<>
        {data.map((datas , index)=>(
            <Link to="/Modify" key={index} className={style.carbuild} onClick={cardatasubtwo(datas.model)}>
                <div className={style.carpicture}>
                <img src={`http://localhost:3333/uploads/${datas.carimage}`} alt='my_picture'/>
                    <div className={style.carname}>
                        <h4>{datas.model}</h4>
                    </div>
                </div>
            </Link>
            ))}
        
    </>
}

    



