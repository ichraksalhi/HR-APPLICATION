import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import Pagination from './pagination.js';
import axios from 'axios';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Component } from 'react';
//import { Button } from "reactstrap";
// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
 
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
  CardBody

} from "reactstrap";
// core components
import Header from "backend/components/Headers/Header.js";


  
  
  
  export default class Replay extends Component {

    
  state = {
    email: {
      recipient: 'ichrakpp@gmail.com',
      sender: 'ichrak.salhi@esprit.tn',
      subject: '',
      text: ''
    }
  }

  sendEmail = _ => {
    const { email } = this.state;
    //const {recipient}='ichrakpp@gmail.com';
    //const {sender}='ichrak.salhi@esprit.tn';
   
 fetch(`http://127.0.0.1:5000/replay/send-email?recipient=${email.recipient}&sender=${email.sender}&topic=${email.subject}&text=${email.text}`)

 //query string url
      .catch(err => console.error(err))

      window.location = '/admin/ListReclamations';

  }

  render() {
    const { email } = this.state;
    const spacer = {
      margin: 10
    }
    const textArea = {
      borderRadius: 4
    }
    return (     <>

      <div
      className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
      style={{
        minHeight: "400px",
        backgroundImage:
        "url(" +
        require("../../assets/img/theme/rec.jpg").default +
        ")",
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


    <Col className="order-xl-1" xl="6">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0"> SEND REPLAY</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Settings
                    </Button>
                  </Col>
                </Row>
              </CardHeader>

    <div className="App">
        <div style={{ marginTop: 10 }} >
          <h2> Send Email </h2>
         
          <label> Subject </label>
          <br />
          <input  className="form-control-alternative"
          
          value={email.subject}
            onChange={e => this.setState({ email: { ...email, subject: e.target.value } })} />
          <div style={spacer} />
          <label> Message </label>
          <br />
          <textarea rows={3} value={email.text} style={textArea}
            onChange={e => this.setState({ email: { ...email, text: e.target.value } })} />
          <div style={spacer} />
        
        </div>
        <Button color="danger" type="button"   
   size={'sm'}
 
  onClick={this.sendEmail}> Send Replay
 </Button>
      </div>
      </Card>
          </Col>
     
          </>    );
  }
}
  
    
    
    
  
  
  
  