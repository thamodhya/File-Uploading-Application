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

            <div class="modal fade" id="editkt" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">Content</h1>
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
                     
                        <label>Introduction </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.unit_intro}
                                onChange={this.onChangeunitintro}
                                />
                    
                    <br></br>
                     
                    <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupFile01">Update</label>
                    <input type="file" class="form-control" id="inputGroupFile01"/>
                    </div>
                    <br></br>
                     
                    <div class="modal-footer">
                        <input type="submit" value="Update KT Session" className="btn btn-primary" />
                    </div>
                </form>
            </div>
            </div>
            </div>
            </div>
            


        )
    }
}














// import React, {Component} from 'react';
// //import axios from 'axios';
 
// // import { useParams } from "react-router-dom";
// export default class EditTask extends Component {
     
//     constructor(props) {
//         super(props);

//         this.onChangektname = this.onChangektname.bind(this);
//         this.onChangektintro = this.onChangektintro.bind(this);
         
//         this.onSubmit = this.onSubmit.bind(this);

//         this.state = {
//             kt_name: '',
//             kt_intro: '',
             
//         }
//     }

//     // componentDidMount() {
         
//     //     axios.get('http://localhost:4000/chapter/'+this.props.match.params.id)
//     //         .then(response => {
//     //             this.setState({
//     //                 kt_name: response.data.kt_name,
//     //                 kt_intro: response.data.kt_intro,
                     
//     //             })
//     //         })
//     //         .catch(function(error) {
//     //             console.log(error)
//     //         })
//     // }

//     onChangeunitname(e) {
//         this.setState({
//             kt_name: e.target.value
//         });
//     }

//     onChangeunitintro(e) {
//         this.setState({
//             kt_intro: e.target.value
//         });
//     }

     

//     onSubmit(e) {
//         e.preventDefault();
//         // const obj = {
//         //     kt_name: this.state.kt_name,
//         //     kt_intro: this.state.kt_intro,
             
//         // };
//         // axios.post('http://localhost:4000/chapter/update/'+this.props.match.params.id, obj)
//         //     .then(res => console.log(res.data));

//         // this.props.history.push('/');
//     }

//     render() {
//         return (
//             <div class="modal fade" id="editkt" tabindex="-1" aria-labelledby="ktLabel" aria-hidden="true">
//             <div class="modal-dialog">
//               <div class="modal-content">
//                 <div class="modal-header">
//                 <h1 class="modal-title fs-5" id="ktLabel">Chapter Content</h1>
//                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                  </div>
//                  <div class="modal-body"> 

//                 <form onSubmit={this.onSubmit}>
//                     <div className="form-control">
//                         <label>KT Session </label>
//                         <input  type="text"
//                                 className="form-control"
//                                 value={this.state.kt_name}
//                                 onChange={this.onChangektname}
//                                 />
//                     </div>
//                     <div className="form-control">
//                         <label>Introduction </label>
//                         <input  type="text"
//                                 className="form-control"
//                                 value={this.state.kt_intro}
//                                 onChange={this.onChangektintro}
//                                 />
//                     </div>
                     
//                     <div className="form-control">
//                         <input type="submit" value="update KT Session" className="btn btn-primary" />
//                     </div>
//                 </form>
//             </div>
//             </div>
//             </div>
//             </div>
//         )
//     }
// }