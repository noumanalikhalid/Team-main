import React from 'react'
import style from '../style/CarMenu.module.css'
import { Link } from 'react-router-dom'

const CarMenu = (props) => {

    return (
        <>
            <section className={style.main}>
                <div className={style.imgSection}>
                    <img src={props.image} alt="Car_Menu"/>
                </div>
                <div className={style.details}>
                    <h1>{props.name}</h1>
                    <hr />
                    <Link to={props.name}>
                        <p>Configure</p>
                    </Link>

                    <hr />
                    <Link to="#"><p>Comapre</p></Link>
                    <hr />
                    <Link to="#"><p>Find New and Pre-owned Vehicles</p></Link>

                </div>
                <div className={style.models}>
                    <Link to={props.name}>
                        <div className={style.box}>
                            <p><img 
                                src="https://cdn.ui.porsche.com/porsche-design-system/marque/porsche-marque-trademark.medium.min.fff6e9b91481cc5b1fc6c9b62987ccaf@2x.webp" width="20px" height="20px" 
                                alt="model_image"
                                />{props.name} Models</p>
                        </div>
                    </Link>

                </div>
            </section>

        </>
    )
}

export default CarMenu