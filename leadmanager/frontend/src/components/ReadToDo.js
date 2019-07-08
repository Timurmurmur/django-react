import React, {Component} from 'react';
import styled from 'styled-components';
import ToDoService from './services/ToDoService.js'
import style from './css/components.css'

const Form = styled.form``;

const Input = styled.input`
    width: 400px;
    margin-top: 100px;
    height: 30px;
    border: 5px solid rgb(150, 54, 54, 0.6);
    border-radius: 10px;
    padding: 2px 10px;
`;

const Card = styled.div`
`
const ErrorMessage = styled.h1`
    font-size: 50px;
    color: red;
`


const Post = styled.div`
    border: 1px solid black;
    padding: 10px 5px;
    border-radius: 10px;
    width: 100%;
    margin: 10px 0;
`
const post__block = styled.div`
    display: block;
`

export default class ReadToDo extends Component{
    ToDoService = new ToDoService();

    state = {
        posts: [],
        error: false
    }
    
    componentDidMount() {
        this.updatePosts();
    }

    updatePosts(){
        this.ToDoService.getAllToDo()
        .then(this.onPostsLoaded)
        .catch(this.onError);
    }

    onPostsLoaded = (posts) => {
        this.setState({
            posts,
            error: false
        })
        console.log(posts);
    }

    onError = (err) => {
        this.setState({
            error: true
        })
    }

    renderToDoPosts = (arr) => {
        return arr.map(item => {
            const {message, active,finished} = item;

            return(
                <Post>
                    <post__block className={active ? "active" : "finished"} ></post__block>
                    <post__block>{message}</post__block>
                </Post>
            )
        })
    }
    render() {
        const {posts, error} = this.state;
        if (error){
            return <ErrorMessage>ОШИБКА</ErrorMessage>
        }

        const card = this.renderToDoPosts(posts);

        return(
            <Form onSubmit={this.submitToDo}>
                <Input type="text"/>
                <Card>{card}</Card>
            </Form>
        );
    }   
}
