import React, { useState } from 'react'
import style from '../style/navbar.module.css'
import CarMenu from './CarMenu'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import { Bag, GeoAlt, Person, ThreeDotsVertical } from 'react-bootstrap-icons'


const Navbar = () => {
  const [Hover, setHover] = useState(false);
  let [num, setNum] = useState(0);
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const mouseOver = () => {
    setHover(true);
  }
  const mouseLeave = () => {
    setHover(false);
  }
  let setNumber1 = () => {
    setNum(1);
  }
  let setNumber2 = () => {
    setNum(2);
  }
  let setNumber3 = () => {
    setNum(3);
  }
  let setNumber4 = () => {
    setNum(4);
  }
  let setNumber5 = () => {
    setNum(5);
  }
  let setNumber6 = () => {
    setNum(6);
  }
  let name = "911";
  let imagesrc;
  function check() {
    if (num == 1) {
      name = "718";
      imagesrc = "https://nav.porsche.com/00BC524/series-assets/1024/718@2x.jpg";
    }
    else if (num == 2) {
      name = "911";
      imagesrc = "https://nav.porsche.com/00BC524/series-assets/1024/911@2x.jpg";
    }
    else if (num == 3) {
      name = "Taycan";
      imagesrc = "https://nav.porsche.com/00BC524/series-assets/1024/taycan@2x.jpg";
    }
    else if (num == 4) {
      name = "Panamera";
      imagesrc = "https://nav.porsche.com/00BC524/series-assets/1024/panamera@2x.jpg";
    }
    else if (num == 5) {
      name = "Macan";
      imagesrc = "https://nav.porsche.com/00BC524/series-assets/1024/macan@2x.jpg";
    }
    else if (num == 6) {
      name = "Cayenne";
      imagesrc = "https://nav.porsche.com/00BC524/series-assets/1024/cayenne@2x.jpg";
    }


  }
  const handleShow = () => {
    setShow(true);
    console.log('from handle show')
  }
  const handleNotShow = () => {
    setShow(false);
    console.log('from not handle show')
  }
  function check2() {
    if (show == true) {

      console.log("check2 is true")
    } else if (show == false) {
      console.log("check2 is false");
      <CarMenu name={name} image={imagesrc} />
    }

  }
  function showMenuFunc() {
    showMenu ? setShowMenu(false) : setShowMenu(true)
  }

  return (
    <>
     <MediaQuery minWidth={1216}>
      <div className={style.navbar} >
        <Link to={'/'}>
          <img src="https://cdn.ui.porsche.com/porsche-design-system/marque/porsche-marque-trademark.medium.min.fff6e9b91481cc5b1fc6c9b62987ccaf@2x.webp" className={style.logo} />
        </Link>

        <div className={style.modelImager} > 
          <div id="one" onMouseOverCapture={() => { mouseOver(); setNumber1() }} onMouseLeave={mouseLeave} className={style.model} >
            <img src="https://nav.porsche.com/00BC524/series-assets/1024/718@2x.jpg" width="100px" />
            <p>718</p>
          </div>
          <div id="two" onMouseOverCapture={() => { mouseOver(); setNumber2() }} onMouseLeave={mouseLeave} className={style.model}>
            <img src="https://nav.porsche.com/00BC524/series-assets/1024/911@2x.jpg" width="100px"/>
            <p>911</p>
          </div>
          <div onMouseOver={() => { mouseOver(); setNumber3() }} onMouseLeave={mouseLeave} className={style.model}>
            <img src="https://nav.porsche.com/00BC524/series-assets/1024/taycan@2x.jpg" width="100px"/>
            <p>Taycan</p>
          </div>
          <div onMouseOver={() => { mouseOver(); setNumber4() }} onMouseLeave={mouseLeave} className={style.model}>
            <img src="https://nav.porsche.com/00BC524/series-assets/1024/panamera@2x.jpg" width="100px"/>
            <p>Panamera</p>
          </div>
          <div onMouseOver={() => { mouseOver(); setNumber5() }} onMouseLeave={mouseLeave} className={style.model}>
            <img src="https://nav.porsche.com/00BC524/series-assets/1024/macan@2x.jpg" width="100px"/>
            <p>Macan</p>
          </div>
          <div onMouseOver={() => { mouseOver(); setNumber6() }} onMouseLeave={mouseLeave} className={style.model}>
            <img src="https://nav.porsche.com/00BC524/series-assets/1024/cayenne@2x.jpg" width="100px"/>
            <p>Cayenne</p>
          </div>
        </div>
        <div className={style.links} >
          <ul>
            <li>
              <Link to="/Shop">
              <Bag/>  
              Shop
              </Link>
            </li>
            <li>
              <i class="bi bi-geo-alt"></i>
              <GeoAlt/>
              Dealers
            </li>
            <li>
            <Link to="/Account">
             <Person/>
              My Porsche
             </Link>
             </li>
            <li>
              <ThreeDotsVertical/>
            </li>
          </ul>
        </div>
        <div className={style.btnContain} onClick={showMenuFunc}>
          <img src="https://i.ibb.co/B6HwVZd/menu.png" className={style.menuBtn} />
        </div>
      </div>
      </MediaQuery>


     <MediaQuery maxWidth={1215}>
      <div className={style.navbar2} style={{height: !showMenu ? "50px" : "120vh", position: showMenu ? "relative" : "static" }}>
        <Link to={'/'}>
          <img src="https://i.ibb.co/wBWTfPw/Porsche-logo.png" className={style.logo} />
        </Link>

        
        
          <div className={style.modelImages} style={{ display: !showMenu ? "none" : "flex", flexDirection: "row" }}>
            <div id="one" onMouseOverCapture={() => { mouseOver(); setNumber1() }} onMouseLeave={mouseLeave} className={style.model} > 
              <img src="https://i.ibb.co/W2m2cpR/718.jpg" />
              <p>718</p>
            </div>
            <div id="two" onMouseOverCapture={() => { mouseOver(); setNumber2() }} onMouseLeave={mouseLeave} className={style.model}>
              <img src="https://i.ibb.co/B4dyXG7/911.jpg" />
              <p>911</p>
            </div>
            <div onMouseOver={() => { mouseOver(); setNumber3() }} onMouseLeave={mouseLeave} className={style.model}>
              <img src="https://i.ibb.co/25FzmxQ/taycan.jpg" />
              <p>Taycan</p>
            </div>
            <div onMouseOver={() => { mouseOver(); setNumber4() }} onMouseLeave={mouseLeave} className={style.model}>
              <img src="https://i.ibb.co/JrFNvpf/panamera.jpg" />
              <p>Panamera</p>
            </div>
            <div onMouseOver={() => { mouseOver(); setNumber5() }} onMouseLeave={mouseLeave} className={style.model}>
              <img src="https://i.ibb.co/tqSVJCR/macan.jpg" />
              <p>Macan</p>
            </div>
            <div onMouseOver={() => { mouseOver(); setNumber6() }} onMouseLeave={mouseLeave} className={style.model}>
              <img src="https://i.ibb.co/6swS1s3/cayenne.jpg" />
              <p>Cayenne</p>
            </div>
          </div>
        
        <div className={style.links} >
          <ul>
            <li><img src="https://i.ibb.co/RvQCXbk/shopping-bag.png" width="20px" height="20px" />Shop</li>
            <li><img src="https://i.ibb.co/cc8LV03/location.png" width="20px" height="20px" />Dealers</li>
            <li><img src="https://i.ibb.co/K0vQd1G/person.png" width="20px" height="20px" />My Porsche</li>
            <li><img src="https://i.ibb.co/mDYgtqb/dots.png" width="20px" height="20px" className={style.dots} /></li>
          </ul>
        </div>
        <div className={style.btnContain} onClick={showMenuFunc}>
          <img src="https://i.ibb.co/B6HwVZd/menu.png" className={style.menuBtn} />
        </div>
      </div>
      </MediaQuery>
      {check()}

      {Hover && (
        <div onMouseOver={mouseOver} onMouseLeave={mouseLeave}>
          <CarMenu name={name} image={imagesrc} />
        </div>
      )}
    </>
  )
}

export default Navbar