import React, { Component, Fragment } from "react";
import Header from "../../Layouts/Header";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const TestInstructions = () => (
  <>
    <Helmet>
      <title>Personality Test Instructions</title>
    </Helmet>
    <div className="instructions container">
      <h1>How to take the test</h1>
      <p>Ensure you read this guide from start to finish.</p>
      <ul className="browser-default" id="main-list">
        <li>
          the test has a duration of 20 minutes and ends as soon as your time
          elapses
        </li>
        <li>Each test consists of 80 questions.</li>
        <li>Every question contains 4 options.</li>
        <li>
          Select the option which best answers the question by clicking it.
        </li>
      </ul>
      <h1>What is the DISC Personality Test ?</h1>
      <p>
        DISC assessment test is a survey that can help people understand their
        personality styles and behavioral trends.
        <p>
          It is a tool originally based on the 1928 DISC emotional and
          behavioural theory of psychologist William Moulton Marston, which is
          centred on four personality traits: Dominance, Inducement, Submission,
          and Compliance.
        </p>
        By taking it you will allow your chances to get hired.
      </p>

      <span className="left">
        <Link className="left-btn" to="/Elearning">
          No take me back
        </Link>
      </span>
      <span className="right">
        <Link className="right-btn" to="/personalityTest/takeTest">
          Okay,Let's do this
        </Link>
      </span>
    </div>
  </>
);

export default TestInstructions;
