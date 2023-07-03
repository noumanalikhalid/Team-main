import React, { useEffect, useState } from "react";
import style from "../../../../../../style/Dashboard.module.css";
import { PencilSquare, Trash } from "react-bootstrap-icons";
import { Sidebar } from "../../../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Data = () => {
    const navigate = useNavigate();
    const [cardata , setCardata] = useState([]);
    const datamainpage =()=>{
        navigate("/Data")
      }
      const datamodelpage = ()=>{
        navigate("/ModelData")
    }

    useEffect(() => {
      axios
        .get("http://localhost:3333/MainPage/Get")
        .then((res) => {
          setCardata(res.data);
        })
        .catch((err) => {
          console.log("Error Reteriving Data");
        });
    });
    
    const deleteProduct = (name) => {
      axios
        .delete("http://localhost:3333/MainPage/deleteone", { data: { name } })
        .then((response) => {
          alert("Deleted Successfully");
        })
        .catch((error) => {
          console.log("Error deleting the product", error);
        });
    };
  return (
    <>
      <div className={style.dashboardmain}>
        <div className={style.dashboardleft}>
          <Sidebar />
        </div>
        <div className={style.dashboardRight}>
          <h1>Data</h1>
          <div className={style.dashboardbtn}>
            <button onClick={datamainpage}>MAIN PAGE</button>
            <button onClick={datamodelpage}>MODELS PAGE</button>
          </div>
          <table className={style.tableinsert}>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
            {cardata.map((post , index) => (
                <tr key={index}>
                <td>{index+1}</td>
                <td>{post.name}</td>
                <td>
                  <button className={style.btnEdit}>
                    <PencilSquare />
                  </button>
                </td>
                <td>
                  <button className={style.btnDelete} onClick={() => deleteProduct(post.name)}>
                    <Trash />
                  </button>
                </td>
              </tr>
             ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
