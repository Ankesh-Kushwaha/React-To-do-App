/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import styles from "./ButtonMain.module.css";
import { useState } from "react";

function ButtonMain({buttonele,onButtonClick}){
    return (
      <div className={styles.buttons}>
         {buttonele.map(buttons=> <button className={styles.button} type={buttons}
         
         onClick={()=>onButtonClick(buttons)}

         >{buttons}</button> )}  
    </div>
    );
}

export default ButtonMain;