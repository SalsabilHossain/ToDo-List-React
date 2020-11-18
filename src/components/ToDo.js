import React from 'react';
import './ToDo.css'
import Todolist from './Todolist'


const ToDo = ({text, todo, todos, setTodos}) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !==todo.id));
        
        

    };
    const check = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return{

                ...item, completed: !item.completed
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
    
            {text}
                
    </li>
           
    <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
            
    </div>
        
        
    );
}

export default ToDo;