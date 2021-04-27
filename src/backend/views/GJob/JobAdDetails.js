import React, {useEffect} from "react";

// reactstrap components
import {
  Container
} from "reactstrap";
// core components
import UserHeader from "backend/components/Headers/UserHeader.js";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../../frontOffice/Layouts/Spinner'
import { getJob } from '../../../actions/job';
import  JobAdItemDetails  from './JobAdItemDetails';

const JobAdDetails = ({getJob, job: {job, loading}, match}) => {
  useEffect ( () => {
        getJob(match.params.id);
  }, [getJob]);
      return loading || job === null ? <Spinner/> : (
    <>
      <UserHeader />
        <JobAdItemDetails job={job}></JobAdItemDetails>
    </>
  );
};
JobAdDetails.propTypes = {
  getJob: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    job: state.job
});
export default connect(mapStateToProps, {getJob})(JobAdDetails);