import React,{useState} from 'react';
import Form from './components/form'
import Todolist from './components/todolist';

import './App.css';

function App() {
  const [inputText,setinpuText]=useState("");
  const [toDos,settoDos]=useState([]);
  return (
    <div className="App">
      <header>
      <h1>Urwa's Todo List</h1>
    </header>
    <Form setinpuText={setinpuText} toDos={toDos} settoDos={settoDos}  inputText={inputText}/>
    <Todolist toDos={toDos} settoDos={settoDos}/>
    </div>
  );
}

export default App;
