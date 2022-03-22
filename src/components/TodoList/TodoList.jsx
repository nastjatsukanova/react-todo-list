import { TodoItem } from "../TodoItem/TodoItem";
import "./TodoList.styles.css"

export const TodoList = ({todos, completeTodo, deleteTodo, changeValue, updateTodos}) => {
    return (
        <div className="todo_list">
            
        {todos && todos.map((todo, index) => (
                <TodoItem 
                    key={index} 
                    text={todo.text} 
                    id={todo.id} 
                    date={todo.date}
                    done={todo.done}
                    deleteTodo={deleteTodo} 
                    completeTodo={completeTodo}
                    changeValue={changeValue}
                />
            )
        )}
        </div>
    ) 
}
