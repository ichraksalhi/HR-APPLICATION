import React from 'react';
import { Link } from "react-router-dom";
import person1 from '../../frontOffice/assets/images/person_1.jpg';
import person2 from '../../frontOffice/assets/images/person_2.jpg';
import person3 from '../../frontOffice/assets/images/person_3.jpg';
import person4 from '../../frontOffice/assets/images/person_4.jpg';
import person5 from '../../frontOffice/assets/images/person_5.jpg';
import person6 from '../../frontOffice/assets/images/person_6.jpg';
import image1 from '../../frontOffice/assets/images/image_1.jpg';
import image2 from '../../frontOffice/assets/images/image_2.jpg';
import image3 from '../../frontOffice/assets/images/image_3.jpg';
import image4 from '../../frontOffice/assets/images/image_4.jpg';
import bg from '../../frontOffice/assets/images/bg_1.jpg';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Header from '../Layouts/Header';


const Register = () => {
    return (
      <>
        <Header/>
    <section className="ftco-section contact-section bg-light">
      <div className="container">
        
        <div className="row block-9">
          <div className="col-md-6 order-md-last d-flex">
            <form action="#" className="bg-white p-5 contact-form">
              
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Name"/>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Email"/>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Avatar"/>
              </div>
            
              
              <div className="form-group">
                <input type="submit" value=" Register" className="btn btn-primary py-3 px-5"/>
              </div>
            </form>
          
          </div>

          <div className="col-md-6 d-flex">
          <img src={require('../assets/images/signupic.jpg').default } style={{height: '367px',width: '1000px'}}/> 
            <div id="map" className="bg-white"></div>
          </div>
        </div>
      </div>
    </section>


    
     
</>
    );
};

export default Register;