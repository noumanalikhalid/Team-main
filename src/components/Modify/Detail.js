import React from "react";
import style from '../../style/Detail.module.css'
const Details = () => {
  const Data = [
    {
      Name: "718 Cayman",
      Price: " 1.32 Crore",
      Mileage: "14.5 kmpl",
      Maxpower: "2150 rpm",
    },
  ];
  return (
    <>
      {Data.map((datas) => (
        <div className={style.detailsmain}>
          <h2 className={style.heading}>{datas.Name}</h2>
          <div className={style.detailheading}>
            <table cellSpacing={"3"}>
              <thead>
                <tr>
                  <th>Price</th>
                  <th>Mileage</th>
                  <th>Max Power</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> {datas.Price}</td>
                  <td> {datas.Mileage}</td>
                  <td> {datas.Maxpower}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </>
  );
};
export default Details;
