let INITIAL_STATE=[];

    if (localStorage.getItem("todos") !== null)
    {
        INITIAL_STATE = JSON.parse(localStorage.getItem("todos"));
        console.log("Loca Storage value fetched", INITIAL_STATE)
    }

const todoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'add':
            let udpatedTodo = [...state];
            udpatedTodo.push(action.payload);
            return udpatedTodo;
        case 'delete':
            return state.filter((itm) => {
                return itm !== action.payload
              })    
        default: return state;
    }
}

export default todoReducer;