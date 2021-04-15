import React, {Fragment} from 'react';
import {Link} from 'react-router-dom' ;
import Moment from 'react-moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MapJob from './MapJob';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
const JobItemDetails = ({
    job: { _id, nbrApplied, title, location, description, salary, studyLevel, experience, contractType, company, user, likes, comments, requirements, createdAt, skills  }
}) => {
    return (
        <section className="ftco-section bg-light">
        <div className="container">
            <div className="row">
                <div className="col-lg-9 pr-lg-4">
                    <div className="row">
                        <div className="col-md-12 ftco-animate">
                        <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                          <div className="">
                          <div className="job-post-item-header align-items-center">
                            
                              <div className="mr-3 text-black d-md-flex">            
                                  <h2>{title}</h2> 
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                  <Link to="" className="btn btn-outline-primary" >Apply Job</Link>   
                                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                                  <p style={{backgroundColor: "#f7f3e9"}}>{nbrApplied} candidates applyed</p>                              
                              </div>
                        <span className="subadge">{company}</span>
                        <div className="tagcloud">
                            <a href="#" className="tag-cloud-link">.Net</a>
                            <a href="#" className="tag-cloud-link">SQL</a>
                            <a href="#" className="tag-cloud-link">Cloud</a>
                            <a href="#" className="tag-cloud-link">C#</a>
                        </div>
                    
                          </div>
                    <hr/>
                            <div className="job-post-item-body d-block d-md-flex">
                                <div className="mr-3"><span className="icon-calendar"></span> <Link to="#"><Moment format="YYYY/MM/DD">{createdAt}</Moment></Link></div>
                                <div className="mr-3"><span className="icon-layers"></span> <Link to="#">{salary} dt</Link></div>
                                <div className="mr-3"><span className="icon-layers"></span> <Link to="#">{contractType}</Link></div>
                            </div>
                            <hr/>
                            <div>
                                <div>
                                <p  className="SE"><strong>Study Level:</strong> &nbsp; &nbsp; &nbsp; &nbsp; {studyLevel} </p>
                                <p className="SE"><strong>Experience:</strong> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {experience}</p>
                                </div>
                                <hr/>
                                <br></br>
                                <p>
                                    {description}
                              </p>
                              <br></br>
                                <p>
                                    <p className="SE"><strong>Requirements: </strong></p>
                                <div className="col-md-12 mb-3 mb-md-0">
                                <label for="option-price-2">
                                    <input type="checkbox" id="option-price-2"/> <span> Good experience in C#, .Net, SQL, and Cloud Technologies.</span>
                                </label>
                                </div>
                                <div className="col-md-12 mb-3 mb-md-0">
                                <label for="option-price-2">
                                <input type="checkbox" id="option-price-2"/> <span>Fluency in English and have good communication skills.</span>
                                </label>
                                </div>
                                <div className="col-md-12 mb-3 mb-md-0">
                                <label for="option-price-2">
                                <input type="checkbox" id="option-price-2"/> <span>Good experience in C#, .Net, SQL, and Cloud Technologies.</span>
                                </label>
                                </div>
                                </p>
                                <br/>
                                <hr/>
                            </div>
                          </div>
                     
                        </div>
                        </div>
                </div>
                </div>
              <div className="col-lg-3 sidebar">
            <div className="sidebar-box bg-white p-4 ftco-animate">
            <h3 className="h5 text-black mb-3">Contact Info</h3>
          <p className="mb-0 font-weight-bold">Location</p>
          <p className="mb-4">{location}</p>
        </div>
        
          </div> 
            </div>
        </div>
        
        <div className="container">
        <div className="row">
          <div className="col-md-8 ftco-animate">
            <h3 className="mb-5"> Comments</h3>
              <ul className="comment-list">
                <li className="comment">
                  <div className="vcard bio">
                      {comments.map(comment => (
                    <CommentItem key={comment._id} comment={comment} jobId={_id} />
                    ))}
                  </div>
                </li>
              </ul>              
            <div className="">             
                <CommentForm jobId={_id}/> 
            </div>
          </div>
        </div>
      </div>
      <div className="container">
            <div className="row">
                <MapJob />
            </div>
          </div>
    </section>
   
    );
};
/*JobItemDetails.defaultProps = {
    showActions: true
}*/
JobItemDetails.propTypes = {
    job: PropTypes.object.isRequired,
    //auth: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
   //auth: state.auth
});
export default connect(mapStateToProps, {})(JobItemDetails);