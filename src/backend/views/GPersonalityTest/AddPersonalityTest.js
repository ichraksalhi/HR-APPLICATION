import React from "react";
// reactstrap components
import {
  Badge,
  Button,
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
} from "reactstrap";
import { Link } from "react-router-dom";





class AddPersonalityTest extends React.Component {
  render() {
    return (
      <>
        <div
          className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            minHeight: "300px",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          {/* Mask */}
          <span className="mask bg-gradient-green" />
          {/* Header container */}
          <Container className="d-flex align-items-center" fluid>
            <div> </div>
          </Container>
        </div>



        <Container className="mt--7" fluid>
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Add Question</h3>
                </CardHeader>
                <form className="container">
                  <div className="form-group">
                    <br />

                    <div className="form-group col-md-12">
                      <label>
                        <strong>Question</strong>
                      </label>
                      <div className="md-form">
                        <textarea
                          id="form10"
                          className="md-textarea form-control"
                          rows="3"
                          placeholder="Write your question here.."
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  {/* COLORS */}
                  <Row className="form-group col-md-12">
                    <td className="col-md-6">
                      <label>
                        <strong>Option A</strong>
                      </label>
                      <input type="text" className="form-control" id="  " />
                    </td>
                    <td className="col-md-4">
                      <label>
                        <strong>Color A</strong>
                      </label>
                      <select
                        className="custom-select "
                        id="inlineFormCustomSelectPref"
                      >
                        <option selected>-</option>
                        <option value="1">Red</option>
                        <option value="2">Yellow</option>
                        <option value="3">Green</option>
                        <option value="3">Blue</option>
                      </select>
                    </td>
                  </Row>
                  <Row className="form-group col-md-12">
                    <td className="col-md-6">
                      <label>
                        <strong>Option B</strong>
                      </label>
                      <input type="text" className="form-control" id="  " />
                    </td>
                    <td className="col-md-4">
                      <label>
                        <strong>Color B</strong>
                      </label>
                      <select
                        className="custom-select "
                        id="inlineFormCustomSelectPref"
                      >
                        <option selected>-</option>
                        <option value="1">Red</option>
                        <option value="2">Yellow</option>
                        <option value="3">Green</option>
                        <option value="3">Blue</option>
                      </select>
                    </td>
                  </Row>
                  <Row className="form-group col-md-12">
                    <td className="col-md-6">
                      <label>
                        <strong>Option C</strong>
                      </label>
                      <input type="text" className="form-control" id="  " />
                    </td>
                    <td className="col-md-4">
                      <label>
                        <strong>Color C</strong>
                      </label>
                      <select
                        className="custom-select "
                        id="inlineFormCustomSelectPref"
                      >
                        <option selected>-</option>
                        <option value="1">Red</option>
                        <option value="2">Yellow</option>
                        <option value="3">Green</option>
                        <option value="3">Blue</option>
                      </select>
                    </td>
                  </Row>

                  <Row className="form-group col-md-12">
                    <td className="col-md-6">
                      <label>
                        <strong>Option D</strong>
                      </label>
                      <input type="text" className="form-control" id="  " />
                    </td>
                    <td className="col-md-4">
                      <label>
                        <strong>Color D</strong>
                      </label>
                      <select
                        className="custom-select "
                        id="inlineFormCustomSelectPref"
                      >
                        <option selected>-</option>
                        <option value="1">Red</option>
                        <option value="2">Yellow</option>
                        <option value="3">Green</option>
                        <option value="3">Blue</option>
                      </select>
                    </td>
                  </Row>

                  <Row className="form-group col-md-12">
                    
                  </Row>

                  <Button className="btn btn-block col-md-2 " color="primary">
                    <Link
                        type="submit"
                      style={{ color: "white" }}
                    >
                      Add 
                    </Link>
                  </Button>

                  <Button className="btn btn-block col-md-2 " color="danger">
                    <Link
                      to="/admin/personalityTestList"
                      style={{ color: "white" }}
                    >
                      Cancel
                    </Link>
                  </Button>

                  <br />
                  <br />
                </form>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default AddPersonalityTest;

// import React from "react";
// import {
//     Button,
//     Card,
//     CardHeader,
//     CardBody,
//     FormGroup,
//     Form,
//     Input,
//     Container,
//     Row,
//     Col,
// } from "reactstrap";

// const AddPersonalityTest = () => {
//     return (
//         <>
//             <Col className="order-xl-1" xl="8">
//                 <Card className="bg-secondary shadow">
//                     <CardHeader className="bg-white border-0">
//                         <Row className="align-items-center">
//                             <Col xs="8">
//                                 <h3 className="mb-0"></h3>
//                             </Col>
//                             <Col className="text-right" xs="4">
//                                 <Button
//                                     color="default"
//                                     href="#pablo"
//                                     onClick={(e) => e.preventDefault()}
//                                     size="sm"
//                                 >
//                                     Add
//         </Button>
//                             </Col>
//                         </Row>
//                     </CardHeader>
//                     <CardBody>
//                         <Form>
//                             <h6 className="heading-small text-muted mb-4">
//                                 Personality Test
//       </h6>
//                             <div className="pl-lg-4">
//                                 <Row>
//                                     <Col lg="12">
//                                         <label
//                                             className="form-control-label"
//                                             htmlFor="input-username">
//                                             Question1:
//               </label>
//                                         <FormGroup>
//                                             <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder=" In the template method, what directive do you use to just register an input as a control?"></textarea>
//                                         </FormGroup>
//                                     </Col>
//                                     <Col lg="6">
//                                         <FormGroup>
//                                             <label
//                                                 className="form-control-label"
//                                             > A-</label>
//                                             <Input
//                                                 className="form-control-alternative"

//                                                 placeholder="ngModel"
//                                                 type="string"
//                                             />
//                                         </FormGroup>
//                                     </Col>
//                                     <Col lg="6">
//                                         <FormGroup>
//                                             <label
//                                                 className="form-control-label"
//                                             > B-</label>
//                                             <Input
//                                                 className="form-control-alternative"

//                                                 placeholder="[ngModel]"
//                                                 type="string"
//                                             />
//                                         </FormGroup>
//                                     </Col>
//                                     <Col lg="6">
//                                         <FormGroup>
//                                             <label
//                                                 className="form-control-label"
//                                             > C-</label>
//                                             <Input
//                                                 className="form-control-alternative"

//                                                 placeholder="[(ngModel)]"
//                                                 type="string"
//                                             />
//                                         </FormGroup>
//                                     </Col>
//                                     <Col lg="6">
//                                         <FormGroup>
//                                             <label
//                                                 className="form-control-label"
//                                             > D-</label>
//                                             <Input
//                                                 className="form-control-alternative"

//                                                 placeholder="no Responce"
//                                                 type="sting"
//                                             />
//                                         </FormGroup>
//                                     </Col>
//                                 </Row>

//                             </div>

//                         </Form>
//                     </CardBody>
//                 </Card>
//             </Col>
//         </>
//     );
// }
// export default AddPersonalityTest;
