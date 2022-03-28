import { useState } from "react";
import { Button } from "../Controls/Button/Button";
import { Input } from "../Controls/Input/Input";
import "./TodoItem.styles.css"

export const TodoItem = ({text, date,id, done, completeTodo, deleteTodo, changeValue}) => {
    const [checked, setChecked] = useState(done);
    const deleteTodoHandler = () => deleteTodo(id);
    const completeTodoHandler = () => completeTodo(id);
    const changeTodoHandler = (e) => changeValue(e);
    const changeCheckboxHandler = () => setChecked(!checked);
    const classExpression = checked ? 'todo_item checked' : 'todo_item';
    return (
        <div className={classExpression} >
            <Input className={"complete"} onClick={completeTodoHandler} type={"checkbox"} defaultChecked={checked} handleChange={changeCheckboxHandler} />
            <Input type={"text"} className={"todo_text"} value={text} handleChange={changeTodoHandler} id={id} /> 
            <Input  className={"todo_date"} type={"date"} value={date} disabled={true}/> 
            <Button className={"delete"} saveTodo={deleteTodoHandler} text={'Delete'} />
        </div>
    )
}

