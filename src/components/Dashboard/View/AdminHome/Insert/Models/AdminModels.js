import React from "react";
import { useNavigate } from "react-router-dom";
import style from "../../../../../../style/Dashboard.module.css";
import { Sidebar } from "../../../Sidebar/Sidebar";

export const AdminModels = () => {
  const navigation = useNavigate();
  const mainpageinsert = () => {
    navigation("/Insert");
  };
  const modelpageinsert = () => {
    navigation("/InsertAdmin");
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
              <div className={style.labels}>
                <label>Car Name </label>
                <input type="text" placeholder="Enter the Name" required />
              </div>
              <div className={style.labels}>
                <label>Model</label>
                <input type="text" placeholder="Enter the Model" required />
              </div>
            </div>
            <div className={style.inserts}>
              <div className={style.labels}>
                <label>Color</label>
                <input type="text" placeholder="Enter the Color" required />
              </div>
              <div className={style.labels}>
                <label>Price</label>
                <input type="number" placeholder="Enter the Price" required />
              </div>
            </div>
            <div className={style.inserts}>
              <div className={style.labels}>
                <label>Milage</label>
                <input type="number" placeholder="Enter the Milage" required />
              </div>
              <div className={style.labels}>
                <label>Max Power</label>
                <input type="number" placeholder="Enter the Power" required />
              </div>
            </div>
            <div className={style.inserts}>
              <div className={style.labels}>
                <label>Color Images</label>
                <input type="file" required />
              </div>
              <div className={style.labels}>
                <label>Wheel Images</label>
                <input type="file" accept="image/*" multiple required />
              </div>
            </div>
            <div className={style.inserts}>
              <div className={style.labels}>
                <label>Interior Images</label>
                <input type="file" multiple required />
              </div>
              <div className={style.labels}>
                <label>Light Images</label>
                <input type="file" multiple required />
              </div>
            </div>
            <input type="submit" value="Submit" className={style.insertbtn} />
          </form>
          <h1>Insertation Data</h1>
          <table className={style.tableinsert} cellSpacing="0">
            <thead>
              <tr>
                <th>#</th>
                <th>2</th>
                <th>3</th>
                <th>3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
