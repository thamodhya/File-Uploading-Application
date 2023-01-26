import axios from 'axios';
import React, {Component} from 'react';

export default class AddTask extends Component {

    constructor(props) {
        super(props);

        this.onChangeunitname = this.onChangeunitname.bind(this);
        this.onChangeunitintro = this.onChangeunitintro.bind(this);
         
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            unit_name: '',
            unit_intro: '',
             
        }
    }

    onChangeunitname(e) {
        this.setState({
            unit_name: e.target.value
        });
    }

    onChangeunitintro(e) {
        this.setState({
            unit_intro: e.target.value
        });
    }

     
    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Unit Name: ${this.state.unit_name}`);
        console.log(`Unit Introduction: ${this.state.unit_intro}`);
         
        const newTodo = {
            unit_name: this.state.unit_name,
            unit_intro: this.state.unit_intro,
            
        };

        axios.post('http://localhost:4000/chapter/add', newTodo)
            .then(res => console.log(res.data));


        this.setState({
            unit_name: '',
            unit_intro: '',
             
        })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                
                <form onSubmit={this.onSubmit}>
                    <div className="form-control">
                     
                        <label>Unit </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.unit_name}
                                required
                                onChange={this.onChangeunitname}
                                />
                        <br></br>
                        <label>Introduction </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.unit_intro}
                                onChange={this.onChangeunitintro}
                                />
                        <br></br>
                        <input type="submit" value="Save Unit" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}