import React, {useState} from 'react'
import './App.css';
import Form from "./components/Form"
import Todolist from "./components/Todolist"

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  


  return (
    <div className="App">
      
  
      <Form 
      inputText={inputText}
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}/>
      
     
    </div>
  );
}

export default App;
