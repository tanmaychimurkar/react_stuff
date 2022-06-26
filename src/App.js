import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Taskcomp from "./components/Taskcomp";
import React, {Component} from "react";

function App() {
    const name = 'Tanmay'
    const deleteTask = (id) =>{
        console.log('delete', id)
    }
  return (
    <div className="container">
      {/*<h1>Hello from react</h1>*/}
      {/*  <h2>Second hello {name}</h2>*/}
        <Header title = {'Task Tracker'}/>
        <Tasks tasks={deleteTask} ></Tasks>
    </div>
  )
}

export default App;
