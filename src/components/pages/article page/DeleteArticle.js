import React from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import swal from 'sweetalert';
const Delete = ({ todo }) => {
    const navigate = useNavigate();
   
  const onDelete = () => {
    axios.delete(`http://localhost:4000/arts/delete/${todo._id}`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    navigate('/article');
    swal({
      icon: "success",
      text: "Successfully deleted",
    });
  }  

  return (
    <div>
              <p>
                <FaTimes
                  className='delIcon'
                  class='rounded float-end'
                  type='button'
                  style={{ color: 'red' }}
                  data-bs-toggle='modal'
                  data-bs-target={`#delete-modal-${todo._id}`}
                />
              </p>
              <div className="modal fade" id={`delete-modal-${todo._id}`} tabIndex="-1" aria-labelledby="delete-modal-label" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Confirm Delete</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"  ></button>
            </div>
            <div className="modal-body">
            <p>Are you sure you want to delete?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary" onClick={onDelete}>Delete</button>
            </div>
          </div>
        </div>
        </div>
              </div>
       
  );
};

export default Delete;

 