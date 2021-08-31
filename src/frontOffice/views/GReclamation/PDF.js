import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const PDF = (props) => {
  return (
    <> 
      <div className="Post" ref={ref}>
      
        <h1>{props.object}</h1>
        <img src={props.lastname} alt={props.etat} />
        <p>{props.description}</p>
       
      </div>
      <Pdf targetRef={ref} filename="reclamtion.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
      </Pdf>
    </>
  );
}

export default PDF; 