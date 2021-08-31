
import React, { useEffect, useState} from "react";
import axios from "axios";
import SingleTest from "./singletest";
import Popup from "../../../components/popup/popup";
//import Form from 'muicss/lib/react/form';
import AddIcon from '@material-ui/icons/Add';
//import Search from "./search";
import {
  Button,
  Card,
  CardHeader,
  Form,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  FormGroup, 
InputGroup, 
 InputGroupAddon, 
 InputGroupText,
  Input,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";


function CreateTest({ /*token,*/ history, match: { url } }) {
  const [tests, setTests] = useState([]);
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  const maxQuestions =8;
  const [openPopup,setOpenPopup]=useState(false);
 
  const [notify,setNotify]=useState({isOpen:false,message:'',type:''}) 
   const [validity, setValidity] = useState();

 

  useEffect(() => {
  axios.get("http://localhost:5000/api/test/nonarchive")
  .then((response) => {
    setTests(response.data);
    const a=JSON.parse(JSON.stringify(response.data.map((test, index) => {
             const b =test.numberOfQuestions;
            setNumberOfQuestions(test.numberOfQuestions);
          })))
          }) .catch((err) => {
                  console.log(err);
                  alert(err.response.msg);
                  // history.push("/");
                });

               

    // axios.get("http://localhost:5000/api/test/getAlltests",/* { token }*/)
    //   .then((response) => {
    //    // console.log(response);
    //     setTests(response.data);
    //     //console.log(response.data);
        
    //     //const a = JSON.parse(response.data);
    //      const a=JSON.parse(JSON.stringify(response.data.map((test, index) => {
    //      const b =test.numberOfQuestions;
    //      setNumberOfQuestions(test.numberOfQuestions);
    //     })))

    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     alert(err.response.msg);
    //    // history.push("/");
    //   });
   }, [/*token*/, history]);



        

  


//const {search,setSearch}=useState(1)
const handleClose = () => setOpenPopup(false);
const reload=()=>window.location.reload(false);

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/test/create", {
        numberOfQuestions: parseInt(numberOfQuestions),
        validity,
        /*token,*/
      })
      .then((response) => {
        //alert(response.data.msg);
         console.log(response.data.msg) ;
     history.push("/admin/listetest");
     handleClose();
       reload();
       
      })
      .catch((err) => {
        //alert(err.response.data.msg);
        setNumberOfQuestions("");
        setValidity("");
      });
  };
 

  const handleChange = () => {
    history.push("/admin/add");
    //${numberOfQuestions}
  };
  // const handleChange2 = () => {
  //   history.push(`${url.slice(0, -6)}`);
  // };
  ////  <Button><Link to="/admin/add">+ Add a test</Link></Button>  
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
              {/* <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <FormGroup className="mb-0">
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
                <Search onSearch={(value)=>{
                  setSearch(value);
                }}/>
              </InputGroup>
            </FormGroup>
          </Form> */}
      
        <Row className="mt-3">
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="shadow">
           
            <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">List Skills Test </h3>
                  </div>    
 
                     {/* search bar */}
                     <div className="col text-right">
                     <Button 

                      size="sm" onClick={()=>setOpenPopup(true)}> <AddIcon fontSize="small"/>ADD</Button>
                  </div>
                  {/* search bar */}
                 
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
                 {/* <h1>{tests.length}</h1> */}
                  {tests.length ? (
              tests.map((test, index) => {
            // console.log(test.numberOfQuestions);
                return (
                  <SingleTest
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
                <h2>You've not created a test.</h2>
              )} 
                        </tbody>
              </Table>
            </Card>
          </Col>
            
          </Row>
          </Container>
          
          <Popup openPopup={openPopup}
          setOpenPopup={setOpenPopup}>
      <div className="Add-Test">
       {/* <h2>Number of questions available: {maxQuestions}</h2>  */}
      <Form className="Add-Test-Form" onSubmit={submitHandler}>
        <div>
          <label className="font-weight-bold">Total Questions: </label>
          <input
            type="text"
            name="numberOfQuestions"
           // value={numberOfQuestions}
            placeholder={`must be <= ${maxQuestions}`}
            required
            onChange={(e) => setNumberOfQuestions(e.target.value)}
            style={{ width: "500px" }}
            
          />
        </div>
        <div>
          <label style={{marginTop:'2rem'}} className="font-weight-bold">Valid till: </label>
          <input
            type="date"
            name="validity"
            value={validity}
            required
            onChange={(e) => setValidity(e.target.value)}
            style={{ width: "500px" }}
          />
        </div>

        <Button type="submit"  color="default"style={{float: 'right',marginTop:'2rem'}}>Create the test</Button>
      </Form>
    </div>
          </Popup>
          {/* <Notification
                  notify={notify}
                  setNotify={setNotify}
                 /> */}
    </>
  );
};


//     <div className="Create-Test">
//       <div className="New-Nav">
//          <Button onClick={handleChange}>+ Add a test</Button>
//         <Button onClick={handleChange2}>Dashboard</Button>
//       </div>
//       <h1>All Tests</h1>
//       <h1>{tests.length}</h1>
//        {tests.length ? (
//         tests.map((test, index) => {
//        // console.log(test.numberOfQuestions);
//           return (
//             <SingleTest
//               key={index + 1}
//               index={index + 1}
//               /*token={token}*/
//               test={test}
//               history={history}
//               url={url}
//             />
//           );
       
//         })
//       ) : (
//         <h2>You've not created a test.</h2>
//       )} 
//     </div>
//     </>
//   );
  
// }

export default CreateTest;
