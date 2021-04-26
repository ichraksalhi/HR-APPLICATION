import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {useHistory } from 'react-router-dom' ;
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Button,
  Container,
  CardFooter
} from "reactstrap";
import {deactivateJob} from '../../../actions/job';
import {activateJob} from '../../../actions/job';
const JobDetailsAdmin = ({
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
  return (
    <Container className="mt--7" fluid>
    <Row>
      <Col  className="order-xl-1" xl="8">
        <Card className="bg-secondary shadow">
          <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
            <div className="d-flex justify-content-between">
              {activate === 0 ? 
                <Button
                  className="mr-4"
                  color="info"
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
              color="default"
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
                Skills: 
                {skills.map(s => (
                  s.title
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
                    req.text
                ))}
                </p>
                }
              </p>
            </div>
          </CardBody>
          <CardFooter>
            <button className="btn btn-primary btn-lg btn-block">Edit</button>
          </CardFooter>
        </Card>
      </Col>
    
    </Row>
  </Container>
 
  );}
JobDetailsAdmin.propTypes = {
  job: PropTypes.object.isRequired,
  //auth: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
 //auth: state.auth
});
export default connect(mapStateToProps, {deactivateJob, activateJob})(JobDetailsAdmin);