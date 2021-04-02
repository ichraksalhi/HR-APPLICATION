import React from "react";
import {Link} from 'react-router-dom' 

const Footer = () => {
  return (
    <>
          <footer className="ftco-footer ftco-bg-dark ftco-section">
      <div className="container">
        <div className="row mb-5">
        	<div className="col-md">
             <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Skillhunt Jobboard</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                <li className="ftco-animate"><Link to="#"><span className="icon-twitter"></span></Link></li>
                <li className="ftco-animate"><Link to="#"><span className="icon-facebook"></span></Link></li>
                <li className="ftco-animate"><Link to="#"><span className="icon-instagram"></span></Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Employers</h2>
              <ul className="list-unstyled">
                <li><Link to="#" className="pb-1 d-block">Browse Candidates</Link></li>
                <li><Link to="#" className="pb-1 d-block">Post a Job</Link></li>
                <li><Link to="#" className="pb-1 d-block">Employer Listing</Link></li>
                <li><Link to="#" className="pb-1 d-block">Resume Page</Link></li>
                <li><Link to="#" className="pb-1 d-block">Dashboard</Link></li>
                <li><Link to="#" className="pb-1 d-block">Job Packages</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Candidate</h2>
              <ul className="list-unstyled">
                <li><Link to="#" className="pb-1 d-block">Browse Jobs</Link></li>
                <li><Link to="#" className="pb-1 d-block">Submit Resume</Link></li>
                <li><Link to="#" className="pb-1 d-block">Dashboard</Link></li>
                <li><Link to="#" className="pb-1 d-block">Browse Categories</Link></li>
                <li><Link to="#" className="pb-1 d-block">My Bookmarks</Link></li>
                <li><Link to="#" className="pb-1 d-block">Candidate Listing</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Account</h2>
              <ul className="list-unstyled">
                <li><Link to="#" className="pb-1 d-block">My Account</Link></li>
                <li><Link to="#" className="pb-1 d-block">Sign In</Link></li>
                <li><Link to="#" className="pb-1 d-block">Create Account</Link></li>
                <li><Link to="#" className="pb-1 d-block">Checkout</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
            	<h2 className="ftco-heading-2">Have a Questions?</h2>
            	<div className="block-23 mb-3">
	              <ul>
	                <li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
	                <li><Link to="#"><span className="icon icon-phone"></span><span className="text">+2 392 3929 210</span></Link></li>
	                <li><Link to="#"><span className="icon icon-envelope"></span><span className="text">info@yourdomain.com</span></Link></li>
	              </ul>
	            </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">

          <p>
              Copyright &copy;<script>document.write(new Date().getFullYear());</script> HR APPLY ROOM <i className="icon-heart text-danger" aria-hidden="true"></i>
          </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
