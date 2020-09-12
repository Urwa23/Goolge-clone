import React from 'react';
import Todo from './todo';
const Todolist = ({toDos,settoDos} )=>{
  console.log(toDos)
    return(
        <div className="todo-container">
      <ul className="todo-list">
        {toDos.map(toDo=>(
          <Todo key={toDo.id} text={toDo.text} toDos={toDos} settoDos={settoDos} toDo={toDo}/>
        ))}
      </ul>
     
    </div>
    )
}
export default Todolist;