import { useState } from "react"
import TodoItem from "./TodoItem";

export default function Todo(){
    const[todo,setTodo] = useState("")
    const[todos,setTodos] = useState([])
    const handleSubmit = (e)=>{
        e.preventDefault();
        setTodos([...todos,todo])
        setTodo("")
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                onChange={(e)=>{setTodo(e.target.value)}} 
                value={todo} 
                type="text" />
                <button type="submit">Add</button>
                {todos.map((item,index)=> (
                <TodoItem item = {item} key ={index} />
                ))}
            </form>
        </div>
    )
}