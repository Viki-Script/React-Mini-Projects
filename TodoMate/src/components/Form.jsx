import { useState } from "react";
import styles from './form.module.css'

export default function Form ({todos,setTodos}){
    const[todo,setTodo] = useState("")
    const handleSubmit = (e)=>{
        e.preventDefault();
        setTodos([...todos,todo])
        setTodo("")
    }
    return  <form className={styles.todoform} onSubmit={handleSubmit}>
                <div className={styles.inputContainer}>
                    <input
                    className={styles.modernInput} 
                    onChange={(e)=>{setTodo(e.target.value)}} 
                    value={todo} 
                    type="text"
                    placeholder="Enter Your Plan" />
                    <button className={styles.modernButton} type="submit">Add</button>
                </div>    
            </form>
    
}