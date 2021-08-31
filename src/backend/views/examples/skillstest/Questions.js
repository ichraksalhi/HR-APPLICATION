import React, { useEffect, useState } from "react";
import axios from "axios";
import Question from "./Question";
import Popup from "../../../components/popup/popupq";
import { Grid, } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Pagination from './pagination';
import {
  Button,
 CardHeader,
  Row,
  Col,
  Container,
  Card,
  Table
} from "reactstrap";

function Questions({ /*token,*/ history }) {
  const [question, setQuestion] = useState("");
  const [opt1, setOpt1] = useState("");
  const [opt2, setOpt2] = useState("");
  const [opt3, setOpt3] = useState("");
  const [opt4, setOpt4] = useState("");
  const [answer, setAnswer] = useState("");


  const handleClose = () => setOpenPopupq(false);
  const reload=()=>window.location.reload(false);
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/question/add", {
        question,
        opt1,
        opt2,
        opt3,
        opt4,
        answer /*: parseInt(answer)*/,
       /* token,*/
      })
      .then((response) => {
       // alert(response.data.msg);
        history.push("/admin/allquestions");
        handleClose();
        reload();
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


  const [questions, setQuestions] = useState([]);
  const [openPopupq,setOpenPopupq]=useState(false);

  const[currentPage,setCurrentPage]=useState(1);
const[questionPerPage,setQuestionPerPage]=useState(3);
  
//GET CURRENT QUESTIONS
const indexOfLastQuestion= currentPage*questionPerPage;
const indexcOfFirstQuestion=indexOfLastQuestion-questionPerPage;
const currentQuestions=questions.slice(indexcOfFirstQuestion,indexOfLastQuestion);


  useEffect(() => {
    axios.post("http://localhost:5000/api/question/" /*, { token }*/)
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((err) => {
        alert(err.response.msg);
        history.push("/admin");
      });
  }, [/*token,*/ history]);

  const handleChange = () => {
    history.push("/admin/addquestion");
  };
  const handleChange2 = () => {
    history.push("/admin");
  };
//change page
const paginate=pageNumber=>setCurrentPage(pageNumber);


  return (
    <>
     <div
    className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
    style={{
      minHeight: "100px",
      // backgroundImage:
      //   "url(" +
      //   require("../../assets/img/theme/skills.jpg").default +
      //   ")",
      backgroundSize: "cover",
      backgroundPosition: "center top",
    }}
  >
    {/* Mask */}
    <span className="mask bg-gradient-default" />
    {/* Header container */}
    <Container className="d-flex align-items-center" fluid>
      <Row></Row>
    </Container>
  </div>
        <Container className="mt--7" fluid>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="shadow">
            <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">List Question Test </h3>
                  </div>    
 
                     {/* search bar */}
                     <div className="col text-right">
                      <Button 

                      size="sm" onClick={()=>setOpenPopupq(true)}> <AddIcon fontSize="small"/>ADD</Button> 
                  </div>
                  {/* search bar */}
                 
                </Row>
              </CardHeader>

        
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Question N°</th>
                    
                    <th scope="col">Question</th>
                   
                    <th scope="col">option1</th>
                    <th scope="col">option2</th>
                    <th scope="col">option3</th>
                    <th scope="col">option4</th>
                    <th scope="col">answer</th>

                  </tr>
                </thead>
                <tbody>
                 {/* <h1>{tests.length}</h1> */}
                      {currentQuestions.map((question, index) => {
              return (
                <Question
                  key={index + 1}
                  index={index + 1}
                  //token={token}
                  question={question}
                  history={history}
                />
              );
            })
              
              } 
             
            </tbody>
            
              </Table>
              <Pagination questionPerPage={questionPerPage} totalQuestion={questions.length} paginate={paginate}/>
            </Card>
          </Col>
            
          </Row>
          </Container>
    <Popup openPopupq={openPopupq}
          setOpenPopupq={setOpenPopupq}>
            
 <form className="Question-Form" onSubmit={submitHandler}>
     
    
 <div class="form-group">
          <label  for="validationTextarea">Question: </label>
          <textarea 
          className="form-control"
            name="question"
            value={question}
            rows={4}
            style={{ resize: "vertical", maxWidth: "100%" }}
            required
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <div  className="form-group">
          <label>Option 1: </label>
          <input 
          className="form-control"
            type="text"
            name="opt1"
            value={opt1}
            required
            onChange={(e) => setOpt1(e.target.value)}
          />
        </div>
        <div>
          <label>Option 2: </label>
          <input
           className="form-control"
            type="text"
            name="opt2"
            value={opt2}
            required
            onChange={(e) => setOpt2(e.target.value)}
          />
        </div>
        <div>
          <label>Option 3: </label>
          <input
           className="form-control"
            type="text"
            name="opt3"
            value={opt3}
            required
            onChange={(e) => setOpt3(e.target.value)}
          />
        </div>
        <div >
          <label>Option 4: </label>
          <input
           className="form-control"
            type="text"
            name="opt4"
            value={opt4}
            required
            onChange={(e) => setOpt4(e.target.value)}
          />
        </div>
        <div >
          <label>Answer: </label>
          <input
           className="form-control"
            type="text"
            name="answer"
            value={answer}
            required
            onChange={(e) => setAnswer(e.target.value)}
          />
        </div>
        

        <Button type="submit" color="default" style={{float:'right',marginTop:'1rem'}}>Add the question</Button>
      </form>
    </Popup>
    </>

  );
}

export default Questions;
