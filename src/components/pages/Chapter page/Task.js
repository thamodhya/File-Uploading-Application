import React  from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';
 
import DeleteTask from './DeleteTask';

export default class Task extends React.Component {

    constructor(props) {
        super(props);
        this.state = {todos: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/chapter/')
            .then(res => {
                this.setState({todos: res.data});
            })
            .catch((error)=> {
                console.log(error);
            })
    }

    componentDidUpdate() {
        axios.get('http://localhost:4000/chapter/')
        .then(res  => {
            this.setState({todos: res.data});
        })
        .catch(function (error) {
            console.log(error);
        })   
    }

    todoList() {
        return this.state.todos.map((res, i) =>{
            return <DeleteTask todo={res} key={i} />;
        });
    }

    render() {
        return (
            <div>
              { this.todoList() }
        </div>
        )
    }
}