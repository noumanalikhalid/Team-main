import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["x", "Macan" , "Taycan" , "911" , "718" , "Cayenne" , "Panamera"],
  [0, 0 , 3 , 5 , 1 , 1 ,  1],
  [1, 10 , 8 , 15 , 9 , 10 , 5],
  [2, 23 , 5 , 29 , 15 , 12 , 7],
  [3, 17 ,29 , 17 , 25 , 17 ,17],
  [4, 18 , 7 , 25 , 28 , 25 , 19],
  [5, 9 , 30 , 30 , 5 , 29 , 20],
  [6, 11 , 15 , 19 , 9 , 18 , 29],
  [7, 27 , 22 , 7 , 30 , 1 , 5],
];

export const options = {
  hAxis: {
    title: "Time",
  },
  vAxis: {
    title: "Car Sales",
  },
  series: {
    1: { curveType: "function" },
  },
};

function Charted (){
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
export default Charted;