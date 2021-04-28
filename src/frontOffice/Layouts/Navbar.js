import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
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
              <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
              <li className="nav-item "><Link to="/Reclamation" className="nav-link">Reclamation</Link></li>
              <li className="nav-item"><Link to="/Elearning" className="nav-link">E-Learning</Link></li>
              <li className="nav-item"><Link to="/BrowseJob" className="nav-link">Browse Jobs</Link></li>
              <li className="nav-item"><Link to="/Candidates" className="nav-link">Canditates</Link></li>
              <li className="nav-item"><Link to="/calendar" className="nav-link">calendar</Link></li>
              <li className="nav-item cta mr-md-1"><Link to="/Login" className="nav-link">COMPANY SPACE</Link></li>
              <li className="nav-item cta cta-colored"><Link to="/Login" className="nav-link">CANDIDATE SPACE</Link></li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;