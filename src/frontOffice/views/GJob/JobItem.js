import React, {Fragment} from 'react';
import {Link} from 'react-router-dom' ;
import Moment from 'react-moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLike, removeLike} from '../../../actions/job';
const JobItem = ({
    addLike,
    removeLike,
    job: { _id, nbrApplied, title, location, description, salary, studyLevel, experience, contractType, company, user, likes, comments, requirements, createdAt, skills  }
}) => {
    return (
        <div className="col-md-12 ftco-animate">
        <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
          <div className="one-third mb-4 mb-md-0">
          <div className="job-post-item-header align-items-center">
        <span className="subadge">{contractType}</span>
      <h2 className="mr-3 text-black"><Link to={`/DetailJob/${_id}`}>{title}</Link></h2>
      <div className="tagcloud">
            <a href="#" className="tag-cloud-link">.Net</a>
            <a href="#" className="tag-cloud-link">SQL</a>
            <a href="#" className="tag-cloud-link">Cloud</a>
            <a href="#" className="tag-cloud-link">C#</a>
        </div>
      <p>{description}</p>
    </div>
    <hr/>
            <div className="job-post-item-body d-block d-md-flex">
                <div className="mr-3"><span className="icon-calendar"></span> <Link to="#"><Moment format="YYYY/MM/DD">{createdAt}</Moment></Link></div>
                <div className="mr-3"><span className="icon-my_location"></span> <Link to="#">{location}</Link></div>
                <div className="mr-3"><span className="icon-layers"></span> <Link to="#">{salary} dt</Link></div>
            </div>
          </div>
          <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
            <div>
                <button onClick={e=> removeLike(_id) } className="icon text-center d-flex justify-content-center align-items-center icon mr-2">
                    <span className="icon-heart">{likes.length}</span>
                </button>
            </div>
          <Link to="job-single.html" className="btn btn-outline-primary">Apply Job</Link>
          </div>
        </div>
        </div>
        
        
    );
};
JobItem.propTypes = {
    job: PropTypes.object.isRequired,
    //auth: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
   //auth: state.auth
});
export default connect(mapStateToProps, {addLike, removeLike}) (JobItem);