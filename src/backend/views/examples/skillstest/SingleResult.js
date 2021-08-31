import React from "react";

function SingleResult({ singleResult, index }) {
  const[marks,setMarks]=([]);

  const sortByDate=()=>{
    if (singleResult.Result){
      
    }
  }




  
  console.log(singleResult.marks);
  return (
    <>
    <tr>
    <th scope="row">{index}: </th>
      <td>{singleResult.email}</td>
      <td>{singleResult.marks}</td>
    </tr>
    {/* <div className="Single-Result">
      <h2><span>{index}: </span></h2>
      <div className="Result-Details">
        // <h2><span>Name:- </span>{singleResult.name}</h2> 
        <h2><span>Email:- </span>{singleResult.email}</h2>
        <h2><span>Marks:- </span>{singleResult.marks}</h2>
      </div> */}
    </>
  );
}

export default SingleResult;
