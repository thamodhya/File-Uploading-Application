import React, {Component} from 'react';
//import axios from 'axios';
 
// import { useParams } from "react-router-dom";
export default class EditQ extends Component {
     
    constructor(props) {
        super(props);

        this.onChangequiz = this.onChangequiz.bind(this);
        this.onChangeop1 = this.onChangeop1.bind(this);
        this.onChangeop2 = this.onChangeop2.bind(this);
        this.onChangeop3 = this.onChangeop3.bind(this);
        this.onChangeop4 = this.onChangeop4.bind(this);
         
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            quiz: '',
            op1: '',
            op2: '',
            op3: '',
            op4: '',
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

    onChangequiz(e) {
        this.setState({
            quiz: e.target.value
        });
    }

    onChangeop1(e) {
        this.setState({
            op1: e.target.value
        });
    }

    onChangeop2(e) {
        this.setState({
            op2: e.target.value
        });
    }

    onChangeop3(e) {
        this.setState({
            op3: e.target.value
        });
    }

    onChangeop4(e) {
        this.setState({
            op4: e.target.value
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

            <div class="modal fade" id="editq" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">Content</h1>
         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
       </div>
       <div class="modal-body"> 
              
                <form onSubmit={this.onSubmit}>
                     
                <div className="form-control">
                        <label>Write the question.</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.quiz}
                                required
                                onChange={this.onChangequiz}
                                />
                        <br></br>
                         
                        <label>Option 01</label>
                        <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
  <input  type="text"
                                className="form-control"
                                value={this.state.op1}
                                onChange={this.onChangeop1}
                                />
  </label>
</div>

<label for="basic-url" class="form-label">Option 01</label>
                        <div class="input-group">
                        <div class="input-group-text">
                        <input class="form-check-input mt-0" 
                        type="radio" 
                        value="" 
                        aria-label="Radio button for following text input"/>
  </div>
  <input type="text" class="form-control" 
  value={this.state.op1}
  onChange={this.onChangeop1}
  aria-label="Text input with radio button"/>
</div>

<br></br>
<label for="basic-url" class="form-label">Option 02</label>
                        <div class="input-group">
                        <div class="input-group-text">
                        <input class="form-check-input mt-0" 
                        type="radio" 
                        value="" 
                        aria-label="Radio button for following text input"/>
  </div>
  <input type="text" class="form-control" 
  value={this.state.op2}
  onChange={this.onChangeop2}
  aria-label="Text input with radio button"/>
</div>

<br></br>
<label for="basic-url" class="form-label">Option 03</label>
                        <div class="input-group">
                        <div class="input-group-text">
                        <input class="form-check-input mt-0" 
                        type="radio" 
                        value="" 
                        aria-label="Radio button for following text input"/>
  </div>
  <input type="text" class="form-control" 
  value={this.state.op3}
  onChange={this.onChangeop3}
  aria-label="Text input with radio button"/>
</div>
                         
                        <br></br>
                        <label for="basic-url" class="form-label">Option 04</label>
                        <div class="input-group">
                        <div class="input-group-text">
                        <input class="form-check-input mt-0" 
                        type="radio" 
                        value="" 
                        aria-label="Radio button for following text input"/>
  </div>
  <input type="text" class="form-control" 
  value={this.state.op4}
  onChange={this.onChangeop4}
  aria-label="Text input with radio button"/>
</div>
                        <br></br>
                         
                        <input type="submit" value="Update Question" className="btn btn-primary" />
                    </div>
                </form>
            </div>
            </div>
            </div>
            </div>
            


        )
    }
}