import React from 'react'
import { useState } from 'react';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom"; 

 

import AddTask from './AddTask';
import Task from './Task';
import Header from '../Header';
import EditTask from './EditTask';
import Del from '../Del';

function Chapter() {
    const [showAddTask, setShowAddTask] = useState(false); // To reveal add task form

  return (
    <div>
        <div className="container">

{/* App Header that has open and App Name */}
<Header showForm={() => setShowAddTask(!showAddTask)}  changeTextAndColor={showAddTask} />

{/* Revealing of Add Task Form */}
{showAddTask && <AddTask   />}
 <br></br>
<div className='card'> 
<div className="card-body" style={{backgroundColor:"#DDEDF8"}}>
    <div class="col-lg-12">   
    <h3 style={{ font: "25px" , color: "#000000" }}><Link to={"/Unit"} style={{textDecoration:"none",color: "#000000"}}>Class Diagrams</Link></h3>
    <div> 
    <FaPencilAlt type="button" data-bs-toggle="modal" data-bs-target="#editunit" className="editIcon" class="rounded float-end" style={{color:"blue",justifyContent:"end"}}/>
    <EditTask/> 
    </div> 
    </div>

    <div class="col-lg-12">   
    <p>Introduction of Class Diagrams</p>
    <div> 
    <p><FaTimes className="delIcon" type="button" data-bs-toggle="modal" data-bs-target="#del" class="rounded float-end" style={{color:"red"}}/></p>
    <Del/>
    </div>
    </div>
     
</div>
 
</div>
<Task ></Task> 
</div> 

</div>
     
  )
}

export default Chapter

 