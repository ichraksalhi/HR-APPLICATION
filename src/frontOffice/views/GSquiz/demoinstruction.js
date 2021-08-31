import React,{Component,Fragment} from 'react';
import Header from '../../Layouts/Header';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';

const QuizInstructions = ()=>(
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
        <span className="left" ><Link className="left-btn" style={{marginTop:'-0.05rem'}} to="/">Quit</Link></span>
        <span className="right"><Link className="right-btn" to="/demo/quiz">Okay,Let's do this</Link></span>
     
    </div>
   
  </>
);

export default QuizInstructions;
