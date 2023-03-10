import React from "react";
import {
  Pencil,
  PencilSquare,
  Speedometer2,
  Trash,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import style from "../../../../style/Siderbar.module.css";

export const Sidebar = () => {
  return (
    <>
      <div className={style.siderbar}>
        <h1>ADMIN</h1>
        <div className={style.siderbarprofile}>
          <img src="https://picsum.photos/seed/picsum/200/300" />
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
            <Link to="/Edit">
              <li>
                <PencilSquare className={style.icons} />
                EDIT
              </li>
            </Link>
            <Link to="/Delete">
              <li>
                <Trash className={style.icons} />
                DELETE
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};
