import React from "react";
import style from "../../style/carasole2.module.css";
 export const Carsole2=()=>
 {
    return(
        <>
         <div className={style.caross}>
        <Carousel transitionTime={"1500"} interval="5000" showThumbs={false} autoPlay infiniteLoop className={style.caross}>
            <div>
                <img src="https://di-uploads-pod15.dealerinspire.com/porscheofhuntsville/uploads/2020/05/2017-Macan-GTS-Red-small.jpg"  />
            </div>
            <div >
                <img src="https://di-uploads-pod15.dealerinspire.com/porschestpaul/uploads/2019/03/911_CarreraS_Hero_Image-1024x320.jpg"  />
            </div>
            <div >
                <img src="https://di-uploads-pod15.dealerinspire.com/porscheminneapolis/uploads/2022/05/porsche-normal.jpg"  />
            </div>
            <div>
                <img src="https://files.porsche.com/filestore/image/multimedia/none/countryselector-panamera-platinum-edition/normal/f2415bd6-3e3a-11ec-80e2-005056bbdc38;s45/porsche-normal.jpg"/>
            </div>

        </Carousel>
        </div>
        </>
    )
 }