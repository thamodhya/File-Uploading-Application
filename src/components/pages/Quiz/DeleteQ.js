import { Component } from "react"
import axios from 'axios'
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import EditQ from "./EditQ";
import Del from "../Del";
//import { Link } from "react-router-dom";
export default class DeleteTask extends Component{
constructor(props) {
  super(props)
  this.deleteQuestion = this.deleteQuestion.bind(this)
}

deleteQuestion() {
  axios
    .delete(
      'http://localhost:4000/chapter/delete-question/' + this.props.todo._id,
    )
    .then((res) => {
      console.log('Unit successfully deleted!')
    })
    .catch((error) => {
      console.log(error)
    })
}


render() {
  return(
    <div>
        <div className='card'> 
            <div className="card-body" style={{backgroundColor:"#DDEDF8"}}>
                <div class="col-lg-12">
                <h3 style={{ font: "25px" , color: "#000000" }}>{this.props.todo.quiz}</h3>
                 
                </div>

                <div class="col-lg-12">    
                <p>{this.props.todo.op1} </p>
                </div> 
                <div class="col-lg-12">    
                <p>{this.props.todo.op2} </p>
                </div> 
                <div class="col-lg-12">    
                <p>{this.props.todo.op3} </p>
                {/* <p><Link to={"/edit/"+this.props.todo._id}><FaPencilAlt className="editIcon" type="button" class="rounded float-end"/></Link></p> */}
                <div> 
                <p><FaPencilAlt className="editIcon" type="button" class="rounded float-end" style={{color:"blue"}} data-bs-toggle="modal" data-bs-target="#editq"/></p>
                 <EditQ/> 
                </div>
                </div> 

                <div class="col-lg-12">    
                <p>{this.props.todo.op4} </p>
                <div> 
                <p><FaTimes type="button" className="delIcon" class="rounded float-end" style={{color:"red"}} data-bs-toggle="modal" data-bs-target="#del"/></p>
    <Del/>
                 
                {/* <div class="modal fade" id="del" tabIndex="-1" aria-labelledby="delLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="delLabel">Confirm</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Are you sure you want to delete?</p>
      </div>
      <div class="modal-footer">
      <button type="button" class="btn btn-primary" onClick={this.deleteStudent}>Delete</button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
         
      </div>
    </div>
  </div>
</div> */}


                </div>
                </div>
    </div>
        </div>
        </div>
  )
}
}