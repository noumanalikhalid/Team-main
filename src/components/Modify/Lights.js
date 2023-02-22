import React, { useState } from "react";
import style from "../../style/Light.module.css";

 export function Lights (){
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  return (
    <div className={style.Lightt}>
    <label>
        <input
          type="checkbox"
          checked={checked1}
          onChange={() => setChecked1(!checked1)}
        />
        
      </label>
      <p>LED main headlights including Porsche Dynamic Light System (PDLS)</p>
      <h4>50000/Rs</h4>

      <label>
        <input
          type="checkbox"
          checked={checked2}
          onChange={() => setChecked2(!checked2)}
        />
        
      </label>
      <p>Tinted Bi-Xenon main headlights including Porsche Dynamic Light System (PDLS) </p>
      <h4>70000/Rs</h4>
      <button>Add</button>
    </div>
  );
}


