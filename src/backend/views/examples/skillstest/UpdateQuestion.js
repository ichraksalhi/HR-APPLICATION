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
  Col,
} from "reactstrap";

function UpdateQuestion({ history,index,/* token*/ match: { params } }) {
  let oldQuestion = localStorage.getItem("question")
  oldQuestion = JSON.parse(oldQuestion);
  const id = oldQuestion._id;
  const [question, setQuestion] = useState(oldQuestion.question);
  const [opt1, setOpt1] = useState(oldQuestion.opt1);
  const [opt2, setOpt2] = useState(oldQuestion.opt2);
  const [opt3, setOpt3] = useState(oldQuestion.opt3);
  const [opt4, setOpt4] = useState(oldQuestion.opt4);
  const [answer, setAnswer] = useState(oldQuestion.answer);

  const submitHandler = (e) => {
    e.preventDefault();
    axios.put("http://localhost:5000/api/question/update", {
        id,
        question,
        opt1,
        opt2,
        opt3,
        opt4,
        answer: parseInt(answer),
        /*token,*/
      })
      .then((response) => {
        alert(response.data.msg);
        history.push("/admin/allquestions");
      })
      .catch((err) => {
        alert(err.response.data.msg);
        setQuestion("");
        setOpt1("");
        setOpt2("");
        setOpt3("");
        setOpt4("");
        setAnswer("");
      });
  };

  return (
    // <div className="Question">

    <Card className="bg-secondary shadow">
      <Col className="order-xl-1" xl="8" style={{margin:'5rem'}}>
  <CardBody>
  <Form className="Question-Form" onSubmit={submitHandler}>
      <div className="pl-lg-4">
        <Row className="align-items-center">
          <label>Question {index}: </label>
          <Col lg="12">
          <FormGroup>
            <textarea
          class="form-control" 
            name="question"
            value={question}
            rows={4}
            cols={25}
            style={{ resize: "none", maxWidth: "100%" }}
            required
            onChange={(e) => setQuestion(e.target.value)}
          />
            </FormGroup>
            </Col>

            <Col lg="6">
            <FormGroup>
          <label>Option 1: </label>
          <Input
          class="form-control" 
            type="text"
            name="opt1"
            value={opt1}
            required
            onChange={(e) => setOpt1(e.target.value)}
          />
          </FormGroup>
          </Col>

          <Col lg="6">
            <FormGroup>
          <label>Option 2: </label>
          <input
          class="form-control" 
            type="text"
            name="opt2"
            value={opt2}
            required
            onChange={(e) => setOpt2(e.target.value)}
          />
       </FormGroup>
          </Col>

          <Col lg="6">
            <FormGroup>
          <label>Option 3: </label>
          <Input
          class="form-control" 
            type="text"
            name="opt3"
            value={opt3}
            required
            onChange={(e) => setOpt3(e.target.value)}
          />
        </FormGroup>
          </Col>

          <Col lg="6">
            <FormGroup>
          <label>Option 4: </label>
          <Input
          class="form-control" 
            type="text"
            name="opt4"
            value={opt4}
            required
            onChange={(e) => setOpt4(e.target.value)}
          />
        </FormGroup>
          </Col>

          <Col lg="12">
            <FormGroup>
          <label>Answer: </label>
          <Input
          class="form-control" 
            type="text"
            name="answer"
            value={answer}
            placeholder="must be 1,2,3 or 4"
            required
            onChange={(e) => setAnswer(e.target.value)}
          />
       </FormGroup>
          </Col>
      
        <Button type="submit" style={{float:'right',marginTop:'2rem'}}>Update the question</Button>
       
      </Row>
      </div>
      </Form>
      </CardBody>
      </Col>
</Card>

  );
}

export default UpdateQuestion;
