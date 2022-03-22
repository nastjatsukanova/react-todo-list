import { useState } from "react";
import "./TodoItem.styles.css"

export const TodoItem = ({text, date,id, done, completeTodo, deleteTodo, changeValue}) => {
    //let todoItems = [];
    //todoItems = document.querySelectorAll('.todo_item');
    const [checked, setChecked] = useState(done);
    const handleDelete = () => {
        deleteTodo(id);
    }

    const handleComplete = () =>{
        completeTodo(id);
    }

    const handleChange = (e) => {
        changeValue(e);
    }


    return (
        <div className={checked ? 'todo_item checked' : 'todo_item'} >
            <input  type="text" className="todo_text" value={text}  onChange={handleChange} id={id} />
            <input className="todo_date" type="date" value={date} disabled/>
            <input className="complete" onClick={handleComplete} type="checkbox" defaultChecked={checked} onChange={() => setChecked(!checked)} />
            <button className="delete" onClick={handleDelete}>Delete</button>
        </div>
    )
}

