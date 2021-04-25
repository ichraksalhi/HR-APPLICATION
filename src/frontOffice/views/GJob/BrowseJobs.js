import React, {useEffect, Fragment} from 'react';
import {Link} from 'react-router-dom' ;
import Header from '../../Layouts/Header';
import { connect } from 'react-redux';
import Spinner from '../../Layouts/Spinner'
import {getJobs} from '../../../actions/job';
import JobDetails from 'backend/views/GJob/JobDetails';
import PropTypes from 'prop-types';
import JobItem from './JobItem';
import Navbar from 'frontOffice/Layouts/Navbar';


const BrowseJobs = ({getJobs, job: {jobs, loading}}) => {
  useEffect(() => {
    getJobs();
  }, [getJobs]);

  return loading ? <Spinner/>  :(
        <Fragment>
        <Navbar/>                 
        <Header/>
        <section className="ftco-section bg-light">
        <div className="container">
            <div className="row">
                <div className="col-lg-9 pr-lg-4">
                    <div className="row">
                      {jobs.map(job => (
                        <JobItem key={job._id} job={job} />
                      ))}
                    </div>
            <div className="row mt-5">
              <div className="col text-center">
                <div className="block-27">
                  <ul>
                    <li><Link to="#">&lt;</Link></li>
                    <li className="active"><span>1</span></li>
                    <li><Link to="#">2</Link></li>
                    <li><Link to="#">3</Link></li>
                    <li><Link to="#">4</Link></li>
                    <li><Link to="#">5</Link></li>
                    <li><Link to="#">&gt;</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
                <div className="col-lg-3 sidebar">
            <div className="sidebar-box bg-white p-4 ftco-animate">
            <div className="col-md-12"><h3>Contract type</h3></div>
            <div className="col-md-12 mb-3 mb-md-0">
              <label for="option-price-1">
                <input type="checkbox" id="option-price-1"/> <span className="text-success"/>CDI<span/>
              </label>
            </div>
            <div className="col-md-12 mb-3 mb-md-0">
              <label for="option-price-2">
                <input type="checkbox" id="option-price-2"/> <span>Full-time</span>
              </label>
            </div>
            <div className="col-md-12 mb-3 mb-md-0">
              <label for="option-price-2">
                <input type="checkbox" id="option-price-2"/> <span>Stage</span>
              </label>
            </div>
            <div className="col-md-12 mb-3 mb-md-0">
              <label for="option-price-2">
                <input type="checkbox" id="option-price-2"/> <span>Freelance </span>
              </label>
            </div>
            <div className="col-md-12 mb-3 mb-md-0">
              <label for="option-price-2">
                <input type="checkbox" id="option-price-2"/> <span>SIVP</span>
              </label>
            </div>
            </div>
            <div className="sidebar-box bg-white p-4 ftco-animate">
              <div className="sidebar-box ftco-animate">
              <div className="categories">
                <h3 className="heading-3">Jobs</h3>
                <li><a href="#">Graphic Designer <span>(12)</span></a></li>
                <li><a href="#">Visual Assistant <span>(22)</span></a></li>
                <li><a href="#">Programing <span>(37)</span></a></li>
                <li><a href="#">Office Admin <span>(42)</span></a></li>
                <li><a href="#">Web Designer <span>(14)</span></a></li>
                <li><a href="#">Language <span>(140)</span></a></li>
              </div>
            </div>
            </div>
            <div className="sidebar-box bg-white p-4 ftco-animate">
              <div className="sidebar-box ftco-animate">
              <h3 className="heading-3">Tag Skills</h3>
              <div className="tagcloud">
                <a href="#" className="tag-cloud-link">Python</a>
                <a href="#" className="tag-cloud-link">JAVA</a>
                <a href="#" className="tag-cloud-link">ReactJS</a>
                <a href="#" className="tag-cloud-link">nodeJS</a>
                <a href="#" className="tag-cloud-link">Symphony</a>
                <a href="#" className="tag-cloud-link">Android</a>
                <a href="#" className="tag-cloud-link">IOS</a>
                <a href="#" className="tag-cloud-link">Angular</a>
              </div>
            </div>
            </div>

          </div>
            </div>
        </div>
    </section>

    </Fragment>
    );
};
BrowseJobs.propTypes ={
  getJobs: PropTypes.func.isRequired,
  job: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  job: state.job
});
export default connect(mapStateToProps, {getJobs})(BrowseJobs);