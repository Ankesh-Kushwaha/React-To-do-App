import styles from "../component/Display.module.css"
function Display({displayVal}){
    return (
       <input type="text"  className={styles.inputText}
       value={displayVal}
       readOnly
       />
    );
}

export default Display;