import React, { useState } from "react";
import style from "../../style/Bumper.module.css";

 export function Bumpers (){
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  return (
    <div className={style.Bump}>
      <label>
        <input
          type="checkbox"
          checked={checked1}
          onChange={() => setChecked1(!checked1)}
        />
        
      </label>
      <p>Sport Design Package</p>
      <h4>3000/Rs</h4>

      <label>
        <input
          type="checkbox"
          checked={checked2}
          onChange={() => setChecked2(!checked2)}
        />
        
      </label>
      <p>SportDesign Package painted in Black (high-gloss) </p>
      <h4>5000/Rs</h4>
      <button>Add</button>
    </div>
  );
}


