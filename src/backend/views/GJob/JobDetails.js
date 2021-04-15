import React from "react";

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
// core components
import UserHeader from "backend/components/Headers/UserHeader.js";
import {Link} from 'react-router-dom' ;

const JobDetails = () => {
  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col  className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between">
                </div>
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <div className="text-center">
                  <h3>
                  Senior .Net Developer/Tech Lead
                  <div>
                        <span className="heading">22</span>
                        <span className="description">candidates applyed</span>
                      </div>
                      <div>
                        <span className="heading">10</span>
                        <span className="description">Likes</span>
                      </div>
                      <div>
                        <span className="heading">2</span>
                        <span className="description">Comments <Link to="/">See comments</Link></span>
                      </div>
                  <span className="font-weight-light"></span>
                  </h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    CDI
                  </div>
                  <hr/>
                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                    Study Level: Engineer (bac+5)
                    <br></br>
                    Experience: 4-6 years
                    <br/>
                    Skills: .Net, C#
                  </div>
                  <div>
                  </div>
                  <hr className="my-4" />

                  <p>
                  CED Group is an European service provider for many insurers, property managers, corporates and governments. Its business consists on protecting and restoring value for the citizens all over 14 European countries. 2000+ employees and experts are serving our customers all over Europe. CED Tunisia is a subsidiary of CED Group. It consists of an IT-BI Development center and a Businees Process Operations (BPO) team to support our various European offices and drive operational excellence. We employ110 professionals as of now and going to recruit 20 new positions in the coming 3 months, 5 of them in IT. We are building in Tunis the digitalisation of all our front office applications and part of our middle office. Our solutions are in a Full Stack Environment using the most recent Microsoft Technologies: Angular, C#, .Net, SQL Server databases and Azure Cloud Technology. We are reinforcing our teams with a position of an Tech Lead that will build with a team of 3 to 5 developers one of our Front or middle office new software.✔ !
                  If you are an engineer, having had an expericence of development in our technical environment (or close to it) for more than 4 years, willing to work in an international english speaking environment, we will be glad to see you joining us to build this ambitious technological transformation of CED.
                  </p>
                  <br/>
                  <p>
                    Requirements: ✓ Good experience in C#, .Net, SQL, and Cloud Technologies.
                    ✓Fluency in English and have good communication skills.
                  </p>
                  <hr/>
                  <button type="submit" className="btn btn-outline-primary btn-block" >Edit</button>
                </div>
              </CardBody>
            </Card>
          </Col>
        
        </Row>
      </Container>
    </>
  );
};

export default JobDetails;