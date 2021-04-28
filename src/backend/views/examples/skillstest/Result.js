import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleResult from "./SingleResult";
//import {useParams} from "react-router-dom";
function Result({ history,props ,match: {params}/*, token */,url}) {

  const  {testId}  = params;
 // console.log(testId)
  const [result, setResult] = useState([]);

  useEffect((props) => {
    axios.post("http://localhost:5000/api/result/listResult", {/* token,*/ testId })
      .then((response) => { 
        //console.log(response)
        setResult(response.data);
      })
      .catch((err) => {
        alert(err);
        history.push("/admin/listetest");
      });
  }, [history, testId  /*,token*/]);

  return (
    <div className="Result">
      <h1>Result</h1>
      {result.length ? (
        result.map((singleResult, index) => (
          <SingleResult
            singleResult={singleResult}
            key={index + 1}
            index={index + 1}
          />
        ))
      ) : (
        <h2>No one has taken the test till now!</h2>
      )}
    </div>
  );
}

export default Result;
