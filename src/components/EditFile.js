import { FaPencilAlt } from 'react-icons/fa';
import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
 
import * as Yup from "yup";

import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject
} from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";
 

const Edit = ({ file }) => {
   
  const [updatedFile, setUpdatedFile] = useState(null);
  const [modal, setModal] = useState(null);
  const [updatedfile, setUpdatedfile] = useState(file);
  const [errors, setErrors] = useState({});
  const [uploading, setUploading] = useState(false); // New state for tracking upload status

  const validationSchema = Yup.object().shape({
    fileName: Yup.string().required('file name is required'),
    fileDesc: Yup.string().required('Description is required'),
  });

  const onChange = (e) => {
    if (e.target.type === 'file') {
      setUpdatedFile(e.target.files[0]);
    } else {
      setUpdatedfile({
        ...updatedfile,
        [e.target.name]: e.target.value
      });
    }
  };

  const onUpdate = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(updatedfile, { abortEarly: false });

      if (updatedFile) {
        // Delete the current file from Firebase Storage
        const fileRef = ref(storage, file.fileUrl);
        deleteObject(fileRef)
          .then(() => {
            // Upload the new file to Firebase Storage
            const newfileRef = ref(storage, `Files/${updatedFile.name + v4()}`);
            setUploading(true); // Set the uploading state to true
            uploadBytes(newfileRef, updatedFile)
              .then((snapshot) => {
                // Get the download URL of the new file
                getDownloadURL(snapshot.ref)
                  .then((url) => {
                    // Update the file with the new file's URL
                    const updatedArticle = {
                      ...updatedfile,
                      fileUrl: url
                    };
                    updateArticle(updatedArticle);
                  });
              })
              .catch((error) => {
                console.log('Error uploading new file:', error);
                swal({
                  icon: 'warning',
                  text: 'Error',
                });
              })
              .finally(() => {
                setUploading(false); // Set the uploading state to false once the upload is complete
              });
          })
          .catch((error) => {
            console.log('Error deleting current file:', error);
            swal({
              icon: 'warning',
              text: 'Error',
            });
          });
      } else {
        // No file update, only update the file details
        updateArticle(updatedfile);
      }
    } catch (err) {
      console.error(err);
      const validationErrors = {};
      err.inner.forEach((e) => {
        validationErrors[e.path] = e.message;
      });
      setErrors(validationErrors);
      swal({
        icon: "warning",
        text: "Error",
      });
    }
  };

  const updateArticle = (updatedfile) => {
    axios.post(`http://localhost:1337/files/update/${file._id}`, updatedfile)
      .then(() => {
        setModal(null);
        swal({
          icon: 'success',
          text: 'Successfully updated',
        }).then(() => {
          window.location.reload(); // Refresh the page
        });
      })
      .catch((err) => {
        console.log(err);
        swal({
          icon: 'warning',
          text: 'Error',
        });
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
          data-bs-target={`#edit-modal-${file._id}`}
        />
      </p>
      <div className="modal fade" id={`edit-modal-${file._id}`} tabIndex="-1" aria-labelledby="edit-modal-label" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="edit-modal-label">Edit</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={onUpdate}>
                <div className="mb-3">
                  <label htmlFor="fileName" className="form-label">File Name</label>
                  <input
                    type="text"
                    className={`form-control ${errors.fileName && 'is-invalid'}`}
                    id="fileName"
                    name="fileName"
                    value={updatedfile.fileName}
                    onChange={onChange}
                  />
                  {errors.fileName && <div className="invalid-feedback">{errors.fileName}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="fileDesc" className="form-label">File Introduction</label>
                  <input
                    type="text"
                    className={`form-control ${errors.articleDesc && 'is-invalid'}`}
                    id="fileDesc"
                    name="fileDesc"
                    value={updatedfile.fileDesc}
                    onChange={onChange}
                  />
                  {errors.fileDesc && <div className="invalid-feedback">{errors.fileDesc}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="Attachment" className="form-label">File Attachment</label>
                   
                </div>
                <div className="mb-3">
                  <p>If you want to change the file, add the new file here.</p>
                  <input type="file" className="form-control" aria-label="file example" onChange={onChange} />
                   
                </div>
                <div className="modal-footer">
                  <input type="submit" value={uploading ? 'Uploading...' : 'Update'} className="btn btn-primary" disabled={uploading} />
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