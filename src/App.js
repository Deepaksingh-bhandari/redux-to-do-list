import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header'
import { Todos } from './MyComponents/Todos'
import { Footer } from './MyComponents/Footer'
import React, { useState, useEffect } from 'react';
import { Addtodo } from './MyComponents/Addtodo'
import { About } from './MyComponents/About'
import { Alert } from './MyComponents/Alert'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './state/actions/actions';
function App() {

  // To show alert
  const [alert, setalert] = useState(null);
  // let initTodo;
  // if (localStorage.getItem("todos") === null)
  //   initTodo = [];
  // else
  //   initTodo = JSON.parse(localStorage.getItem("todos"));
  // const [todos, setTodos] = useState(initTodo);

  // let dispatch=useDispatch();
  // dispatch(actions.addTodo)
  
  let todos =useSelector(state=>state.todos)
  
  // Use effect hook used to show text whenever todo is changed, If left blank then only triggered on 1st render.
  // useEffect(() => {
  //   console.log("New Todo is created, Total TOdo:", todos)
  // }, [todos])

  const showAlert=(message,type)=>{
    setalert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  // ******

  // To enable dark or light mode
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "grey"
      showAlert("Dark mode has been enabled","success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled","success");
    }

  }
  // ******************


  

  // let onDeleteitm = (delitm) => {
  //   console.log("This is onDelete of ", delitm)
  //   setTodos(todos.filter((itm) => {
  //     return itm !== delitm
  //   }))
  //   // localStorage.setItem("todos",JSON.stringify(todos)); 
  //   // The above function might be called before the items are deleted
  //   // call useEffect hoook
  // }

  // const addingTodo = (title, desc) => {
  //   let sno;
  //   if (todos.length === 0)
  //     sno = 0;
  //   else
  //     sno = todos[todos.length - 1].sno + 1;
  //   let newTodo = {
  //     sno: sno,
  //     title: title,
  //     desc: desc
  //   }
  //   setTodos([...todos, newTodo]);
  //   // localStorage.setItem("todos",JSON.stringify(todos));  //Using useEffect hook instead
  // }

 
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      {/* Everything should be inside router to allow routing from any page */}

      <Router >
        <div className="wrapper" >
          <Header mode={mode} toggleMode={toggleMode} title="My Todos List" searchBar={false} />
          <Alert alert={alert}></Alert>
          <Switch>
            {/* Render is used to return element consisting of  multiple components while routing */}
            {/* Exact Path is used to do exact matching, by default partial matching is done in React */}
            <Route exact path="/" render={() => {
              return (<>
                {/* <Addtodo className="text-decp" addTodo={addingTodo} /> */}
                <Addtodo className="text-decp" />
                <hr></hr>
                {/* <Todos todolist={todos} Delete={onDeleteitm} /> */}
                <Todos todolist={todos}  />
              </>)
            }}>
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </div>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
