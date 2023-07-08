import React from "react";
import style from "../../style/Paint.module.css";

const Paint = () => {
  const colors = (dats)=>{
    alert(dats);
    localStorage.setItem("Color" , dats)
    window.location.reload()
  }
  const data = [
    {
      title:"Black" ,
      color:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN4AAAB9CAMAAAD6MS3FAAAAA1BMVEUAAACnej3aAAAAMUlEQVR4nO3BMQEAAADCoPVP7WcKoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG5s4wABy0KbBgAAAABJRU5ErkJggg==",
    },
    {
      title:"Default",
      color:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAAB2CAMAAACKyj2IAAAAA1BMVEXAwMBmS75kAAAAL0lEQVR4nO3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN4GYUIAAePo5ekAAAAASUVORK5CYII=",
    },
    {
      title:"Red",
      color:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEX/AAAZ4gk3AAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=",
    },
  ];
  return (
    <>

      <div className={style.mainpaint}>
        <div className={style.paintsline}>
          {data.map((datas,index) => (
            <button className={style.paintclassess} onClick={()=>colors(datas.title)} key={index}>
              <img src={datas.color} alt={datas.title} />
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
export default Paint;
