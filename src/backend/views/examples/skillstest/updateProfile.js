import React, { useState } from "react";
import axios from "axios";

import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Container,
  Col,
} from "reactstrap";

function UpdateProfile({ history,index,/* token*/ match: { params } }) {
  let oldUser = localStorage.getItem("user")
  let oldCompany =localStorage.getItem("company")
  oldUser = JSON.parse(oldUser);
  const id = oldUser._id;
  const [firstname,setFirstname]=useState(oldUser.firstname);
  const [lastname,setLastname]=useState(oldUser.lastname);
  const [email,setEmail]=useState(oldUser.email);
  const [company,setCompany]=useState(oldCompany);
  

  const submitHandler = (e) => {
    e.preventDefault();
    
  axios.put("http://localhost:5000/api/profile/update", {Us:id,firstname,lastname,email,company})
    .then((response) => {
       alert(response.data.msg);
   
      history.push("/admin/user-profile");
    })
     .catch((err) => {
      alert(err.response.data.msg);
     });
    }
  const handleClickQuit = () => {
    history.push("/admin/user-profile");
//    // history.push(`/admin/updatequestion/${JSON.stringify(question._id)}`);

};


  return (
    // <div className="Question">
<>
<div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "400px",
          // backgroundImage:
          // "url(" +
          // require("../../assets/img/theme/rec.jpg").default +
          // ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>

        <div> </div>

         
        </Container>
        
      </div>
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="shadow">
  <CardBody>
  <Form className="Question-Form" onSubmit={submitHandler}>
      <div className="pl-lg-4">
        <Row className="align-items-center">
        
         
            <Col lg="6">
            <FormGroup>
          <label>firstname </label>
          <Input
          class="form-control" 
            type="text"
            name="opt1"
            value={firstname}
            required
            onChange={(e) => setFirstname(e.target.value)}
          />
          </FormGroup>
          </Col>

          <Col lg="6">
            <FormGroup>
          <label>LastName </label>
          <input
          class="form-control" 
            type="text"
            name="opt2"
            value={lastname}
            required
            onChange={(e) => setLastname(e.target.value)}
          />
       </FormGroup>
          </Col>

          <Col lg="6">
            <FormGroup>
          <label>Email </label>
          <Input
          class="form-control" 
            type="email"
            name="opt3"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
          </Col>

          <Col lg="6">
            <FormGroup>
          <label>Company </label>
          <Input
          class="form-control" 
            type="text"
            name="opt4"
            value={company}
            required
            onChange={(e) => setCompany(e.target.value)}
          />
        </FormGroup>
          </Col>

          
      
        <Button type="submit" style={{float:'right',marginTop:'2rem'}}>Update the Profile</Button>
        
        <Button type="submit" onClick={handleClickQuit} style={{float:'left',marginTop:'2rem'}}>Quit </Button>
       
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
}

export default UpdateProfile;
