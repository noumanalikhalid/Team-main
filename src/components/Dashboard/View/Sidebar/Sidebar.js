import React from "react";
import {
  Database,
  Pencil,
  Speedometer2,

} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import style from "../../../../style/Siderbar.module.css";

export const Sidebar = () => {
  return (
    <>
      <div className={style.siderbar}>
        <h1>ADMIN</h1>
        <div className={style.siderbarprofile}>
          <img src="https://picsum.photos/seed/picsum/200/300" alt="profile"/>
          <h3>Ali Hussain</h3>
        </div>
        <div className={style.sidebardiv}>
          <ul className={style.sidebaruls}>
            <Link to="/Dashboard">
              <li>
                <Speedometer2 className={style.icons} />
                DASHBOARD
              </li>
            </Link>
            <Link to="/Insert">
              <li>
                <Pencil className={style.icons} />
                INSERT
              </li>
            </Link>
            <Link to="/Data">
              <li>
                <Database className={style.icons} />
                Data
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};
