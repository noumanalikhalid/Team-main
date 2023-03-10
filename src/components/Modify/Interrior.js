import React from "react";
import style from "../../style/Interrior.module.css";

export const Interrior = () => {
  const Interriordata = [
    {
      imgsrc:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN4AAAB9CAMAAAD6MS3FAAAAA1BMVEUAAACnej3aAAAAMUlEQVR4nO3BMQEAAADCoPVP7WcKoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG5s4wABy0KbBgAAAABJRU5ErkJggg==",
    },
    {
      imgsrc:
        "https://schoolprideaccessories.com.au/wp-content/uploads/2016/11/BURGUNDY-Maroon-and-BLACK-School-Colour-Hair-Accessories.jpg",
    },
    {
      imgsrc: "https://m.media-amazon.com/images/I/215Mjw8mn+L._AC_.jpg",
    },
  ];
  return (
    <>
      <div className={style.interriormain}>
        <div className={style.interriorline}>
          {Interriordata.map((datais) => (
            <div className={style.interriorclass}>
              <img src={datais.imgsrc} />
              {/* <p className={style.interriorname}>{datais.Name}</p> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
