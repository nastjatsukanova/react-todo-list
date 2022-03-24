import React, { useState } from 'react';
import { Input } from './components/Controls/Input/Input';
import { Button } from './components/Controls/Button/Button';
import { getCurrentDate, setToStorage } from './utils/utils';
import { TodoList } from './components/TodoList/TodoList';
import { Date } from './components/Date/Date';

const currentDate = getCurrentDate();

function App() {
    const [todos, setTodos] = useState(() => {
        if (localStorage.todos) {
            return JSON.parse(localStorage.todos)
        }
        return [];
    });

    const [inputValue, setInputValue] = useState('');
    const updateTodos = (todos) => { setToStorage(todos); }
    const handleChange = (e) => { setInputValue(e.target.value); }
    
    const handleClick = () => {
        if (inputValue.trim()) {
            const updatedState = [...todos, {id: todos.length, text: inputValue, date:currentDate, done:false}]
            setTodos(updatedState);
            console.log(inputValue);
            setInputValue("");
            updateTodos(updatedState);
        }
        else {
            alert('Enter your task');
        }
    }

    const completeTodo = (id) => {
        const completed =  [...todos.map(item => {
            if (id === item.id) {
                return { ...item, done: !item.done};
            }
            return item;
        })]
        setTodos(completed);
        updateTodos(completed);
    }

    const deleteTodo = (id) => {
        const deleted = [...todos.filter(item => id !== item.id)];
        setTodos(deleted);
        updateTodos(deleted);
    }

    const sortDate = (date) => {
        const sorted = [...JSON.parse(localStorage.todos).filter(item => item.date === date)]
        setTodos(sorted);
    }

    const changeValue = (e) => {
        console.log(e.target.id)
        const inputId = e.target.id;
        const value = e.target.value;    
        const changed  = [...todos.map(item => {
            if(Number(inputId) === item.id) {
                return {...item, text: value}
            }
            return item;
        })]
        setTodos(changed);
        updateTodos(changed);
    }

    return ( 
        <div className = "App">
            <h1>Todo List</h1>
            <Date currentDate={currentDate} sortDate={sortDate} />
            <Input value={inputValue} handleChange={handleChange} className={'input'} />
            <Button handleClick={handleClick} text={'Save'} className={'button'}/>
            <TodoList 
                todos={todos} 
                completeTodo={completeTodo} 
                deleteTodo={deleteTodo} 
                changeValue={changeValue} 
            />
        </div>
    );
}

export default App;
