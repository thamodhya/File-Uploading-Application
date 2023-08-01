import Files from './Files'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FileList = () => {
  const [files, setfiles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1337/files/')
      .then(response => {
        setfiles(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []); 

  return (
    <div>
            <div> 
          {files.map(file => {
            return (
              <Files key={file._id} file={file} />
            )
          })}
          </div>       
          </div>
         
    
  );
}

export default FileList;