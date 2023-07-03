import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../../../../../../style/Dashboard.module.css";
import { Sidebar } from "../../../Sidebar/Sidebar";
import axios from "axios";

export const Insert = () => {
  const navigation = useNavigate();
  const mainpageinsert = () => {
    navigation("/Insert");
  };
  const modelpageinsert = () => {
    navigation("/InsertAdmin");
  };
  const [carnames, setCarNames] = useState("");
  const [carmainimages, setCarMainImage] = useState("");
  const carname = (e) => {
    setCarNames(e.target.value);
  };
  const carmainimage = (e) => {
    setCarMainImage(e.target.files[0]);
  };

  const MainDataSubmission = (e) => {
    const Formdata = new FormData();
    Formdata.append("name", carnames);

    Formdata.append("mainimage", carmainimages);
    axios
      .post("http://localhost:3333/MainPage/Post", Formdata)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Not Working");
      });
  };

  return (
    <>
      <div className={style.dashboardmain}>
        <div className={style.dashboardleft}>
          <Sidebar />
        </div>
        <div className={style.dashboardRight}>
          <h1>INSERT</h1>
          <div className={style.dashboardbtn}>
            <button onClick={mainpageinsert}>MAIN PAGE</button>
            <button onClick={modelpageinsert}>MODELS PAGE</button>
          </div>
          <form enctype="multipart/form-data" className={style.dashboardform}>
            <div className={style.inserts}>
              <label>Name : </label>
              <input
                type="text"
                placeholder="Enter the Name"
                onChange={carname}
                required
              />
            </div>
            <div className={style.inserts}>
              <label>Main Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={carmainimage}
                required
              />
            </div>
            <input
              type="submit"
              value="Submit"
              onClick={MainDataSubmission}
              className={style.insertbtn}
            />
          </form>
        </div>
      </div>
    </>
  );
};
