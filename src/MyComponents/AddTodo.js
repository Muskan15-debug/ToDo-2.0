import React, { useState } from 'react'

export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or description cannot be blank")
        }else{
        addTodo(title,desc);
        setTitle("");
        setDesc("");
        }
    }

    return (
        <div className='container my-3'>
            <h3>Add a task</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="htmlForm-label">todo title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="htmlForm-control" id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="htmlForm-label">Todo description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="htmlForm-control" id="desc" />
                </div>
                
                <button type="submit" className="btn btn-sm btn-success">Add task</button>
            </form>
        </div>
    )
}
