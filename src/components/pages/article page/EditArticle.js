import { FaPencilAlt } from 'react-icons/fa';
import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
const Edit = ({ todo }) => {
     
  const [modal, setModal] = useState(null);
   
  const [updatedTodo, setUpdatedTodo] = useState(todo);

  const onChange = (e) => {
    console.log('onChange', e.target.name, e.target.value);
    setUpdatedTodo({
      ...updatedTodo,
      [e.target.name]: e.target.value
    });
  };

  const onUpdate = (e) => {
    e.preventDefault();
    console.log('onUpdate', updatedTodo);
    axios.post(`http://localhost:4000/arts/update/${todo._id}`, updatedTodo)
      .then(() => {
        setModal(null);
      })
      .catch((err) => {
        console.log(err);
      });
      swal({
        icon: "success",
        text: "Successfully updated",
      });
  };
   
  return (
    <div>
      <p>
        <FaPencilAlt
          className='editIcon'
          type='button'
          class='rounded float-end'
          style={{ color: 'blue' }}
          data-bs-toggle='modal'
          data-bs-target={`#edit-modal-${todo._id}`}
        />
      </p>
      <div className="modal fade" id={`edit-modal-${todo._id}`} tabIndex="-1" aria-labelledby="edit-modal-label" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="edit-modal-label">Edit</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={onUpdate}>
                <div className="mb-3">
                  <label htmlFor="art_name" className="form-label">Article Name</label>
                  <input type="text" className="form-control" id="art_name" name="art_name" value={updatedTodo.art_name} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="art_intro" className="form-label">Article Introduction</label>
                  <input type="text" className="form-control" id="art_intro" name="art_intro" value={updatedTodo.art_intro} onChange={onChange} />
                </div>
                <div class="modal-footer">
                  <input type="submit" value="Update Unit" className="btn btn-primary" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
