import React, {Component} from 'react';

export default class AddQuiz extends Component {

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

        console.log(`Quiz submitted:`);
        // console.log(`KT Name: ${this.state.kt_name}`);
        // console.log(`KT Introduction: ${this.state.kt_intro}`);
         
         

        this.setState({
            quiz: '',
            op1: '',
            op2: '',
            op3: '',
            op4: '',
             
        })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
               
                <form onSubmit={this.onSubmit}>
                    <div className='card'> 
                     
                    <div className="form-control">
                     <br></br>
                        <label>Write the question.</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.quiz}
                                required
                                onChange={this.onChangequiz}
                                />
                        <br></br>
                         
                        {/* <label>Option 01</label>
                        <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
  <input  type="text"
                                className="form-control"
                                value={this.state.op1}
                                onChange={this.onChangeop1}
                                />
  </label>
</div> */}

<label for="basic-url" class="form-label">Option 01</label>
                        <div class="input-group">
                        <div class="input-group-text">
                        <input class="form-check-input mt-0"
                        name="flexRadioDefault" id="flexRadioDefault1" 
                        type="radio" 
                        value="" 
                        aria-label="Radio button for following text input"/>
  </div>
  <input type="text" class="form-control" 
  value={this.state.op1}
  onChange={this.onChangeop1}
  for="flexRadioDefault1"
  aria-label="Text input with radio button"/>
</div>

<br></br>
<label for="basic-url" class="form-label">Option 02</label>
                        <div class="input-group">
                        <div class="input-group-text">
                        <input class="form-check-input mt-0"
                        name="flexRadioDefault" id="flexRadioDefault2" 
                        type="radio" 
                        value="" 
                        aria-label="Radio button for following text input"/>
  </div>
  <input type="text" class="form-control" 
  value={this.state.op2}
  onChange={this.onChangeop2}
  for="flexRadioDefault2"
  aria-label="Text input with radio button"/>
</div>

<br></br>
<label for="basic-url" class="form-label">Option 03</label>
                        <div class="input-group">
                        <div class="input-group-text">
                        <input class="form-check-input mt-0"
                        name="flexRadioDefault" id="flexRadioDefault3" 
                        type="radio" 
                        value="" 
                        aria-label="Radio button for following text input"/>
  </div>
  <input type="text" class="form-control" 
  value={this.state.op3}
  onChange={this.onChangeop3}
  for="flexRadioDefault3"
  aria-label="Text input with radio button"/>
</div>
                         
                        <br></br>
                        <label for="basic-url" class="form-label">Option 04</label>
                        <div class="input-group">
                        <div class="input-group-text">
                        <input class="form-check-input mt-0" 
                        name="flexRadioDefault" id="flexRadioDefault4"
                        type="radio" 
                        value="" 
                        aria-label="Radio button for following text input"/>
  </div>
  <input type="text" class="form-control" 
  value={this.state.op4}
  onChange={this.onChangeop4}
  for="flexRadioDefault4"
  aria-label="Text input with radio button"/>
</div>
                        <br></br>
                         
                        <input type="submit" value="Save Question" className="btn btn-primary" />
                        <br></br>
                        <br></br>
                    </div>
                    </div>
                </form>
                <br></br>
            </div>
        )
    }
}

 