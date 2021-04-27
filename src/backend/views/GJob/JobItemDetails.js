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
  FormGroup,
  Form,
  Input,
  Container,
  Row,
} from "reactstrap";
import {Link} from "react-router-dom";
import {deactivateJob} from '../../../actions/job';
import {activateJob} from '../../../actions/job';
const JobItemDetails = ({
  job: { _id, nbrApplied, title, location, description, salary, studyLevel, experience, contractType, company, user, likes, comments, requirements, createdAt, skills, activate  }
,deactivateJob, activateJob}) => {
  const history = useHistory();
  const deactivate = async id =>{
    deactivateJob(id);
  }  
  const actJob = async id =>{
    activateJob(id);
  }
  const close = () => {
    history.push("/admin/ListJobs");
  }
  const updateJob=()=>{
    history.push(`/admin/updateJob/${_id}`)
  }
  return (
    <>
    <Container className="mt--7" fluid>
      <Row>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="border-0">
              <h3 className="mb-0">Job Details</h3>
              <hr/>
              <div className="d-flex justify-content-between">
              {activate === 0 ? 
                <Button
                  className="mr-4"
                  color="primary"
                  onClick={actJob(_id)}
                  size="sm">
                  Activate
                </Button>  :
                <Button
                className="float-right"
                color="danger"
                size="sm"
                onClick={close}>
                X
              </Button>
            }
            {
              activate ===1 ?
              <Button
              color="primary"
              onClick={deactivate(_id)}
              size="sm">
            Deactivate
            </Button>
            : 
            <Button
            className="float-right"
            color="danger"
            size="sm"
            onClick={close}>
            X
          </Button>
            }
             
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
                Skills
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
            <Button className="btn btn-success btn-block" onClick={()=>updateJob()}>Update</Button>
          </CardFooter>
        </Card>
        </div>
      </Row>
    </Container>
  </>
  );}
JobItemDetails.propTypes = {
  job: PropTypes.object.isRequired,
  //auth: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
 //auth: state.auth
});
export default connect(mapStateToProps, {deactivateJob, activateJob})(JobItemDetails);