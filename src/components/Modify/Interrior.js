import React from "react";
import style from "../../style/Interrior.module.css";

export const Interrior=()=>
{
     const Interriordata=[
        {
            imgsrc : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN4AAAB9CAMAAAD6MS3FAAAAA1BMVEUAAACnej3aAAAAMUlEQVR4nO3BMQEAAADCoPVP7WcKoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG5s4wABy0KbBgAAAABJRU5ErkJggg==",
            Name :"Jet Black Leather",
            price:"1000/Rs"
        },
        {
            imgsrc : "https://schoolprideaccessories.com.au/wp-content/uploads/2016/11/BURGUNDY-Maroon-and-BLACK-School-Colour-Hair-Accessories.jpg",
            Name :" Leather pakage Bordeaus Red",
            price:"2000/Rs"
        },
        {
            imgsrc : "https://m.media-amazon.com/images/I/215Mjw8mn+L._AC_.jpg",
            Name :" Leather pakage Black crayon",
            price:"3000/Rs"
        }
    ]
    return(
    <>
    <div className={style.Interriormain}>
        {Interriordata.map((datais)=>(
            <div className={style.interriorclass}>
                    <img src={datais.imgsrc}/>
                    <p className={style.interriorname} >{datais.Name}</p>
                    <h4 className={style.price}>{datais.price}</h4>
                </div>
                ))}
                <button>Add</button>
        
    </div>

    </>
    )
}