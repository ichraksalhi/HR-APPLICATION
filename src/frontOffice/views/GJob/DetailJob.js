import React, { useEffect } from 'react';
import Header from '../../Layouts/Header';
import {connect} from 'react-redux';
import Spinner from '../../Layouts/Spinner'
import { getJob } from '../../../actions/job';
import PropTypes from 'prop-types';
import JobItemDetails from '../GJob/JobItemDetails';

const DetailJob = ({getJob, job: {job, loading}, match}) => {
useEffect ( () => {
      getJob(match.params.id);
}, [getJob]);
    return loading || job === null ? <Spinner/> : (
        <>
        <Header/>
        <JobItemDetails job={job}></JobItemDetails>
        
        </>
    );
}
DetailJob.propTypes = {
  getJob: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    job: state.job
});
export default connect(mapStateToProps, {getJob})(DetailJob);

