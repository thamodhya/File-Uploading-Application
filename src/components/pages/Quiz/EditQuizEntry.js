import React, {Component} from 'react';
//import axios from 'axios';
 
// import { useParams } from "react-router-dom";
export default class EditTask extends Component {
     
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

    // componentDidMount() {
         
    //     axios.get('http://localhost:4000/chapter/'+this.props.match.params.id)
    //         .then(response => {
    //             this.setState({
    //                 unit_name: response.data.unit_name,
    //                 unit_intro: response.data.unit_intro,
                     
    //             })
    //         })
    //         .catch(function(error) {
    //             console.log(error)
    //         })
    // }

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
        // const obj = {
        //     unit_name: this.state.unit_name,
        //     unit_intro: this.state.unit_intro,
             
        // };
        // axios.post('http://localhost:4000/chapter/update/'+this.props.match.params.id, obj)
        //     .then(res => console.log(res.data));

        // this.props.history.push('/');
    }

    render() {
        return (

            <div class="modal fade" id="editentry" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
      {/* <h1 class="modal-title fs-5" id="exampleModalLabel">Chapter Content</h1> */}
         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
       </div>
       <div class="modal-body"> 
              
                <form onSubmit={this.onSubmit}>
                     
                        <label>Name</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.unit_name}
                                onChange={this.onChangeunitname}
                                />

                                <br></br>
                     
                        <label>Description</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.unit_intro}
                                onChange={this.onChangeunitintro}
                                />
                    
                     
                    <div class="modal-footer">
                        <input type="submit" value="Update" className="btn btn-primary" />
                    </div>
                </form>
            </div>
            </div>
            </div>
            </div>
            


        )
    }
}
