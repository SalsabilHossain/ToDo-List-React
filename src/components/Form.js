import React, { Fragment } from 'react'
import task from '../images/task.svg'
import './Form.css'
import Todolist from "./Todolist"


function Form({setInputText, inputText, todos, setTodos, select, setselect}){
    const Priority = (e) => {
        console.log(e.target.value);
        setselect(e.target.value);

    };


    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);

    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, {text: inputText, completed: false, id: Math.random(), select: select}]);
        setInputText("");
        

    };
    return(
        
        <Fragment>
            <div className='boxflex'>
                <div className='form'>
                    <form>
                        <h1>TO-DO LIST</h1>
                        <h2>Task</h2>
                        
                        <input value={inputText} onChange={inputTextHandler} type="text" name="name" /><br/>
                            <label>
                                Set Priority :
                                <select value={select} onChange={Priority} > 
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                            </label><br/>
                        
                        <button onClick={submitTodoHandler}>Add</button>

                        
                                
                    </form>
                </div>

                <div className='list'>
                        <Todolist todos={todos} setInputText={setInputText} setTodos={setTodos} select={select} setselect={setselect}/>
                        

                </div>



            </div>



            
            
            
        </Fragment>
        
        
        

    );
}

export default Form;