import React from 'react'
import {TodoItem} from '../MyComponents/TodoItem'
import { useSelector } from 'react-redux'

export const Todos = (props) => {
 
 let todolist=useSelector(state=>state.todos)
 console.log(todolist)
    return (
        <div className="container pb-3">
                    <h2  className="py-3">Todos List</h2>
                    {todolist.length===0?"No Todos to display":
                    todolist?.map((todoitm,i)=>{
                        // return  <TodoItem  key={todoitm.sno} todoitem={todoitm} onDelete={props.Delete}/>
                        return  <TodoItem  key={i} todoitem={todoitm} />
                    })
                    }        
                    
        </div>
    )
}
