import React, { Fragment } from 'react'
import task from '../images/task.svg'
import './Form.css'
import Todolist from "./Todolist"


function Form({setInputText, inputText, todos, setTodos}){
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);

    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, {text: inputText, completed: false, id: Math.random()}]);
        setInputText("");
        
    };
    return(
        
        <Fragment>
            
            <div className='container'>
            <div className='imgback'><img src={task} alt="Task"/></div>
            <div className='form'>
            <form>
            <h1>TO-DO LIST</h1>
            <label>
            Task
            <input value={inputText} onChange={inputTextHandler} type="text" name="name" />
            </label>
            <button onClick={submitTodoHandler}>Add</button>
            
            
            
            </form>
            <div className="list"><Todolist todos={todos} setInputText={setInputText} setTodos={setTodos} /></div>
            
            
            

            </div>
            
            </div>
            
        </Fragment>
        
        
        

    );
}

export default Form;