import React from 'react'
import {Todo} from "../MyComponents/Todo"
export const Todos = ({todos,onDelete}) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px"
  }
  return (
    <div className='container my-3' style={myStyle}>
        <h3 className='my-3'>Todos List</h3>
        {todos.length===0?"No todos to display":
        todos.map((todo)=>{
            return ( 
            <>
            <Todo todo={todo} key={todo.sno} onDelete={onDelete}/><hr/>
            </>
            )
        })
    }
    </div>
  )
}
