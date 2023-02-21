import React from "react";
import style from "../../style/Exdetail.module.css";

 const Exdetail=(props)=>
 {
    return(
        <>
        
            <h1 className={style.heading}>{props.Name}</h1>
            <p className={style.para}><span>{props.Name}</span> is the petrol variant in the <span>{props.name}</span> lineup and is
             priced at <span>{props.Price}</span>.It returns a certified mileage of <span>{props.Mileage}</span>. This Cayman variant 
             comes with an engine putting<span>  {props.Maxpower}</span> of max power and max torque respectively.</p>
         
        </>
    )
 }
 export default Exdetail;