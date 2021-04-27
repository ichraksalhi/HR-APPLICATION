import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {useHistory } from 'react-router-dom' ;
import {
  Card,
  CardHeader,
  CardBody,
  Col,
  Button,
  CardFooter,
  Container,
  Row,
} from "reactstrap";
import {ApprovedJob} from '../../../actions/job';
const JobAdItemDetails = ({
  job: { _id, title, location, description, salary, studyLevel, experience, contractType, user, requirements, skills}
, ApprovedJob}) => {
  const history = useHistory();
  const appJob = async id =>{
    ApprovedJob(id);
    alert("Job Approved!")
  }
  const close = () => {
    history.push("/admin/ListJobsNonApp");
  }
  return (
    <>
    <Container className="mt--7" fluid>
      <Row>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="border-0">
              <h3 className="mb-0">Job Details</h3>
              <h5>Would you like to approve this job?</h5>
              <hr/>
              <div className="d-flex justify-content-between">
                <Button
                  className="mr-4"
                  color="primary"
                  onClick={appJob(_id)}
                  size="sm">
                  Approve
                </Button>  :
                <Button
                className="float-right"
                color="danger"
                size="sm"
                onClick={close}>
                X
              </Button>
        </div>
            </CardHeader>
            <CardBody className="pt-0 pt-md-4">
            <Row>
            </Row>
            <div className="text-center">
              <h2>
              {title}
              <span className="font-weight-light"></span>
              </h2>
              <div className="h5 font-weight-300">
                <i className="ni location_pin mr-2" />
                {contractType}
              </div>              
              <div className="h5 font-weight-300">
                <i className="ni location_pin mr-2" />
                {location}
              </div>
              <div className="h5 mt-4">
                <i className="ni business_briefcase-24 mr-2" />
                <br></br>
                Experience: {experience}
                <br/>
                Skills:
            {skills.map(req => (
                        <p>{req.title}</p>
                ))}
              </div>
              <div>
              </div>
              <hr className="my-4" />

              <p>
               Description:   {description}
             </p>
              <br/>
              <p>
                {requirements.length ===0 ? <p></p> :
                <p>
                Requirements
                {requirements.map(req => (
                  <p>
                    ✔{req.text}
                  </p>
                ))}
                </p>
                }
              </p>
            </div>
          </CardBody>
          <CardFooter>
            <Button className="btn btn-success btn-block">Update</Button>
          </CardFooter>
        </Card>
        </div>
      </Row>
    </Container>
  </>
  );}
JobAdItemDetails.propTypes = {
  job: PropTypes.object.isRequired,
  //auth: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
 //auth: state.auth
});
export default connect(mapStateToProps, {ApprovedJob})(JobAdItemDetails);