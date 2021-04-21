import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import logo from "../../assets/images/discLogo.png";
import CarouselPersonalityTest from "./CarouselPersonalityTest";

export default class PersonalityTest extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Personality Test Results</title>
        </Helmet>
        <div className="questionsTest" style={{ color: "black" }}>
          <div align="center">
            <br />
            <img src={logo} className="logoTest" alt="logo" />
          </div>
          <br />
          <h2 style={{ fontWeight: "bold" }}>RESULTS : DISC Test </h2>

          <div className="options-container">
            <h5>
              <h1>
                <strong>Thank you for taking the test!</strong>
              </h1>
              Thank you for taking the test, Your resutlts are : Thank you for
              taking the test, Your resutlts are : Thank you for taking the
              test, Your resutlts are : Thank you for taking the test, Your
              resutlts are : Thank you for taking the test, Your resutlts are :
              Thank you for taking the test, Your resutlts are :
            </h5>
          </div>
          <div className="options-container">
            <CarouselPersonalityTest />
          </div>

          <div className="button-container">
            <button>
              <Link style={{ color: "white" }} to="/Elearning">
                {" "}
                E-learning{" "}
              </Link>
            </button>
            <button>
              <Link style={{ color: "white" }} to="/">
                {" "}
                Quit{" "}
              </Link>
            </button>
          </div>
        </div>
      </>
    );
  }
}
