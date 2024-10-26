import styles from './welcomeMessage.module.css'
import { useContext } from 'react';
import { TodoItemsContext } from '../store/todoItemsStore';

const WelcomeMessage = () => {
  const {todoItems}= useContext(TodoItemsContext);
  
  return  todoItems.length===0 && <p className={styles.message}>Enjoy your Day!</p>
}

export default WelcomeMessage;