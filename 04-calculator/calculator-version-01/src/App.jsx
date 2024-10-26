import styles from "./App.module.css";
import Display from "./component/Display";
import ButtonMain from "./component/ButtonMain";
import { useState } from "react";

function App() {


  const buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "5",
    "-",
    "6",
    "7",
    "8",
    "*",
    "9",
    "0",
    "=",
    "/",
    ".",
  ];

  let [calVal,setVal]=useState("");
  const onButtonClick=(buttonText)=>{
    if(buttonText==='C'){
         setVal('');
    }
    else if(buttonText==='='){
        const result=eval(calVal);
        setVal(result);
    }
    else{
      const newDisplayVal= calVal+buttonText;
      setVal(newDisplayVal);
    }
  }

  return (
    <div className={styles.calculator}>
      <Display displayVal={calVal} />
      <ButtonMain onButtonClick={onButtonClick} buttonele={buttons} />
    </div>
  );
}

export default App;
