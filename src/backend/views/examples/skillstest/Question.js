import React,{useState} from "react";
import axios from "axios";
//import { Button } from "reactstrap";
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";


function Question({ question,history, index /*, token*/ }) {
  


  const handleDelete = () => {
    axios.delete("http://localhost:5000/api/question/delete", { data: {/*  token, */id: question._id } })
      .then((response) => {
        alert(response.data.msg);
        window.location.reload(true);
      })
      .catch((err) => {
        alert(err.response.data.msg);
      });
  };

  const handleUpdate = (e) => {
    console.log(JSON.stringify(question));
    localStorage.setItem("question", JSON.stringify(question));
    history.push(`/admin/updatequestion/${JSON.stringify(question._id)}`);
   
  }
  return (
    <>
   
<Card className="bg-secondary shadow">
  <CardBody>
    <Form>
      <div className="pl-lg-4">
        <Row>
          <Col lg="12">
          <label
                className="form-control-label"
                htmlFor="input-username">
                Question {index}: 
              </label>
          <FormGroup>
        <textarea class="form-control" 
        id="exampleFormControlTextarea1" rows="3" 
        value={question.question}></textarea>
         </FormGroup>
         </Col>
          <Col lg="6">
            <FormGroup>
              <label
                className="form-control-label"
                 > A-</label>
              <Input
                className="form-control-alternative"
                 value={question.opt1}
                //placeholder="ngModel"
                type="string"
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label
                className="form-control-label"
                 > B-</label>
              <Input
                className="form-control-alternative"
                  value={question.opt2}
               // placeholder="[ngModel]"
                type="string"
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label
                className="form-control-label"
              > C-</label>
              <Input
                className="form-control-alternative"
                value={question.opt3}
                //placeholder="[(ngModel)]"
                type="string"
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label
                className="form-control-label"
                 > D-</label>
              <Input
                className="form-control-alternative"
                value={question.opt4}
                placeholder="no Responce"
                type="sting"
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label
                className="form-control-label"> Answer</label>
              <Input
                className="form-control-alternative"
                value={question.answer}
                type="sting"
              />
            </FormGroup>
          </Col>
        </Row>  
      </div>
          
    </Form>
    <Button onClick={handleUpdate}>Update</Button>
      <Button onClick={handleDelete}>Delete</Button>
  </CardBody>
</Card>

    </>
  );
}

export default Question;

 {/* <div className="List-Question">
      <h2>
        {index}: {question.question}
      </h2>
      <h3>1. {question.opt1}</h3>
      <h3>2. {question.opt2}</h3>
      <h3>3. {question.opt3}</h3>
      <h3>4. {question.opt4}</h3>
      <h3>Ans. {question.answer}</h3>
      <Button onClick={handleUpdate}>Update</Button>
      <Button onClick={handleDelete}>Delete</Button>
    </div> */}