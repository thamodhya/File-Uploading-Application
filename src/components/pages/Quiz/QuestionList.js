import React  from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';
 
import DeleteQ from './DeleteQ';

export default class QuestionList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {questions: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/chapter/')
            .then(res => {
                this.setState({questions: res.data});
            })
            .catch((error)=> {
                console.log(error);
            })
    }

    componentDidUpdate() {
        axios.get('http://localhost:4000/chapter/')
        .then(res  => {
            this.setState({questions: res.data});
        })
        .catch(function (error) {
            console.log(error);
        })   
    }

    todoList() {
        return this.state.todos.map((res, i) =>{
            return <DeleteQ todo={res} key={i} />;
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