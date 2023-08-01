import Edit from "./EditFile";
import Delete from "./DeleteFile";
import files from "./image/images.png"

const Files = ({ file }) => {
    return(
        <div>
      <div className='card' style={{ backgroundColor: '#DDEDF8' }}>
        <div className='card-body' style={{ backgroundColor: '#DDEDF8',height:"250px",width:"450px" }}>
          <div class='col-lg-12'> 
         
        <h3 style={{ font: '25px', color: '#000000' }}>
              {file.fileName}
            </h3>
             <div>
              <Edit key={file._id} file={file} />
             </div>
            <p>{file.fileDesc} </p>
            <div> 
              <Delete key={file._id} file={file} />
             </div>
            </div>
             
            <p>
  <a href={file.fileUrl} target="_blank" rel="noopener noreferrer">
    <img src={files} height="20px" width="20px" alt="pdf" />
  </a>
</p>

            </div>
            </div>
            </div>
    )
}
export default Files;