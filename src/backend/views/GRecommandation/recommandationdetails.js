// import React from "react";
// import { Button } from "reactstrap";
// import { Link } from "react-router-dom";

// import axios from 'axios';
// import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import { Component } from 'react';
// //import { Button } from "reactstrap";
// // reactstrap components
// import {
//   Badge,
//   Card,
//   CardHeader,
//   CardFooter,
//   DropdownMenu,
//   DropdownItem,
//   UncontrolledDropdown,
//   DropdownToggle,
//   Media,
 
//   PaginationItem,
//   PaginationLink,
//   Progress,
//   Table,
//   Container,
//   Row,
//   UncontrolledTooltip,
 
//   Form,
//   Input,
//   InputGroupAddon,
//   InputGroupText,
//   InputGroup,
//   Col,
 

//   CardBody,
//   FormGroup
  
// } from "reactstrap";
// // core components
// import Header from "backend/components/Headers/Header.js";


  
  
  
//   export default class ReclamationDetails extends Component {
  
    
//     constructor(props) {
//       super(props);

  
//       this.state = {scrap: [], score: [] , _id_profile:[],
      
//      };

    
  
     
//     }
  
//     componentDidMount() {
//      const id = this.props.match.params.id;
//       axios.post("http://localhost:5000/rec/609087de6de5c07e7c172db3")
//         .then(response => {
//             console.log(response)
//             console.log("papa",response.data._id_profile);
//             console.log("papi",response.data.score);
//         //  if (response.data.success) {
//            // console.log("maaaaaa",response.data.score);
//             this.setState({
//             //  scrap: response.data.scrap,
//               score: response.data,
//            //   _id_profile: response.data,
//            //   score: response.data.score,
//              // score: response.data.score,
//               //_id_profile: response.data._id_profile
              
              
//             });
    
            
//          // }
//          // this.setState({ reclamation: response.data })
//          console.log("scrapppp: ", response.data.score )
//         // console.log("moemen: ", this.state.score ) 
//         })
//         .catch((error) => {
//           console.log(error);
//           console.log("scrap1: ", this.state.scrap)
//         })

//     }
  

  
    
//     render() {  

  

     
  
       
//        const scrap  = this.state.scrap;
//        const score  = this.state.score;
//        console.log("naaajlaaaaaaa",this.state.score)
//        console.log("ichraaak",this.state._id_profile)
       
  
//       return (
       
        
//         <>
       
//        <div
//         className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
//         style={{
//           minHeight: "400px",
//           backgroundImage:
//           "url(" +
//           require("../../assets/img/theme/rec.jpg").default +
//           ")",
//           backgroundSize: "cover",
//           backgroundPosition: "center top",
//         }}
//       >
//         {/* Mask */}
//         <span className="mask bg-gradient-default opacity-8" />
//         {/* Header container */}
//         <Container className="d-flex align-items-center" fluid>

//         <div> </div>

         
//         </Container>
        
//       </div>



// {/* Page content */}
  
//    <Container className="mt--7" fluid>
//         <Row>
//           <Col className="order-xl-2 mb-5 mb-xl-0" xl="6">
//             <Card className="card-profile shadow card">
//               <Row className="justify-content-center">
//                 <Col className="order-lg-2" lg="3">
//                   <div className="card-profile-image">
//                     <a href="#pablo" onClick={(e) => e.preventDefault()}>
//                       <img
//                         alt="..."
//                         className="rounded-circle"
//                         src={
//                           require("../../assets/img/theme/team-4-800x800.jpg")
//                             .default
//                         }
//                       />
//                     </a>
//                   </div>
//                 </Col>
//               </Row>
//               <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
//                 <div className="d-flex justify-content-between">
//                   <Button
//                     className="mr-4"
//                     color="info"
//                     href="#pablo"
//                     onClick={(e) => e.preventDefault()}
//                     size="sm"
//                   >
//                   Approver
//                   </Button>
//                   <Button
//                     className="float-right"
//                     color="default"
//                     href="#pablo"
                  
//                     size="sm"
//                   >  <a href={`http://localhost:3000/admin/Replay`}> 
//                       Replay with mail </a> 
               
//                   </Button>
//                 </div>
//               </CardHeader>
//               <CardBody className="pt-0 pt-md-4">
//                 <Row>
//                   <div className="col">
//                     <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                      
//                       <div>
//                         <span className="heading"></span>
//                         <span className="description"></span>
//                       </div>
//                       <div>
//                         <span className="heading"></span>
//                         <span className="description"></span>
//                       </div>
//                     </div>
//                   </div>
//                 </Row>
                
//                 <div className="text-center">
//                 <div className="h5 mt-4">
//                     <i className="ni business_briefcase-24 mr-2" />
//                 Lastname : 
                
//                   </div>
                
                  
//                   {this.state._id_profile}
                   

                 
//                   <div className="h5 mt-4">
//                     <i className="ni business_briefcase-24 mr-2" />
//                 object : 
                
//                   </div>
//                   <div className="h5 font-weight-300">
//                     <i className="ni location_pin mr-2" />
                
//                   {scrap. score}

              
//                   </div>
//                   <div className="h5 mt-4">
//                     <i className="ni business_briefcase-24 mr-2" />
//                   Contenue de description : 
                
//                   </div>
//                   <div>
//                     <i className="ni education_hat mr-2" />
//                     {scrap. score}
//                   </div>
                 
//                   <hr className="my-4" />
//                   <p>
//                     ----------
//                   </p>
//                   <a href="#pablo" onClick={(e) => e.preventDefault()}>
//                     Show more
//                   </a>
//                 </div>
//               </CardBody>
//             </Card>
//           </Col>
        
//         </Row>
//       </Container>
//     </>
//   );
// };

//    }
  
  

import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import axios from 'axios';

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
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
  

 
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
 

  CardBody,
  FormGroup
} from "reactstrap";
// core components
import Header from "backend/components/Headers/Header.js";


function Recommandationdetails(){  
    const [scrap,setScrap]=useState([]);
    const [profiles,setProfiles]=useState([]);
    const [profiletitle,setProfiletitle]=useState([]);
    const[id,setId]=useState("");
    const [score,setScore]=useState([]);
    const [s1, setS1] = useState("");
    const [s2,setS2]=useState("");
    const [s3,setS3]=useState("");
    const [p1, setP1] = useState("");
    const [p2,setP2]=useState("");
    const [p3,setP3]=useState("");
    const [t1, setT1] = useState("");
    const [t2,setT2]=useState("");
    const [t3,setT3]=useState("");
           
        
      
    
      useEffect(() => {
       //const id = this.props.match.params.id;
        axios.post("http://localhost:5000/rec/609087de6de5c07e7c172db3")
          .then(response => {
              //console.log("maaaaaa",response.data.score);
             setScore(response.data.score);
             setScrap(response.data._id_profile);
             setProfiles(response.data._id_profiles);
             setProfiletitle(response.data.profile_title);
              localStorage.setItem("score",JSON.stringify(score));
              localStorage.setItem("PID",JSON.stringify(scrap));
              localStorage.setItem("ProfilesID",JSON.stringify(profiles));
              localStorage.setItem("titleProfile",JSON.stringify(profiletitle))
              })
          .catch((error) => {
            console.log(error);
         
          });
          
          setS1(score[0]);
          setS2(score[1]);
          setS3(score[2]);
          setId(scrap[0]);
          setP1(profiles[0]);
          setP2(profiles[1]);
          setP3(profiles[2]);
          setT1(profiletitle[0]);
          setT2(profiletitle[1]);
          setT3(profiletitle[2]);
          
      })
  return (
    <> 
     
     <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "400px",
          // backgroundImage:
          // "url(" +
          // require("../../assets/img/theme/rec.jpg").default +
         // === ")",
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




      {/* Page content */}

      <Container className="mt--7" fluid>
      
        {/* Table */}
        <Row>

          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">List of Users</h3>
                <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                           Profile 
                          </label>
                          <Input
                            className="form-control-alternative"
                            disabled
                            defaultValue=""
                            id="input-last-name"
                            //onChange={(e) => setLastname(e.target.value)}
                            value={  id }
                            type="text"
                          />
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">FirstName</th>
                    <th scope="col"> Profile Id</th>
                    <th scope="col">Role</th>
                    <th scope="col">date</th>
                    <th scope="col"></th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                       
                        <Media>
                          <span className="mb-0 text-sm">
                          Thabet Kaddachi
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>   {p1}  </td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-warning" />
                        {t1}
                      </Badge>
                    </td>
                   
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">   {s1} </span>
                        <div>
                          <Progress
                            max="100"
                            value="20"
                            barClassName="bg-danger"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            delete
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            approve
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            disapprove  
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                       
                        <Media>
                          <span className="mb-0 text-sm">
                          Ahmed Amine Hamrouni
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td> {p2} </td>
                    <td>
                      <Badge color="" className="badge-dot">
                        <i className="bg-success" />
                        {t2}
                      </Badge>
                    </td>
                    
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2"> {s2} </span>
                        <div>
                          <Progress
                            max="100"
                            value="5"
                            barClassName="bg-success"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            delete
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            approve
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                          disapprove
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                     
                        <Media>
                          <span className="mb-0 text-sm">  Pierre Knobel </span>
                        </Media>
                      </Media>
                    </th>
                    <td> {p3} </td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-danger" />
                        {t3}
                      </Badge>
                    </td>
                    
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2"> {s3} </span>
                        <div>
                          <Progress
                            max="100"
                            value="6"
                            barClassName="bg-danger"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            delete
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            approve
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Something else here
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                 
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
        {/* Dark table */}
       
      </Container>
    </>
  );
};

export default Recommandationdetails ;