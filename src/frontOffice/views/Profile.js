
// export default Profile;
import React, { useEffect,useState } from "react";
import axios from 'axios';
import Header from "../Layouts/Header";
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


const Profile = ({history}) => {
  const [userId, setUserId] = useState("");
  const [firstname,setFirstname]=useState("");
  const [lastname,setLastname]=useState("");
  const [email,setEmail]=useState("");
  const [company,setCompany]=useState("");
  // Decrypt
  // var bytes = CryptoJS.AES.decrypt(ciphertext, 'my-secret-key@123');
  // var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

useEffect(()=>{
  const jwt = localStorage.getItem('user');
        var user=''
     if(jwt) {
       user = JSON.parse(jwt);
       console.log(user.id);
    setUserId(user.id)
    console.log(userId);
    axios.post("http://localhost:5000/api/profile/getuser",{ UserId: userId})
    .then(response => {
      console.log(response) ;
         setFirstname(response.data.firstname);
         setLastname(response.data.lastname) ;
         setEmail(response.data.email) ;
         setCompany(response.data.company);
       
      }).catch(function (error) {
      console.log(error);
    });
     console.log(firstname);
     console.log(lastname);
     console.log(email);
     


  }
})

const submitHandler = (e) => {
  e.preventDefault();
  history.push("/update-profile");
};




  return (
    <>
        <Header />
      {/* Page content */}
      <Container className="mt--4" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={
                          require("../../backend/assets/img/theme/team-4-800x800.jpg")
                            .default
                        }
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between">
                </div>
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <Row>
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                      
                    </div>
                  </div>
                </Row>
                <div className="text-center">
                  <h3>
                   {lastname}{firstname}
                 
                  </h3>
                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                     {company}
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8" style={{marginTop:'5rem'}}>
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">My account</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      onClick={submitHandler}
                      type="submit"
                      size="sm"
                    >
                      Update
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form   >
                  <h6 className="heading-small text-muted mb-4">
                    HR information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                       {/* <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Password
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="lucky.jesse"
                            id="input-username"
                            value={password}
                           // placeholder="Username"
                            type="text"
                          />
                        </FormGroup>
                      </Col>  */}
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                           Email address
                          </label>
                          <Input
                            className="form-control-alternative"
                            disabled
                            id="input-email"
                            value={email}
                            //onChange={(e) => setEmail(e.target.value)}
                            
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            First name
                          </label>
                          <Input
                            className="form-control-alternative"
                            disabled
                            defaultValue="Lucky"
                            id="input-first-name"
                            value={firstname}
                           // onChange={(e) => setFirstname(e.target.value)}
                           // placeholder="First name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Last name
                          </label>
                          <Input
                            className="form-control-alternative"
                            disabled
                            defaultValue="Jesse"
                            id="input-last-name"
                            //onChange={(e) => setLastname(e.target.value)}
                            value={lastname}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                             
                  
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
