import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";
import style from "../../style/Order.module.css";
import { OrderCarousel } from "./OrderCarousel";
import axios from "axios";

export const Order = () => {
  const navigate = useNavigate();
  const userID = localStorage.getItem("User_ID");
  const userName = localStorage.getItem("UserName");
  const carname = localStorage.getItem("CarName");
  const carmodel = localStorage.getItem("CarModel");
  const amount = localStorage.getItem("Total Price");
  const carcolor = localStorage.getItem("Color");
  const carwheel = localStorage.getItem("CarWheel");
  const carlight = localStorage.getItem("Light");
  const userEmail = localStorage.getItem("UserEmail")

  const userData = {
    userid: userID,
    name: userName,
    email : userEmail,
    carname: carname,
    carmodel: carmodel,
    carprice: amount,
    carcolor: carcolor,
    carwheel: carwheel,
    carlight: carlight,
  };

  const currency = "USD";
  const initialOptions = {
    clientId: "YOUR_PAYPAL_CLIENT_ID", // Replace with your PayPal client ID
    currency: "USD",
    intent: "capture",
  };
  const handleCreateOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: {
              currency_code: currency,
              value: amount,
            },
          },
        ],
      })
      .then((orderId) => {
        axios
          .post("http://localhost:3333/UserOrder/AddtoCart", userData)
          .then((res) => {
            console.log(res.data);
            navigate("/Accepted")
          })
          .catch((err) => {
            console.log("Error in Payment", err);
          });
        return orderId;
      });
  };

  return (
    <>
      <div className={style.Ordermain}>
        <div className={style.leftOrder}>
          <OrderCarousel />
        </div>
        <form className={style.rightOrder}>
          <div style={{ marginTop: "5%" }}>
            <PayPalScriptProvider options={initialOptions}>
              <PayPalButtons
                createOrder={handleCreateOrder}
                forceReRender={[amount, currency, style]}
              />
            </PayPalScriptProvider>
          </div>
        </form>
      </div>
    </>
  );
};

export default Order;
