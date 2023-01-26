 
import React, {Component} from 'react';

export default class AddKT extends Component {

    constructor(props) {
        super(props);

        this.onChangektname = this.onChangektname.bind(this);
        this.onChangektintro = this.onChangektintro.bind(this);
         
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            kt_name: '',
            kt_intro: '',
             
        }
    }

    onChangektname(e) {
        this.setState({
            kt_name: e.target.value
        });
    }

    onChangektintro(e) {
        this.setState({
            kt_intro: e.target.value
        });
    }

     
    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`KT Name: ${this.state.kt_name}`);
        console.log(`KT Introduction: ${this.state.kt_intro}`);
         
         

        this.setState({
            kt_name: '',
            kt_intro: '',
             
        })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
               
                <form onSubmit={this.onSubmit}>
                    <div className="form-control">
                        <label>KT </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.kt_name}
                                required
                                onChange={this.onChangektname}
                                />
                        <br></br>
                        <label>Introduction </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.kt_intro}
                                onChange={this.onChangektintro}
                                />
                        <br></br>
                        <input type="file" class="form-control" aria-label="file example" required/>
                        <br></br>
                        <input type="submit" value="Save KT Session" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}