import React from 'react';
import './ToDo.css'
import Todolist from './Todolist'


const ToDo = ({text, todo, todos, setTodos, select, setselect}) => {
    



    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !==todo.id));
        
        

    };
    const check = (select) => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return{

                ...item, completed: !item.completed, select: 11
                 
                };
            }
            return item;
        })
        );
    };
   



    return(
        
    <div className='todo'>

    <input type="checkbox" onChange={check}/>

    <li className={`todo-item ${todo.completed ? "completed" : ''}`}>
    
            {text}. <label>Priority: {select}</label>
                
    </li>
           
    <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
    
            
    </div>
        
        
    );
}

export default ToDo;