/* eslint-disable react/prop-types */
import styles from './container.module.css'

const Container=(props)=>{
   return <div className={styles.container}>{props.children}</div>
}
export default Container;