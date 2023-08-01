import Edit from "./EditFile";
import Delete from "./DeleteFile";
import { Link } from "react-router-dom";
import pdf from './image/pdf.png'; 

const Articles = ({ article }) => {
    return(
        <div>
      <div className='card'>
        <div className='card-body' style={{ backgroundColor: '#DDEDF8',height:"250px",width:"450px" }}>
          <div class='col-lg-12'> 
         
        <h3 style={{ font: '25px', color: '#000000' }}>
              {article.articleName}
            </h3>
             <div>
              <Edit key={article._id} article={article} />
             </div>
            <p>{article.articleDesc} </p>
            <div> 
              <Delete key={article._id} article={article} />
             </div>
            </div>
             
            <p>
  <a href={article.articleUrl} target="_blank" rel="noopener noreferrer">
    <img src={pdf} height="20px" width="20px" alt="pdf" />
  </a>
</p>

            </div>
            </div>
            </div>
    )
}
export default Articles;