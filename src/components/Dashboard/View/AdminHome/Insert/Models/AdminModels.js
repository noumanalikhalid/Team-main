import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../../../../../../style/Dashboard.module.css";
import { Sidebar } from "../../../Sidebar/Sidebar";
import axios from "axios";

export const AdminModels = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  const userLogin = localStorage.getItem("Admin");

  useEffect(() => {
      if (userLogin === "True" || userLogin === "true") {
          navigate("/Admin/InsertAdmin");
      }
      else{
        navigate("/")
      }
  }, [navigate, userLogin]);
  const mainpageinsert = () => {
    navigate("/Admin/Insert");
  };
  const modelpageinsert = () => {
    navigate("/Admin/InsertAdmin");
  };

  const [carname , setCarName] = useState();
  const [carcolor , setCarColor] = useState();
  const [carwheel , setCarWheel] = useState();
  const [carlight , setCarLight] = useState();
  const [carmodel , setCarModel] = useState();
  const [carprice , setCarPrice] = useState();
  const [carmilage , setCarMilage] = useState();
  const [carmaxpower , setCarMaxPower] = useState();
  const [carimage , setCarImage] = useState();
  const [productimage , setCarProductImage] = useState([]);
  const [threesixty , setCarThreeSixty] = useState([]);

  const optionCar = (e)=>{
    setCarName(e.target.value);
  }
  const optionColor = (e)=>{
    setCarColor(e.target.value);
  }
  const optionWheel = (e)=>{
    setCarWheel(e.target.value);
  }
  const optionLight = (e)=>{
    setCarLight(e.target.value);
  }
  const optionModel = (e)=>{
    setCarModel(e.target.value);
  }
  const optionPrice = (e)=>{
    setCarPrice(e.target.value);
  }
  const optionMilage = (e)=>{
    setCarMilage(e.target.value);
  }
  const optionMaxPower = (e)=>{
    setCarMaxPower(e.target.value);
  }
  const optionImage = (e)=>{
    setCarImage(e.target.files[0]);
  }
  const optionThreeSixty = (e)=>{
    setCarThreeSixty(e.target.files);
  }
  const optionProduct = (e)=>{
    setCarProductImage(e.target.files);
  }

  const datasubmission = (e)=>{  
    const Formdata = new FormData();
    Formdata.append("name" , carname);
    Formdata.append("color" , carcolor);
    Formdata.append("wheel" , carwheel);
    Formdata.append("light" , carlight);
    Formdata.append("model" , carmodel);
    Formdata.append("price" , carprice);
    Formdata.append("milage" , carmilage);
    Formdata.append("maxpower" , carmaxpower);
    Formdata.append("carimage" , carimage);

    for (let i = 0; i < productimage.length; i++) {
      Formdata.append("productimage", productimage[i]);
    }
  
    for (let i = 0; i < threesixty.length; i++) {
      Formdata.append("threesixty", threesixty[i]);
    }

    axios.post("http://localhost:3333/ModelPage/Post" , Formdata)
    .then((res)=>{
      console.log("Data Inserted Successfully on Page Model" , res.data)
    })
    .catch((err)=>{
      console.log("Error in Data Insertation")
    })
  }

  useEffect(() => {
    axios
      .get("http://localhost:3333/MainPage/Get")
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log("Error Reteriving Data");
      });
  });
  // const [selectedoptioncolor , setOptionColor] = useState('');
  // const [selectedCar , setOptionCar] = useState('');
  // const optionColor = (e)=>{
  //   console.log(e.target.value)
  //   setOptionColor(e.target.value)
  // }
  // const optionCar = (e)=>{
  //   console.log(e.target.value)
  //   setOptionCar(e.target.value)
  // }
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
            className={style.dashboardformmodel}
          >
            <div className={style.insertmodel}>
              <div className={style.labels}>
                <label>Car Name </label>
                <select value={carname} onChange={optionCar}>
                  <option value="" selected disabled>
                    Default
                  </option>
                  {data.map((datas) => (
                    <option value={datas.name}>{datas.name}</option>
                  ))}
                </select>
              </div>
              <div className={style.labels}>
                <label>Color</label>
                <select value={carcolor} onChange={optionColor}>
                  <option value="Silver" selected disabled>
                    Default
                  </option>
                  <option value="Silver">Silver</option>
                  <option value="Red">Red</option>
                  <option value="Black">Black</option>
                </select>
              </div>
            </div>
            <div className={style.insertmodel}>
              <div className={style.labels}>
                <label>Wheel</label>
                <select onChange={optionWheel}>
                  <option value="Steel" selected disabled>
                    Default
                  </option>
                  <option value="Steel">Steel</option>
                  <option value="Alloy">Alloy</option>
                  <option value="Chrome">Chrome</option>
                </select>
              </div>
              <div className={style.labels}>
                <label>Light</label>
                <select onChange={optionLight}>
                  <option value="Normal" selected disabled>
                    Default
                  </option>
                  <option value="Normal">Normal</option>
                  <option value="HD Matrix">HD Matrix</option>
                  <option value="Glare Free">Glare Free</option>
                </select>
              </div>
            </div>
            <div className={style.insertmodels}>
              <div className={style.labelsmodel}>
                <label>Model</label>
                <input type="text" onChange={optionModel} placeholder="Enter the Model" required />
              </div>
              <div className={style.labelsmodel}>
                <label>Price</label>
                <input type="number" onChange={optionPrice} placeholder="Enter the Price" required />
              </div>
            </div>
            <div className={style.insertmodels}>
              <div className={style.labelsmodel}>
                <label>Milage</label>
                <input type="number" onChange={optionMilage} placeholder="Enter the Milage" required />
              </div>
              <div className={style.labelsmodel}>
                <label>Max Power</label>
                <input type="number" onChange={optionMaxPower} placeholder="Enter the Power" required />
              </div>
            </div>
            <div className={style.inserts}>
              <div className={style.labels}>
                <label>Car Main Images</label>
                <input type="file" required onChange={optionImage}/>
              </div>
              <div className={style.labels}>
                <label>Car Images</label>
                <input type="file" required multiple onChange={optionProduct}/>
              </div>
              <div className={style.labels}>
                <label>Three Images</label>
                <input type="file" required multiple onChange={optionThreeSixty}/>
              </div>
            </div>
            <input type="submit" value="Submit" onClick={datasubmission} className={style.insertbtn} />
          </form>
        </div>
      </div>
    </>
  );
};
