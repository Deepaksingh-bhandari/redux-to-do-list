export const addTodo=(todo)=>{
    return {
        type:'add',
        payload:todo
    }
}
export const deleteTodo=(todo)=>{
    return {
        type:'delete',
        payload:todo
    }
}