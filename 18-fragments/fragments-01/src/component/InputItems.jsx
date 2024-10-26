import styles from './InputItems.module.css'

const InputItems=({handleonKeyDown})=>{
   return (
    <input type="text"  className={styles.input} placeholder='input items here:' 
     onKeyDown={handleonKeyDown}
    />
   );
}
export default InputItems;