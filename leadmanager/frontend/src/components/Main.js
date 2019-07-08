import React, {Component} from 'react';
import ReadToDo from './ReadToDo.js';
import ToDoList from './ToDoList.js'
import style from './css/components.css'

export default class Main extends Component {
    render(){
        return(<>
        <div className="container">
            <ReadToDo/>
        </div>
        <div className="container">
         <ToDoList/>
        </div> 
        </>
        );
    }
}