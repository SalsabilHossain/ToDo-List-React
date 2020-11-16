import React from 'react';
import './ToDo.css'
import Todolist from './Todolist'


const ToDo = ({text}) => {
    return(
        
    <div className='todo'>
    <input type="checkbox"></input>

    <li className="todo-item">
            {text}
                
    </li>
           
    <button className="trash-btn"><i className="fas fa-trash"></i></button>
            
    </div>
        
        
    );
}

export default ToDo;