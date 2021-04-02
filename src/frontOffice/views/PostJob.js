import React from 'react';
import { Link } from "react-router-dom";
import Header from '../Layouts/Header';

const PostJob = (props) => {
    return (
        <>
        <Header/>
        <section className="ftco-section bg-light">
  <div className="container">
    <div className="row">
   
      <div className="col-md-12 col-lg-8 mb-5">
      
       <form action="#" className="p-5 bg-white">
          
          <div className="row form-group">
            <div className="col-md-12 mb-3 mb-md-0">
              <label className="font-weight-bold" for="fullname">Job Title</label>
              <input type="text" id="fullname" className="form-control" placeholder="eg. Professional UI/UX Designer"/>
            </div>
          </div>

          <div className="row form-group mb-5">
            <div className="col-md-12 mb-3 mb-md-0">
              <label className="font-weight-bold" for="fullname">Company Name</label>
              <input type="text" id="fullname" className="form-control" placeholder="eg. Focus, Actia,.."/>
            </div>
          </div>


          <div className="row form-group">
            <div className="col-md-12"><h3>Job Type</h3></div>
            <div className="col-md-12 mb-3 mb-md-0">
              <label for="option-job-type-1">
                <input type="radio" id="option-job-type-1" name="job-type"/> Full Time
              </label>
            </div>
            <div className="col-md-12 mb-3 mb-md-0">
              <label for="option-job-type-2">
                <input type="radio" id="option-job-type-2" name="job-type"/> Part Time
              </label>
            </div>

            <div className="col-md-12 mb-3 mb-md-0">
              <label for="option-job-type-3">
                <input type="radio" id="option-job-type-3" name="job-type"/> Freelance
               </label>
            </div>
            <div className="col-md-12 mb-3 mb-md-0">
              <label for="option-job-type-4">
                <input type="radio" id="option-job-type-4" name="job-type"/> Internship
              </label>
            </div>
            <div className="col-md-12 mb-3 mb-md-0">
              <label for="option-job-type-4">
                <input type="radio" id="option-job-type-4" name="job-type"/> Termporary
              </label>
            </div>

          </div>

          <div className="row form-group mb-4">
            <div className="col-md-12"><h3>Location</h3></div>
            <div className="col-md-12 mb-3 mb-md-0">
              <input type="text" className="form-control" placeholder="Western City, UK"/>
            </div>
          </div>

          <div className="row form-group">
            <div className="col-md-12"><h3>Job Description</h3></div>
            <div className="col-md-12 mb-3 mb-md-0">
              <textarea name="" className="form-control" id="" cols="30" rows="5"></textarea>
            </div>
          </div>

          <div className="row form-group">
          <div className="col-md-12"><h3>Languages</h3></div>
            <div className="col-md-12 mb-3 mb-md-0">
              <label for="option-price-1">
                <input type="checkbox" id="option-price-1"/> <span className="text-success"/>English<span/>
              </label>
            </div>
            <div className="col-md-12 mb-3 mb-md-0">
              <label for="option-price-2">
                <input type="checkbox" id="option-price-2"/> <span>Frensh</span>
              </label>
            </div>
            <div className="col-md-12 mb-3 mb-md-0">
              <label for="option-price-2">
                <input type="checkbox" id="option-price-2"/> <span>Italian</span>
              </label>
            </div>
            <div className="col-md-12 mb-3 mb-md-0">
              <label for="option-price-2">
                <input type="checkbox" id="option-price-2"/> <span>Spanish </span>
              </label>
            </div>
            <div className="col-md-12 mb-3 mb-md-0">
              <label for="option-price-2">
                <input type="checkbox" id="option-price-2"/> <span>German</span>
              </label>
            </div>
          </div>
          
          <div className="row form-group mb-5">
            <div className="col-md-12 mb-3 mb-md-0">
              <label className="font-weight-bold" for="fullname">Study Level</label>
              <input type="text" id="studylevel" className="form-control" placeholder="eg. bac+5, bac+3"/>
            </div>
          </div>

          <div className="row form-group">
            <div className="col-md-12 mb-3 mb-md-0">
              <label className="font-weight-bold" for="salary">Salary</label>
              <input type="number" id="salary" className="form-control" placeholder="eg. 1500dt, 2000dt"/>
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-12 mb-3 mb-md-0">
              <label className="font-weight-bold" for="position">Available Position Number</label>
              <input type="number" id="PositionNumber" className="form-control" placeholder="eg. 1 available job"/>
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-12 mb-3 mb-md-0">
              <label className="font-weight-bold" for="experience">Experience</label>
              <input type="number" id="experience" className="form-control" placeholder="eg. 3 years"/>
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-12">
                <br/>
              <button type="submit" class="btn btn-primary btn-block">POST</button>
            </div>
          </div>


        </form>
      </div>

      <div className="col-lg-4">
        <div className="p-4 mb-3 bg-white">
          <h3 className="h5 text-black mb-3">Contact Info</h3>
          <p className="mb-0 font-weight-bold">Location</p>
          <p className="mb-4">203 Fake St. Mountain View, San Francisco, California, USA</p>

          <p className="mb-0 font-weight-bold">Phone</p>
          <p className="mb-4">
            <input type="number" id="phone" className="form-control" placeholder="+216 50831029"/>
          </p>

          <p className="mb-0 font-weight-bold">Email Address</p>
          <p className="mb-0">
            <input type="email" id="email" className="form-control" placeholder="eg. sheDev.IT@gmail.com"/>
          </p>
        </div>
      </div>
      
    
    </div>
  </div>
</section>
  </>       
    );
};

export default PostJob;