
import React, { useEffect, useState} from "react";
import axios from "axios";
import SingleTest2 from "./singletest2";
import Popup from "../../../components/popup/popup";
//import Form from 'muicss/lib/react/form';
import AddIcon from '@material-ui/icons/Add';

import {
 DropdownMenu,
 DropdownItem,
 UncontrolledDropdown,
DropdownToggle,
Button,
  Card,
  CardHeader,
  Form,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";


function ArchivedTest({ /*token,*/ history, match: { url } }) {

  const [tests, setTests] = useState([]);
  const[testId,setTestId]=useState([]);
  const[index,setIndex]=useState([]);
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  const maxQuestions =8;
  const [openPopup,setOpenPopup]=useState(false);
 
  const [notify,setNotify]=useState({isOpen:false,message:'',type:''}) 
   const [validity, setValidity] = useState();

 

  useEffect(() => {
  axios.get("http://localhost:5000/api/test/archive")
  .then((response) => {
      console.log(response.data)
    setTests(response.data);
//    console.log(tests);
    
//  const a= tests.map((test, index) => {

//              const b =test.numberOfQuestions;
//             setNumberOfQuestions(b);
//             console.log(numberOfQuestions);
//             const id=test._id;
//             console.log(id);
//             setTestId(id)

//            })
          }) .catch((err) => {
                  console.log(err);
                  alert(err.response.msg);
                  // history.push("/");
                });

   }, [/*token*/, history]);


   const handleClick =()=>{
    history.push("/admin/listetest");
}


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
                    <h3 className="mb-0">List archived Test </h3>
                    </div>
                     <div className="col text-right">
                      <Button size="sm"  onClick={handleClick}>Quit</Button> 
                  </div>
           
                  
            
                 
                </Row>
              </CardHeader>

        
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Test N°</th>
                    
                    <th scope="col">Valid Till</th>
                   
                    <th scope="col">Total Questions</th>
                    <th scope="col">Test pin</th>

                  </tr>
                </thead>       
                   <tbody> 
                  {tests.length ? (
              tests.map((test, index) => {
                return (
                  <SingleTest2
                    key={index + 1}
                    index={index + 1}
                    /*token={token}*/
                    test={test}
                    history={history}
                    url={url}
                    
                  />
                );
              
                })
              ) : (
                <h4 style={{textAlign:'center', marginBottom:'3rem',marginTop:'2rem',marginRight:'3rem'}}>You've not has an archived test.</h4>
              )} 
                        </tbody>
           

              </Table>
            </Card>
          </Col>
            
          </Row>
          </Container>
          
     
                    
          {/* <Notification
                  notify={notify}
                  setNotify={setNotify}
                 /> */}
    </>
  );
};


export default ArchivedTest;
