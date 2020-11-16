import React from 'react';
import './Todolist.css';
import ToDo from './ToDo';
import Form from './Form'


function Todolist({todos}){
    
    return(
    <div className="todo container">
        <ul className="to-do list">
            {todos.map(todo => (
                <ToDo text={todo.text}/>


            ))}
            
        </ul>
        

    </div>);
}

export default Todolist;