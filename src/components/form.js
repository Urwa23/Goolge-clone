import React from 'react';

const Form = ({setinpuText, toDos, settoDos,inputText}) =>{
    const inputTextHandler=(e)=>{
        console.log(e.target.value);
        setinpuText(e.target.value)
        // inputText=e.target.value;
        // console.log(setinpuText)
    };
    const submitTodoHandler=(e)=>{
        console.log("hey");
        e.preventDefault();
        settoDos([
            ...toDos,{ text:inputText,completed:false, id:Math.random()*1000}
        ]);
        setinpuText("");
        console.log(setinpuText)
        // console.log(settoDos)
    };
    return(
        <form>
        <input 
        value={inputText} 
        onChange={inputTextHandler} 
         type="text"
         className="todo-input" 
         />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    )
}
export default Form;