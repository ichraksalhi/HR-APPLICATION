import React from 'react'

 function Pagination({questionPerPage,totalQuestion,paginate}) {
     const pageNumbers=[];
     for(let i=1;i<=Math.ceil(totalQuestion/questionPerPage);i++)
     pageNumbers.push(i);
     return (
        <div>
            <ul className="pagination">
                {pageNumbers.map(number=>(
                    <li key={number} className="page-item">
                        <a onClick={()=>paginate(number)} className="page-link">
                            {number}
                        </a>
                    </li>
             
               
               ))}
            </ul>
            
        </div>
    )
}
export default Pagination;