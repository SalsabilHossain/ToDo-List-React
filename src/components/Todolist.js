import React from 'react';
import './Todolist.css';
import ToDo from './ToDo';
import Form from './Form'


function Todolist({todos, setTodos}){
    
    return(
    <div className="todo container">
        <ul className="to-do list">
            {todos.map(todo => (
                    <ToDo todo={todo} setTodos={setTodos} todos={todos} key={todo.id} text={todo.text}/>


            ))}
            
        </ul>
        

    </div>);
}

export default Todolist;