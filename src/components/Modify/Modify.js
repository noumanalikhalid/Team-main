
import { ChevronLeft, ChevronRight, X ,SaveFill} from "react-bootstrap-icons";
import { Carousel } from "react-responsive-carousel";
import Details from "./Detail";
import Exdetail from "./Exdetail";
import style from "../../style/modify.module.css";
import Paint from "./Paint";
import { Wheel } from "./Wheel";
import { PaintedWheel } from "./PaintedWheel";
import { Interrior } from "./Interrior";
import { Bumpers } from "./Bumpers";
import { Lights } from "./Lights";
import { Carsole2 } from "./Carsole2";



export const Modify = () => {
    // const [changes , changepropertys] = useState("static");
    // const changeproperty=() => {
    //     if(window.scrollY >= 60){
    //         changepropertys ( "fixed")
    //         console.log(changepropertys);
    //     }
    // }
    // window.addEventListener('scroll' , changeproperty);
    const Closes = ()=>{
        var x = document.getElementById("dis")
         x.style.visibility = "hidden"
         console.log("Working")
    }
    const worked = ()=>{
       var x = document.getElementById("dis")
        x.style.visibility = "visible"
        console.log("Working")
    }

  const Data = [
    {
      Name:"718 Cayman",
      Price: " 1.32 Crore",
      Mileage: "14.5 kmpl",
      Maxpower: "2150 rpm",
    },
    
  ];
  const Data2=[
    {
      Name:"718 Cayman",
      Price: " 1.32 Crore",
      Mileage: "14.5 kmpl",
      Maxpower: "@ 2150 rpm",
    },
    /*{
      Name:"Porsche 911 Carrera",
      Price: "  1.63 Crore",
      Mileage: "11.11 kmpl",
      Maxpower: "@ 1950 rpm",
    },
    {
      Name:"Porsche Taycan",
      Price: " 44,800.57 Rs",
      Mileage: "450 km",
      Maxpower: "560 kW (761 PS)",
    },
    {
      Name:"Porsche Panamera",
      Price: " 1,44,49,000 Rs",
      Mileage: "9.7 to 30.3 kmpl ",
      Maxpower: "2894.0 cc",
    },
    {
      Name:"Porsche Mecan",
      Price: "83,21,000  Rs",
      Mileage: "11.2 to 12.3 ",
      Maxpower: "1984.0 cc ",
    },
    {
      Name:"Porsche Cayenne",
      Price: " 265.428438 Rs",
      Mileage: "16.1-16.6 kmpl ",
      Maxpower: "3800-4000 rpm ",
    },*/

  ]
  const PaintData=[
    {
      imgsrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/768px-Black_colour.jpg",
      Name:"Black",
      Price:"2000"
    },
    {
      imgsrc:"https://color.adobe.com/media/theme/92471.png",
      Name:"White",
      Price:"2000"

    },
    /*{
      imgsrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Auto_Racing_Yellow.svg/2560px-Auto_Racing_Yellow.svg.png",
      Name:"Yellow",
      Price:"2000"
    },
    {
      imgsrc:"https://www.paintscratch.com/content/images/swatches/Guards-Red-2020-Porsche-911-D11B1F.jpg",
      Name:"Red",
      Price:"2000"
    },
    {
      imgsrc:"https://cdn.crispedge.com/22cc00.png",
      Name:"Green",
      Price:"2000"
    }*/
    
  ]
  return (
    <>
      <div className={style.container_modify}>
        <div className={style.breadcrumb}>
          <p>Porsche</p>
         
        </div>
        <button className={style.back}>
          <ChevronLeft />
          Back
        </button>
        <button className={style.sav}>
          <SaveFill />
          Save
        </button>
        <div className={style.selectionpart}>
          <div className={style.leftselect}>
            {/* Models */}
            <h2>MODELS</h2>
            <div id="fixed" className={style.mainleft} >
            
             <h1>nomi</h1>
             
             
             
             
            </div>
           
            
          </div>
          <div className={style.rightmain}>
            <h1 className={style.heading}>
              {" "}
              <ChevronRight />
              Details
            </h1>
            <hr></hr>
            {Data.map((datas) => (
              <Details
                Price={datas.Price}
                Mileage={datas.Mileage}
                Maxpower={datas.Maxpower}
              />
            ))}
            <hr></hr>
            <h1 className={style.head3}>Extra Details</h1>
            <a className={style.head4} onClick={worked}>See Details</a>
            <hr></hr>
            <h1 className={style.paintheading}>Exterior Paint</h1>
              <Paint/>
              <hr></hr>
              <h1 className={style.wheelshead}>Wheels</h1>
              <Wheel/>
              <hr></hr>
              <h1 className={style.paintwheel}>Painted Wheel</h1>
              <PaintedWheel/>
              <hr></hr>
              <h1 className={style.interriorhead}> Interior Colors</h1>
              <Interrior/>
              <hr></hr>
              <h1 className={style.Bumpershead}>Exterior Bumpers</h1>
            <Bumpers/>
            <hr></hr>
            <h1 className={style.Lighthead}>Lights/Vision</h1>
            <Lights/>
            <hr></hr>
            

             
             
         </div>
        </div>
      </div>
      <div className={style.modal} style={{visibility:"hidden"}} id="dis">
        
        <div>
            <button className={style.cross} onClick={Closes}>
                <X/>
            </button>
            <div>
            {Data2.map((dataes)=>(
            <Exdetail
            Name={dataes.Name}
                Price={dataes.Price}
                Mileage={dataes.Mileage}
                Maxpower={dataes.Maxpower}/>))}

        </div>
        </div>
        
      </div>
     
      
       
    </>
  );
};
