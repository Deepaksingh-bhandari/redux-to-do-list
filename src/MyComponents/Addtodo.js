import React from 'react'
import { useState } from 'react' 
import { useDispatch } from 'react-redux'
import { actions } from '../state/actions/actions'

export const Addtodo = (props) => {
    let dispatch=useDispatch();
    const [Title, setTitle] = useState("")
    const [Desc, setDesc] = useState("")

    const submit=(e)=>{
        e.preventDefault(); // TO Prevent default page reload behaviour on submit button
        if(Title===""|| Desc==="")
        {
            alert("Title or Description can't be blank")
        }
        else
        {dispatch(actions.addTodo({Title,Desc}))}
        // props.addTodo(Title,Desc);
    }
    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo title</label>
                    <input type="text"  value={Title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value={Desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add todo</button>
            </form>
        </div>
    )
}
