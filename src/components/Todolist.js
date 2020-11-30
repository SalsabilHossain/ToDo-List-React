import React from 'react';
import './Todolist.css';
import ToDo from './ToDo';
import Form from './Form'





function Todolist({todos, setTodos, select, setselect}){
    
    return(
    <div className="todo container">
        <ul className="to-do list">
            {todos
            .sort((a,b) => a.select > b.select)
            .map(todo => (
                    <ToDo todo={todo} setTodos={setTodos} todos={todos} key={todo.id} text={todo.text} select={todo.select}/>


            ))}
            
        </ul>
        

    </div>);
};

const priority = {
    completePriority: 10,
    
  };

export default Todolist;