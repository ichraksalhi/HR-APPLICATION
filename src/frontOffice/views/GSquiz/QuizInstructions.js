//import React,{Component,Fragment} from 'react';
//import Header from '../../Layouts/Header';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import React, { useState,useEffect, useContext } from "react";
import axios from "axios";
import Header from '../../Layouts/Header';
// const QuizInstructions = (({ history })=>(
//     <>
 
//     <Helmet><title>Test Instructions</title></Helmet>
    
//     <div className="instructions container">
//         <h1>How to pass the test</h1>
//         <p>Ensure you read this guide from start to finish.</p>
//         <ul className="browser-default" id="main-list">
//         <li>the test has a duration of 15 minutes and ends as soon as your time elapses</li>
//         <li>Each test consists of 15 questions.</li>
//         <li>Every question contains 4 options.</li>
//         <li>Select the option which best answers the question by clicking it.</li>
//         </ul>

//         <form className="row g-2" style={{display:'flex',alignContent:'center',alignItems:'center', padding:'3rem',margin:'2rem'}}>
//     <div className="col-auto mb-3">
//       <input type="password" className="form-control" id="inputPassword2" placeholder="Password"/>
//     </div>
//     <div className="col-auto">
//       <button type="submit" className="btn btn-primary mb-3">Confirm identity</button>
//     </div>
//       </form>








//         <span className="left" ><Link className="left-btn" to="/">No take me back</Link></span>
//         <span className="right"><Link className="right-btn" to="/play/quiz">Okay,Let's do this</Link></span>
        
//     </div>
   
//   </>
// );

// export default QuizInstructions;


function QuizInstructions({ history }) {

  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");

  useEffect(() => {
    const jwt = localStorage.getItem('user');
        var user=''
     if(jwt) {
       user = JSON.parse(jwt)
   
    setEmail(user.email)
    //console.log(email)
     }
  });

  const submitHandler = (e) => {
    e.preventDefault();
     axios.post("http://localhost:5000/api/result/takeTest",{email, pin: parseInt(pin) })
      .then((response) => {
        localStorage.setItem(
          "questions",
          JSON.stringify(response.data.questions)
        );
        for (let i = 1; i <= response.data.questions.length; ++i) {
          localStorage.setItem(`ans${i}`, "0");
        }
        localStorage.setItem("takeTest", "true");
        localStorage.setItem("times", 1);
       // forceUpdate();
      history.push("/take-test");    
  //    window.location.reload() 
      })
      .catch((err) => {
        alert(err.response.data.msg);
        setPin("");
      });
  };
  return (
    <>
        <Helmet><title>Test Instructions</title></Helmet>
        <Header/>
    
         <div className="instructions container">
             <h1>How to pass the test</h1>
             <p>Ensure you read this guide from start to finish.</p>
            <ul className="browser-default" id="main-list">
             <li>the test has a duration of 15 minutes and ends as soon as your time elapses</li>
            <li>Each test consists of 15 questions.</li>
            <li>Every question contains 4 options.</li>
            <li>Select the option which best answers the question by clicking it.</li>
            </ul>
             

<div className="container h-100 " >
      <h1>For Candidates</h1>
      <h2>
        If you've got the pin from your recruiter, then fill up this form to
        give the test.
      </h2>
      {/* jumbotron <strong>Warning:</strong> <span>Do not refresh or leave the page!</span> */}

{/* style={{width: '18rem',display:'flex',alignContent:'center',alignItems:'center'}} */}
 <div className="card jumbotron  h-10 justify-content-center align-items-center"  >
      
      <form className="col-3" onSubmit={submitHandler} style={{ padding:'1rem',margin:'1rem'}}>
        <div className="col-auto mb-3">
          <label>Email: </label>
          <input
          className="form-control"
            type="email"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div> 
        <div className="col-auto mb-3">
          <label>Pin: </label>
          <input
          className="form-control"
            type="text"
            name="pin"
            placeholder="Test Pin"
            value={pin}
            required
            onChange={(e) => setPin(e.target.value)}
          />
        </div>
        {/* <button type="button" class="btn btn-info">Info</button> */}
        
        <button type="submit" className="btn btn-info btn-sm">Take the test</button>
        <span className="right" ><Link className="btn btn-info btn-sm " to="/">No take me back</Link></span>
   
      </form>
      </div>
    </div>   
   
            {/* <span className="right"><Link className="right-btn" to="/play/quiz">Okay,Let's do this</Link></span> */}
        
    </div>
    </>
 
  );
}

export default QuizInstructions;
