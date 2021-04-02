import React from 'react';
import { Link } from "react-router-dom";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Header from '../Layouts/Header';


const Login = () => {
    return (
      <>
        <Header/>
    <section className="ftco-section contact-section bg-light">
      <div className="container">
        <div className="row block-9">
          <div className="col-md-6 order-md-last d-flex">
            <form action="#" className="bg-white p-5 contact-form">
              <center>
              <h1>Welcome!</h1>
              <h3>To Login</h3>
              </center>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Email"/>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Password"/>
              </div>
              
              <div className="form-group">
                <br></br>
              <Link to="/admin" className="btn btn-outline-info btn-block">Login</Link>
              </div>
              <Link to="/Register"> Do you have an account?</Link>
            </form>
          
          </div>

          <div className="col-md-6 d-flex">
          <img src={require('../assets/images/logpic.jpg').default } style={{height: '367px',width: '532px'}}/> 
            <div id="map" className="bg-white"></div>
          </div>
        </div>
      </div>
    </section>


    
     
</>
    );
};

export default Login;