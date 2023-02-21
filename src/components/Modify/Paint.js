import React from "react";
import style from "../../style/Paint.module.css";

const Paint=(props)=>
{
    const data = [
        {
            color : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN4AAAB9CAMAAAD6MS3FAAAAA1BMVEUAAACnej3aAAAAMUlEQVR4nO3BMQEAAADCoPVP7WcKoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG5s4wABy0KbBgAAAABJRU5ErkJggg==",
            Name :"Black"
        },
        {
            color : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAAB2CAMAAACKyj2IAAAAA1BMVEXAwMBmS75kAAAAL0lEQVR4nO3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN4GYUIAAePo5ekAAAAASUVORK5CYII=",
            Name :"Silver"
        },
        {
            color : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEX/AAAZ4gk3AAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=",
            Name :"Red"
        }
    ]
    return(
        <>
        {/* Working */}
        <div className={style.mainpaint}>
            {data.map((datas)=>(
                <div className={style.paintclass}>
                    <img src={datas.color}/>
                    <p className={style.paintname} >{datas.Name}</p>
                </div>
                ))}
        </div>
        </>
    )
}
export default Paint;