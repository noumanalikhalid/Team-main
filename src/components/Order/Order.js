import React from "react";
import { useNavigate } from "react-router-dom";
import style from "../../style/Order.module.css";
import { OrderCarousel } from "./OrderCarousel";

export const Order = () => {
    const Navigate = useNavigate();
    const Movetoend = ()=>{
        Navigate("/Accepted")
    }
  return (
    <>
      <div className={style.Ordermain}>
        <div className={style.leftOrder}>
          <OrderCarousel />
        </div>
        <form className={style.rightOrder}>
          <div>
            <div className={style.namesection}>
              <div className={style.namefirst}>
                <p>First Name </p>
                <input type="text" placeholder="First Name" />
              </div>
              <div className={style.namesecond}>
                <p>Last Name</p>
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
            <div className={style.address}>
              <div className={style.emailaddress}>
                <p>Email : </p>
                <input type="email" placeholder="Email" />
              </div>
              <div className={style.emailaddress}>
                <p>Phone : </p>
                <input type="number" placeholder="Phone" />
              </div>
            </div>
            <div className={style.homeaddress}>
                <div className={style.homedd}>
                <p>Email : </p>
                <input type="email" placeholder="Email" />
                </div>
            </div>
            <div className={style.card}>
                <h2>CARD</h2>
                <div className={style.cardnum}>
                    <p>Card number</p>
                    <input type="text" placeholder="Card Number"/>
                </div>
                <div className={style.carddata}>
                    <div className={style.cvvnum}>
                    <p>CVV number</p>
                    <input type="text" placeholder="Card Number"/>
                    </div>
                    <div className={style.expiredata}>
                    <p>Expire Date</p>
                    <input type="Date" placeholder="Card Number"/>
                    </div>
                </div>
            </div>
            <button className={style.orderButton} onClick={Movetoend}>ORDER</button>
          </div>
        </form>
      </div>
    </>
  );
};
