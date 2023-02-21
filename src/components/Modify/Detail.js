import React from "react";
import style from "../../style/Detail.model.css";


const Details=(props)=>
{
    return(
        <>
            <h1 className={style.heading}>718 Cayman</h1>
            <div className={style.head2}>
                <table cellSpacing={'3'}>
                <thead >
                <tr>
                    <th>Price</th>
                    <th>Mileage</th>
                    <th>Max Power</th>
                </tr>
                </thead>
                <tbody>

                    <tr>
                    <td> {props.Price}</td>
                    <td> {props.Mileage}</td>
                    <td> {props.Maxpower}</td>
                    </tr>
                </tbody>
                </table>
            </div>

           

        </>
    )



}
export  default Details