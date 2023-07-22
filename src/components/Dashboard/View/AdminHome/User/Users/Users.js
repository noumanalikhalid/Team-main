import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../../../../../../style/Dashboard.module.css";
import { Sidebar } from "../../../Sidebar/Sidebar";
import axios from "axios";
import { PencilSquare, Trash } from "react-bootstrap-icons";

export const Users = () => {
    const navigate = useNavigate();
    const userLogin = localStorage.getItem("Admin");
    const [userData , setUserData] = useState([])

    useEffect(() => {
      if (userLogin === "True" || userLogin === "true") {
        navigate("/Admin/Users");
      }
      else{
        navigate("/")
      }
    }, [navigate, userLogin]);

    const userNav = ()=>{
        navigate("/Admin/Users")
    }
    
    const userOrderNav = ()=>{
        navigate("/Admin/UserOrder")
    }

    useEffect(()=>{
      axios.get("http://localhost:3333/Admin/read")
      .then((res)=>{
        setUserData(res.data)
      })
      .catch((err)=>{
        console.log("Error : " , err)
      })
    },[])

    const deletemodel = (email) => {
      axios.delete("http://localhost:3333/Admin/delete", {
        data: { email }
      })
      .then((res) => {
        alert("User Deleted Successfully: " + email);
        window.location.reload()
      })
      .catch((err) => {
        console.log("Error", err);
      });
    };

  return (
    <>
      <div className={style.dashboardmain}>
        <div className={style.dashboardleft}>
          <Sidebar />
        </div>
        <div className={style.dashboardRight}>
          <h1>User Order</h1>
          <div className={style.dashboardbtn}>
            <button
                onClick={userNav}
            >
              Users
            </button>
            <button
                onClick={userOrderNav}
            >
              User Order
            </button>
          </div>
            <table className={style.tableinsert}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Admin</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((post, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{post.name}</td>
                    <td>{post.email}</td>
                    <td>{post.admin}</td>
                    <td>
                      <button className={style.btnEdit}>
                        <PencilSquare />
                      </button>
                    </td>
                    <td>
                      <button
                        className={style.btnDelete}
                        onClick={() =>
                          deletemodel(post.email)
                        }
                      >
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
