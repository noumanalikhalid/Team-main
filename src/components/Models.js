import React from 'react'
import { Link } from 'react-router-dom'
import style from '../style/models.module.css'

const data = [
    {
        title : "718",
        image :  "https://clients.contology.com/Client/__Blank-Templates__/Trim-Page-Template/2020/Porsche/718/images/Image01.jpg"
    },
    {
        title : "911",
        image :  "https://cdnwp-s3.benzinga.com/wp-content/uploads/2021/03/17170753/img_60526fa8dd93e.png?optimize=medium&dpr=1.5&auto=webp&width=1080"
    },
    {
        title : "Taycan",
        image :  "https://pictures.dealer.com/p/porscheofarlington/0801/6b1522f319309fc75d64eecad957b17bx.jpg",
    },
    {
        title : "Panamera",
        image :  "https://www.stratstone.com/-/media/stratstone/porsche/new-cars/inline-images/panamera/2020-model/porsche-panamera-lifestyle-720x405px.ashx?mh=1440&la=en&h=405&w=720&mw=2560&hash=48C26AD097561C867C7A029DF46C4CB7"
    },
    {
        title : "Macan",
        image :  "https://media.autoexpress.co.uk/image/private/s--Z7DU5Snd--/f_auto,t_content-image-full-desktop@1/v1630401526/autoexpress/2021/08/Porsche%20Macan%20GTS%202021%20UK-19.jpg"
    },
    {
        title : "Cayenne",
        image :  "https://clients.contology.com/Client/__Blank-Templates__/Trim-Page-Template/2020/Porsche/Cayenne/images/Image01.jpg"
    }
    ]

const Models = () => {
    return (
        <>
          <section className={style.sec}>
            <h1>Models</h1>
            <div className={style.modelContainer}>
            {data.map((datas)=>(
                <Link to="/Built" className={style.modelBox} style={{backgroundImage : `url(${datas.image})`}}>
                    <h2>{datas.title}</h2>
                    <button className={style.btnBuild}>Build Your Own</button>
                    <button className={style.btnModel}>All Models</button>
                </Link>
            ))}
            </div>
          </section>
        </>
    )
}
export default Models