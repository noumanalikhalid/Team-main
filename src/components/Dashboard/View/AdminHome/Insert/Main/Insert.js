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
  const [carprices, setCarPrices] = useState("");
  const [carmilages, setCarMilages] = useState("");
  const [carpowers, setCarPowers] = useState("");
  const [carmainimages, setCarMainImage] = useState("");
  const [carcolorimages, setCarColorImages] = useState([]);
  const [carwheelimages, setCarWheelImages] = useState([]);
  const [carinteriorimages, setCarInteriorImages] = useState([]);
  const [carlightimages, setCarLightImages] = useState([]);
  const carname = (e) => {
    setCarNames(e.target.value);
  };
  const carprice = (e) => {
    setCarPrices(e.target.value);
  };
  const carmilage = (e) => {
    setCarMilages(e.target.value);
  };
  const carpower = (e) => {
    setCarPowers(e.target.value);
  };
  const carmainimage = (e) => {
    setCarMainImage(e.target.files[0]);
  };
  const carcolorimage = (e) => {
    setCarColorImages([...carcolorimages,...e.target.files]);
  };

  const carwheelimage = (e) => {
    setCarWheelImages([...carwheelimages,...e.target.files]);
  };

  const carinteriorimage = (e) => {
    setCarInteriorImages([...carinteriorimages,...e.target.files]);
  };

  const carlightimage = (e) => {
    setCarLightImages([...carlightimages,...e.target.files]);
  };

  const MainDataSubmission = (e) => {

    const Formdata = new FormData();
    Formdata.append("name", carnames);
    Formdata.append("price", carprices);
    Formdata.append("milage", carmilages);
    Formdata.append("power", carpowers);
    Formdata.append("mainimage", carmainimages);
    for (let i = 0; i < carcolorimages.length; i++) {
      Formdata.append("colorimage", carcolorimages[i]);
    }
    for (let i = 0; i < carwheelimages.length; i++) {
      Formdata.append(`wheelimage`, carwheelimages[i]);
    }
    for (let i = 0; i < carinteriorimages.length; i++) {
      Formdata.append(`interiorimage`, carinteriorimages[i]);
    }
    for (let i = 0; i < carlightimages.length; i++) {
      Formdata.append(`lightimage`, carlightimages[i]);
    }

    axios
      .post("http://localhost:3333/AdminMainData/upload", Formdata)
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
          <form
            enctype="multipart/form-data"
            className={style.dashboardform}
          >
            <div className={style.inserts}>
              <div className={style.labels}>
                <label>Name </label>
                <input
                  type="text"
                  placeholder="Enter the Name"
                  onChange={carname}
                  required
                />
              </div>
              <div className={style.labels}>
                <label>Price</label>
                <input
                  type="number"
                  placeholder="Enter the Price"
                  onChange={carprice}
                  required
                />
              </div>
            </div>
            <div className={style.inserts}>
              <div className={style.labels}>
                <label>Milage</label>
                <input
                  type="number"
                  placeholder="Enter the Milage"
                  onChange={carmilage}
                  required
                />
              </div>
              <div className={style.labels}>
                <label>Max Power</label>
                <input
                  type="number"
                  placeholder="Enter the Power"
                  onChange={carpower}
                  required
                />
              </div>
            </div>
            <div className={style.inserts}>
              <div className={style.labels}>
                <label>Main Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={carmainimage}
                  required
                />
              </div>
              <div className={style.labels}>
                <label>Color Images</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={carcolorimage}
                  multiple
                  required
                />
              </div>
            </div>
            <div className={style.inserts}>
              <div className={style.labels}>
                <label>Wheel Images</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={carwheelimage}
                  multiple
                  required
                />
              </div>
              <div className={style.labels}>
                <label>Interior Images</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={carinteriorimage}
                  multiple
                  required
                />
              </div>
            </div>
            <div className={style.inserts}>
              <div className={style.labels}>
                <label>Light Images</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={carlightimage}
                  multiple
                  required
                />
              </div>
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
