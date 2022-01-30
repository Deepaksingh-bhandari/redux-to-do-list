import React from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../state/actions/actions';

export const TodoItem = (props) => {
    let dispatch=useDispatch();
    return (
        <div className="my-3">
            <h4 key={props.todoitem.sno,"t"}>{props.todoitem.Title}</h4>
            <h5 key={props.todoitem.sno,"d"}>{props.todoitem.Desc}</h5>            
            {/* <button key={props.todoitem.sno,"b"} className="btn-danger btn-sm btn" onClick={()=>props.onDelete(props.todoitem)}>Delete</button> */}
            <button key={props.todoitem.sno,"b"} className="btn-danger btn-sm btn" onClick={()=>dispatch(actions.deleteTodo(props.todoitem))}>Delete</button>
            {/* IF onClick={props.onDelete(props.todoitem)} is used then the funciton will becalled directly at time of assigning. SO the above syntax is used */}
        </div>
    )
}

