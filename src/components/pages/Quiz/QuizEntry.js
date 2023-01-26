import React from "react";
import { Link } from "react-router-dom";
import { FaPencilAlt } from 'react-icons/fa';
import NavBar from "../NavBar";
import EditQuizEntry from './EditQuizEntry';

const QuizEntry = () => {
    return (
        <React.Fragment>
            <div style={{backgroundColor: "#ffffff"}}> 
             <NavBar></NavBar>
             <div className="container p-4"> 
              <div className="card" style={{ backgroundColor: "#70B9E6" }}>
              <div className="card-body">
                <h1 style={{ font: "25px" , color: "#ffffff" }}>NETS: UML Diagrams</h1>
              </div>
              </div>
              </div>
            <div className="container p-4">
                <div className="card">
                    <div className="card-header">
                    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#f7f7f7" }}>
                     
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-5 mb-lg-0">
                        <li className="nav-item"  style={{fontWeight:"bold"}}>
                             
                            <Link to="/" className="nav-link active">Units</Link>
                        </li>
                        <li className="nav-item"  style={{fontWeight:"bold"}}>
                             
                            <Link to="/article" className="nav-link">Articles</Link>
                        </li>
                        <li className="nav-item"  style={{fontWeight:"bold"}}>
                            
                            <Link to="/" className="nav-link">Discussion Forums</Link>
                        </li>
    
                    </ul>
                    
                </div>
                    </nav>
                    </div>
                    <div className="card-body" style={{backgroundColor:"#DDEDF8"}}>
                    <br></br>
                  <br></br>
                    <div class="col-lg-12">
                    <h3 style={{ font: "25px" , color: "#000000" }}>Quiz 01</h3>
                    <div> 
                    <FaPencilAlt type="button" data-bs-toggle="modal" data-bs-target="#editentry" className="editIcon" class="rounded float-end" style={{color:"blue",justifyContent:"end"}}/>
                    <EditQuizEntry/> 
                    </div> 
                    </div>

                    <p>Time Allocated: 1 hour</p>
                     
                     
                    <div class="d-grid gap-2 col-6 mx-auto">                    
                    {/* <button class="btn btn-secondary" type="button">View Quiz</button> */}
                    <Link to='/quiz'><button type="button" class="btn btn-secondary form-control" >Quiz</button></Link>
                    </div>
                    <br></br>
                  <br></br>
                    </div>
                    <div>
     
                     
         
                    </div>
                    </div>
                     
                </div>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  
                   
                  
                </div>
      
        </React.Fragment>
    );
}
export default QuizEntry;

 