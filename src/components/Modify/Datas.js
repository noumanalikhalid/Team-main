import React from "react";
import style from "../../style/Paint.module.css";

const Paint = () => {
  const data = [
    {
      color:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN4AAAB9CAMAAAD6MS3FAAAAA1BMVEUAAACnej3aAAAAMUlEQVR4nO3BMQEAAADCoPVP7WcKoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG5s4wABy0KbBgAAAABJRU5ErkJggg==",
    },
    {
      color:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAAB2CAMAAACKyj2IAAAAA1BMVEXAwMBmS75kAAAAL0lEQVR4nO3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN4GYUIAAePo5ekAAAAASUVORK5CYII=",
    },
    {
      color:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEX/AAAZ4gk3AAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=",
    },
  ];
  return (
    <>
      <div className={style.mainpaint}>
        <div className={style.paintsline}>
          {data.map((datas) => (
            <div className={style.paintclass}>
              <img src={datas.color} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Paint;
