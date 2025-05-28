import './App.css';
import Header from './MyComponents/header';
import {Todos} from "./MyComponents/Todos";
import { AddTodo } from './MyComponents/AddTodo';
import {Footer} from "./MyComponents/Footer";
import { useState,useEffect } from 'react';
function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete=(todo)=>{
    console.log("i am ondelete of ",todo);
    
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo = (title,desc)=>{
    let sno
    if(todos.length===0){
      sno=0;
    }else{
      sno = todos[todos.length-1].sno + 1;
    }
    
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
    
  }
  const [todos,setTodos]=useState(initTodo);
  useEffect(() => {
      localStorage.setItem("todos",JSON.stringify(todos));
    }, [todos])
  return (
    <>
    <Header title="My Todo List" searchBar= {false}/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
