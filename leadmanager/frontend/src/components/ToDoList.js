import React,{Component} from 'react';
import styled from 'styled-components';

const ToDoWrapper = styled.div`
    max-height: 500px;
    max-widht: 500px;
    background: #f0f0f0;

`;

class ToDoList extends Component{
    state = {
        title: ["component","Do Homework"],
        completed: true,
        active: false
    }

    render(){
        return(
            <ToDoWrapper>
                
            </ToDoWrapper>
        );
    }
}
export default ToDoList;