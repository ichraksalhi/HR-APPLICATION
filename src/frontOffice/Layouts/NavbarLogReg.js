import React from "react";
import {Link} from 'react-router-dom';

const NavbarLogReg = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container-fluid px-md-4 ">
           <img src={
                          require("./HRlogo.png").default 
                        } alt="logo" style={{width : '170px'}}/>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu"></span> Menu
          </button>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
                
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarLogReg;