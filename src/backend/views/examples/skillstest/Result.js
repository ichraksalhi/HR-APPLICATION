import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleResult from "./SingleResult";
//import {useParams} from "react-router-dom";
import {
  Row,
Container,
Card,
CardHeader,
Table,
Col,
Button
  
} from "reactstrap";



function Result({ history,props ,match: {params}/*, token */,url}) {

  const  {testId}  = params;
 // console.log(testId)
  const [result, setResult] = useState([]);
  //const [marks,setMarks]=useState([])
 



  useEffect((props) => {
    axios.post("http://localhost:5000/api/result/listResult", {/* token,*/ testId })
      .then((response) => { 
        //console.log(response.data)
        setResult(response.data);

      })
      .catch((err) => {
        alert(err);
        history.push("/admin/listetest");
      });
  }, [history, testId  /*,token*/]);


  const handleClickQuit = () => {
    history.push("/admin/listetest");
//    // history.push(`/admin/updatequestion/${JSON.stringify(question._id)}`);

};

//sortByScore(){
 // let newResultList=result;
 //if ()
 
 // }
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
                    <h3 className="mb-0">Result </h3>
                  </div> 
                  <div className="col text-right">
                      <Button size="sm"  onClick={handleClickQuit}>Quit</Button> 
                  </div>   
                  </Row>
              </CardHeader>

        
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">candidat N°</th>
                    
                    <th scope="col">Email</th>
                   
                    <th scope="col">Marks</th>
                   

                  </tr>
                </thead>
                <tbody>
                {/* sort((a,b)=>{a.marks<b.marks}) */}

                  {result.length ? (
        result.map((singleResult, index) => (
          <SingleResult
            singleResult={singleResult}
            key={index + 1}
            index={index + 1}
          />
        ))
      ) : (
        <h2>No one has taken the test till now!</h2>
      )}
                        </tbody>
              </Table>
            </Card>
          </Col>
            
          </Row>
          </Container>























{/* 
  </div>
    <div className="Result">
      <h1>Result</h1>
      {result.length ? (
        result.map((singleResult, index) => (
          <SingleResult
            singleResult={singleResult}
            key={index + 1}
            index={index + 1}
          />
        ))
      ) : (
        <h2>No one has taken the test till now!</h2>
      )} */}
   
    </>
  );
}

export default Result;
