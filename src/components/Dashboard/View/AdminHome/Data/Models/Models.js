import React, { useEffect, useState } from "react";
import style from "../../../../../../style/Dashboard.module.css";
import { PencilSquare, Trash } from "react-bootstrap-icons";
import { Sidebar } from "../../../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const MODELS = ()=>{
    const navigate = useNavigate();
    const [cardata , setCardata] = useState([]);
    const deletemodel = (name ,  model , color)=>{
      axios.delete("http://localhost:3333/ModelPage/Delete" , {params : {name , model , color}})
      .then((res)=>{
        console.log(res.data)
        window.location.reload("")
      })
      .catch((err)=>{
        console.log("Error : " , err)
      })
    }
    const datamainpage =()=>{
        navigate("/Data")
      }
      const datamodelpage = ()=>{
        navigate("/ModelData")
    }

    const fetchData = async () => {
        const { data } = await axios.get("http://localhost:3333/ModelPage/GetAll");
        setCardata(data);
        console.log(data)
      };

      useEffect(() => {
        fetchData();
      }, []);
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
                <th>Price</th>
                <th>Milage</th>
                <th>Power</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
            {cardata.map((post , index) => (
                <tr key={index}>
                <td>{index+1}</td>
                <td>{post.name +" "+post.model + " " + post.color}</td>
                <td>{post.price}</td>
                <td>{post.milage}</td>
                <td>{post.maxpower}</td>
                <td>
                  <button className={style.btnEdit}>
                    <PencilSquare />
                  </button>
                </td>
                <td>
                  <button className={style.btnDelete} onClick={() => deletemodel(post.name , post.model , post.color)}>
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
}
