import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import * as Yup from 'yup';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';
import { v4 } from 'uuid';
import './Css/Send.css'

function Upload() {
     
    const [fileUpload, setfileUpload] = useState(null);
    const [uploading, setUploading] = useState(false); // New state for tracking upload status
  
    const validationSchema = Yup.object().shape({
      fileName: Yup.string().required('file name is required'),
      fileDesc: Yup.string().required('Description is required'),
      File: Yup.mixed()
        .required('File is required')
        .test(
          'fileFormat',
           
          (value) =>
            value &&
            ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(
              value.type
            )
        ),
    });
  
    const [fileName, setfileName] = useState('');
    const [fileDesc, setfileDesc] = useState('');
    const [errors, setErrors] = useState({});
  
    const onChangefileName = (e) => {
      setfileName(e.target.value);
    };
  
    const onChangefileIntro = (e) => {
      setfileDesc(e.target.value);
    };
  
    async function onSubmit(e) {
      e.preventDefault();
      try {
        await validationSchema.validate(
          { fileName: fileName, fileDesc: fileDesc, File: fileUpload },
          { abortEarly: false }
        );
  
        console.log(`Form submitted:`);
        console.log(`file Name: ${fileName}`);
        console.log(`file Introduction: ${fileDesc}`);
  
        var newfile = {
           
          fileName: fileName,
          fileDesc: fileDesc,
        };
  
        if (fileUpload == null) return;

      const fileExt = fileUpload.name.split('.').pop(); // Extract file extension
      const fileNameWithExt = `${fileName}.${fileExt}`; // Append the extension to the file name

      const fileRef = ref(storage, `Files/${fileNameWithExt + v4()}`);
      setUploading(true); 
  
        uploadBytes(fileRef, fileUpload).then((file) => {
          getDownloadURL(file.ref).then((url) => {
            console.log(url);
            newfile = { ...newfile, fileUrl: url };
            axios.post('http://localhost:1337/files/add', newfile).then((res) => {
              console.log(res.data);
              swal({
                icon: 'success',
                text: 'Successfully created',
              }).then(() => {
                window.location.reload(); // Refresh the page
              });
              setfileName('');
              setfileDesc('');
              setErrors({});
            });
          });
        }).finally(() => {
          setUploading(false); // Set the uploading state to false once the upload is complete
        });
      } catch (err) {
        console.error(err);
        const validationErrors = {};
        err.inner.forEach((e) => {
          validationErrors[e.path] = e.message;
        });
        setErrors(validationErrors);
        swal({
          icon: 'warning',
          text: 'Error',
        });
      }
    }

        return (
            <div style={{backgroundColor: "#fefefe"}}> 
            <div className="send">
                <div className="imgPanel">
                    <img
                        src={require('./image/send-file.jpg')}
                        width={'600px'}
                        height={'100%'}
                        alt="sending a file"
                        title="sending a file"
                        className="sendImage"
                    />
                </div>
                <div className='filePicker'> 
                <div className='filePicker-content'> 
                <div className="card">
                    <div className="card-body" style={{height:"300px",width:"450px"}}>
                        <img
                            src={require('./image/add-file.png')}
                            width="100px"
                            alt="add a file"
                            title="add a file"
                             
                        />
                        <h5>Add Files</h5>
                         
                     
                 
                 <div >
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>File</label>
          <input
            type="text"
            className={`form-control ${errors.fileName && 'is-invalid'}`}
            value={fileName}
            onChange={onChangefileName}
          />
          {errors.fileName && <div className="invalid-feedback">{errors.fileName}</div>}
          <br></br>
          <label>Introduction </label>
          <input
            type="text"
            className={`form-control ${errors.fileDesc && 'is-invalid'}`}
            value={fileDesc}
            onChange={onChangefileIntro}
          />
          {errors.fileDesc && <div className="invalid-feedback">{errors.fileDesc}</div>}
          <br></br>
          <input
            type="file"
             
            className={`form-control ${errors.fileFile && 'is-invalid'}`}
            aria-label="file example"
            onChange={(event) => {
              setfileUpload(event.target.files[0]);
            }}
          />
          {errors.fileFile && <div className="invalid-feedback">{errors.fileFile}</div>}
          {uploading && <p className="upload-status" style={{color:"#013220"}}>Uploading file...</p>}  
           
          <br></br>
          <input type="submit" value="Save File" className="btn btn-primary" disabled={uploading} /> {/* Disable the button while uploading */}
        </div>
      </form>
    </div>
    </div>
            </div>
            </div>
            </div>
            </div>
            </div>
        )
     
}

export default Upload
