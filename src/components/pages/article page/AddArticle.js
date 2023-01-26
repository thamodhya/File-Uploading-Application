 
import React, {Component} from 'react';

export default class AddArticle extends Component {

    constructor(props) {
        super(props);

        this.onChangeartname = this.onChangeartname.bind(this);
        this.onChangeartintro = this.onChangeartintro.bind(this);
         
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            art_name: '',
            art_intro: '',
             
        }
    }

    onChangeartname(e) {
        this.setState({
            art_name: e.target.value
        });
    }

    onChangeartintro(e) {
        this.setState({
            art_intro: e.target.value
        });
    }

     
    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Article Name: ${this.state.art_name}`);
        console.log(`Article Introduction: ${this.state.art_intro}`);
         
         

        this.setState({
            art_name: '',
            art_intro: '',
             
        })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
               
                <form onSubmit={this.onSubmit}>
                    <div className="form-control">
                        <label>Article</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.art_name}
                                required
                                onChange={this.onChangeartname}
                                />
                        <br></br>
                        <label>Introduction </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.art_intro}
                                onChange={this.onChangeartintro}
                                />
                        <br></br>
                        <input type="file" class="form-control" aria-label="file example" required/>
                        <br></br>
                        <input type="submit" value="Save Article" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}