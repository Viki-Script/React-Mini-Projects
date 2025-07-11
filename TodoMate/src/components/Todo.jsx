import { useState } from "react"

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
                {console.log(todos)}
            </form>
        </div>
    )
}