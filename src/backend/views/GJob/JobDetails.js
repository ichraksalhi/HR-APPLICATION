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
import  JobItemDetails  from './JobItemDetails';

const JobDetails = ({getJob, job: {job, loading}, match}) => {
  useEffect ( () => {
        getJob(match.params.id);
  }, [getJob]);
      return loading || job === null ? <Spinner/> : (
    <>
      <UserHeader />
      <Container className="mt--7" fluid>
        <JobItemDetails job={job}></JobItemDetails>
      </Container>
 </>
  );
};
JobDetails.propTypes = {
  getJob: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    job: state.job
});
export default connect(mapStateToProps, {getJob})(JobDetails);
