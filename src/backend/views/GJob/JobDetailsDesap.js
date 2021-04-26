import React, {useEffect} from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getJob } from '../../../actions/job';
import Spinner from '../../../frontOffice/Layouts/Spinner'
import UserHeader from "backend/components/Headers/UserHeader.js";
import JobDetailsAdmin from "./JobDetailsAdmin";
import JobItemDetails from "./JobItemDetails";
const JobDetailsDesap = ({getJob, job: {job, loading}, match}) => {
  useEffect ( () => {
        getJob(match.params.id);
  }, [getJob]);
      return loading || job === null ? <Spinner/> : (
    <>
      <UserHeader />
      <Container className="mt--7" fluid>
        <JobDetailsAdmin job={job}></JobDetailsAdmin>
      </Container>
 </>
  );
};
JobDetailsDesap.propTypes = {
  getJob: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    job: state.job
});
export default connect(mapStateToProps, {getJob})(JobDetailsDesap);