/*import React, { Component } from 'react'

export default class Details extends Component {
    render() {
        return (
           <div>
                <h1>Compétences évaluées</h1>
                <div>
                    <h2>Question 1</h2>
                    <p>Dans la méthode template, quelle directive utilisez-vous afin de simplement enregistrer comme contrôle un input?</p>
                </div>
            </div>
            
        )
    }
}
*/
// import React from "react";

// // reactstrap components
// import {
//   Button,
//   Card,
//   CardHeader,
//   CardBody,
//   FormGroup,
//   Form,
//   Input,
//   Container,
//   Row,
//   Col,
// } from "reactstrap";
// // core components
// import UserHeader from "backend/components/Headers/UserHeader.js";

// const JobDetails = () => {
//   return (
//     <>
//       <UserHeader />
//       {/* Page content */}
//     <Container className="mt--7" fluid >
//         <Row>
//           <Col  className="order-xl-1" xl="8">
//             <Card className="bg-secondary shadow">
//               <Row className="justify-content-center">
//                 <Col className="order-lg-2" lg="3">
//                   <div className="card-profile-image">
//                     <a href="#pablo" onClick={(e) => e.preventDefault()}>
//                       {/* <img
//                         alt="..."
//                         className="rounded-circle"
//                         src={
//                           require("../../assets/img/theme/angular.jpg")
//                             .default
//                         }
//                       /> */}
//                     </a>
//                   </div>
//                 </Col>
//               </Row>
//               <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
//                 <div className="d-flex justify-content-between">
//                   <Button
//                     className="mr-4"
//                     color="default"
//                     href="#pablo"
//                     onClick={(e) => e.preventDefault()}
//                     size="sm"
//                   >
//                     Update
//                   </Button>
//                 </div>
//               </CardHeader>
//               <CardBody className="pt-0 pt-md-4">
//                 <Row>
//                   <div className="col">
//                     <div className="card-profile-stats d-flex justify-content-center mt-md-5">
//                      </div>
//                   </div>
//                 </Row>
//                 <div className="text-center">
//                   <h3>
//                     Angular Test
//                     <span className="font-weight-light"></span>
//                   </h3>
//                   <div className="h5 font-weight-300">
//                     <i className="ni location_pin mr-2" />
//                     Skills assessments
//                   </div>
//                   {/* <div className="h5 mt-4">
//                     <i className="ni business_briefcase-24 mr-2" />
//                     Solution Manager - Creative Tim Officer
//                   </div> */}
                 
//                  <div>
//                  <hr className="my-4" />
//                   <div className="h2 font-weight-400">
//                     Question 1:  In the template method, what directive do you use to just register an input as a control?
//                   </div>
//                   <ol>
//                       <li>ngModel</li>
//                       <li> [ngModel]</li>
//                       <li> [(ngModel)] </li>
//                   </ol>
//                  </div>
//                  <div>
//                  <hr className="my-4" />
//                   <div className="h2 font-weight-400">
//                     Question 1:  In the template method, what directive do you use to just register an input as a control?
//                   </div>
//                   <ol>
//                       <li>ngModel</li>
//                       <li> [ngModel]</li>
//                       <li> [(ngModel)] </li>
//                   </ol>
//                  </div>
//                  <div>
//                  <hr className="my-4" />
//                   <div className="h2 font-weight-400">
//                     Question 1:  In the template method, what directive do you use to just register an input as a control?
//                   </div>
//                   <ol>
//                       <li>ngModel</li>
//                       <li> [ngModel]</li>
//                       <li> [(ngModel)] </li>
//                   </ol>
//                  </div>
//                  <div>
//                  <hr className="my-4" />
//                   <input className="h2 font-weight-400"
//                     placeholder="Question 1:  In the template method, what directive do you use to just register an input as a control?"
//                   />
//                   <ol>
//                       <li>ngModel</li>
//                       <li> [ngModel]</li>
//                       <li> [(ngModel)] </li>
//                   </ol>
//                  </div>
//                  <div>
//                  <hr className="my-4" />
//                   <div className="h2 font-weight-400">
//                     Question 1:  In the template method, what directive do you use to just register an input as a control?
//                   </div>
//                   <ol>
//                       <li>ngModel</li>
//                       <li> [ngModel]</li>
//                       <li> [(ngModel)] </li>
//                   </ol>
//                  </div>
//                 </div>
//               </CardBody>
//             </Card>
//           </Col>
         
              
//           <Col className="order-xl-1" xl="8">
//             <Card className="bg-secondary shadow">
              
//               <CardBody>
//                 <Form>
                  
                 
//                 </Form>
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };
import React from "react";
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

const JobDetails = () => {
      return (
<>
<Col className="order-xl-1" xl="8">
<Card className="bg-secondary shadow">
  <CardHeader className="bg-white border-0">
    <Row className="align-items-center">
      <Col xs="8">
        <h3 className="mb-0"></h3>
      </Col>
      <Col className="text-right" xs="4">
        <Button
          color="default"
          href="#pablo"
          onClick={(e) => e.preventDefault()}
          size="sm"
        >
          Update
        </Button>
      </Col>
    </Row>
  </CardHeader>
  <CardBody>
    <Form>
      <h6 className="heading-small text-muted mb-4">
        Angular Test information
      </h6>
      <div className="pl-lg-4">
        <Row>
          <Col lg="12">
          <label
                className="form-control-label"
                htmlFor="input-username">
                Question1:
              </label>
          <FormGroup>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder=" In the template method, what directive do you use to just register an input as a control?"></textarea>
         </FormGroup>
         </Col>
          <Col lg="6">
            <FormGroup>
              <label
                className="form-control-label"
                 > A-</label>
              <Input
                className="form-control-alternative"
               
                placeholder="ngModel"
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
              
                placeholder="[ngModel]"
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
                
                placeholder="[(ngModel)]"
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
               
                placeholder="no Responce"
                type="sting"
              />
            </FormGroup>
          </Col>
        </Row>
       
      </div>


      <div className="pl-lg-4">
        <Row>
          <Col lg="12">
          <label
                className="form-control-label"
                htmlFor="input-username">
                Question2:
              </label>
          <FormGroup>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="In this tag <form #f='ngForm'> , what correspond f ?"></textarea>
         </FormGroup>
         </Col>
          <Col lg="6">
            <FormGroup>
              <label
                className="form-control-label"
                 > A-</label>
              <Input
                className="form-control-alternative"
               
                placeholder="a component variable"
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
              
                placeholder="a local reference to the object of the form"
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
                
                placeholder="a function to submit the form"
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
               
                placeholder="no Responce"
                type="sting"
              />
            </FormGroup>
          </Col>
        </Row>
       
      </div>


      <div className="pl-lg-4">
        <Row>
          <Col lg="12">
          <label
                className="form-control-label"
                htmlFor="input-username">
                Question3:
              </label>
          <FormGroup>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder=" What is the correct syntax to retrieve the content of a field jumps in a form sportForm?"></textarea>
         </FormGroup>
         </Col>
          <Col lg="6">
            <FormGroup>
              <label
                className="form-control-label"
                 > A-</label>
              <Input
                className="form-control-alternative"
               
                placeholder="sportForm.jumps.value"
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
              
                placeholder="sportForm.value('jumps')"
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
                
                placeholder="sportForm.value['jumps']"
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
               
                placeholder="no Responce"
                type="sting"
              />
            </FormGroup>
          </Col>
        </Row>
       
      </div>
     
    </Form>
  </CardBody>
</Card>
</Col>
</>
      );
}
export default JobDetails;