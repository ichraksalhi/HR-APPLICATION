import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import bg from '../../frontOffice/assets/images/bg_1.jpg';
export class Header extends Component {  
    render() {  
        return (
    <div className="hero-wrap hero-wrap-2"  style={{ backgroundImage: `url(${bg})`}}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text align-items-end justify-content-start">
          <div className="col-md-12 ftco-animate text-center mb-5">
          	<p className="breadcrumbs mb-0"><span className="mr-3"><Link to="index.html">Home <i className="ion-ios-arrow-forward"></i></Link></span> <span className="mr-3"><Link to="blog.html">Blog <i className="ion-ios-arrow-forward"></i></Link></span> <span>Blog Single</span></p>
            <h1 className="mb-3 bread">Header name</h1>
          </div>
        </div>
      </div>
    </div>
  );
}};
export default Header ;
