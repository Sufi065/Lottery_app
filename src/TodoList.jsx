import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
let [todos,setTodos]=useState([{task:"sample-task",id:uuidv4(),isDone:false}]);
let[newTodo,setNewTodo]=useState("");
let addNewTask=()=>{
    setTodos((prevTodos)=>{
        return [...prevTodos,{task:newTodo,id:uuidv4()}];
    });
    setNewTodo("");

};
let updateTodoValue=(event)=>{
    setNewTodo(event.target.value);

};

let deleteTodo=(id)=>{

    setTodos((prevTodos)=>todos.filter((prevTodos)=>prevTodos.id!=id));

}


let UpperCaseAll=()=>{
    setTodos((prevTodos)=>(
     prevTodos.map((todo)=>{
     return {
         ...todo,
         task:todo.task.toUpperCase(),
     };
     })
    ));
 };

let UpperCaseOne=(id)=>{
   setTodos((prevTodos)=>(
    prevTodos.map((todo)=>{
        if(todo.id == id){
    return {
        ...todo,
        task:todo.task.toUpperCase(),
    };
}else{
    return todo;
}
    })
   ));
};

let DoneTodo=(id,isDone)=>{
    setTodos((prevTodos)=>(
        prevTodos.map((todo)=>{
            if(todo.id == id){
        return {
            ...todo,
            isDone:true,
        };
    }else{
        return todo;
    }
        })
       ));
}

    return(
        <div>
       <input placeholder="Add a List" value={newTodo} onChange={updateTodoValue}></input>
       <button onClick={addNewTask}> Add Task </button>
       <br /><br /><br /><br />
       <hr />
    <h4> Todo List! </h4>
       <ul>
       {todos.map((todo)=>(
         <li key={todo.id}>
            <span style={todo.isDone?{textDecorationLine:"line-through"}:{}}>{todo.task}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={()=>deleteTodo(todo.id)}>delete</button>
                <button onClick={()=>UpperCaseOne(todo.id)}>Uppercase</button>
                <button onClick={()=>DoneTodo(todo.id)}>Done</button>
            
            </li>

       ))}
       </ul>
       <button onClick={UpperCaseAll}>Uppercase All</button>

        </div>
    )
}