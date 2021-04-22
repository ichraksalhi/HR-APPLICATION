import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import Pagination from "./pagination.js";
import axios from "axios";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { Component } from "react";
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  Table,
  Container,
  Row,
} from "reactstrap";

const Question = (props) => (
  <tr>
    <td>{props.question.question}</td>
    <td>{props.question.optionA.text}</td>
        <td>{props.question.optionB.text}</td>
        <td>{props.question.optionC.text}</td>
        <td>{props.question.optionD.text}</td>
    <td>{props.question.dateCreated}</td>

    <td>
      <Button color="primary" size="sm">
        <Link to="/admin/personalityTestDetail" style={{ color: "white" }}>
          Details
        </Link>
      </Button>
    </td>

    <td>
      <Button
        color="danger"
        type="button"
        size={"sm"}
        onClick={() => {
          props.deleteQuestion(props.question._id);
        }}
      >
        Delete
      </Button>
    </td>
    <td></td>
  </tr>
);

export default class ListQuestions extends Component {
  constructor(props) {
    super(props);

    this.deleteQuestion = this.deleteQuestion.bind(this);

    //  this.handleChange = this.handleChange.bind(this)

    this.state = {
      questions: [],

      loading: false,
      currentPage: 0,
      postsPerPage: 2,
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/PersonalityTest/")
      .then((response) => {
        this.setState({ questions: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteQuestion(id) {
    axios
      .delete("http://localhost:5000/PersonalityTest/" + id)
      .then((response) => {
        console.log(response.data);
      });

    this.setState({
      questions: this.state.questions.filter((el) => el._id !== id),
    });
  }

  questionList() {
    return this.state.questions.map((currentquestion) => {
      return (
        <Question
          question={currentquestion}
          deleteQuestion={this.deleteQuestion}
          key={currentquestion._id}
        />
      );
    });
  }
  //arch

  render() {
    const currentPage = this.state.currentPage;
    const postsPerPage = this.state.postsPerPage;
    const loading = this.state.loading;

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = this.state.questions.slice(
      indexOfFirstPost,
      indexOfLastPost
    );

    // Change page
    const paginate = (pageNumber) => this.setState({ pageNumber });

    //archiv

    const { question } = this.props;

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
          <span className="mask bg-gradient-purple" />
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
                  <h3 className="mb-0">Questions List</h3>

                  <div className="col text-right">
                  <Button color="success" size="sm">
                    <Link
                      to="/admin/addPersonalityTest"
                      style={{ color: "white" }}
                    >
                      Add
                    </Link>
                  </Button></div>
                </CardHeader>

                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead">
                    <tr>
                        <th scope="col">Question</th>
                        <th scope="col">Option A</th>
                        <th scope="col">Option B</th>
                        <th scope="col">Option C</th>
                        <th scope="col">Option D</th>
                        <th scope="col">Date Creation</th>
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>
                        <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>{this.questionList()}</tbody>
                </Table>

                <CardFooter>
                  <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={this.state.questions.length}
                    paginate={paginate}
                  />
                </CardFooter>
              </Card>
            </div>
          </Row>
          {/* Dark table */}
        </Container>
      </>
    );
  }
}

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Details from "./Details";

// // reactstrap components
// import {
//     Button,
//     Card,
//     CardHeader,
//     CardBody,
//     NavItem,
//     NavLink,
//     Nav,
//     Progress,
//     Table,
//     Container,
//     Row,
//     Col,
// } from "reactstrap";

// const ListPersonalityTest = (props) => {
//     const [activeNav, setActiveNav] = useState(1);
//     const [chartExample1Data, setChartExample1Data] = useState("data1");

//     return (
//         <>

//             <div
//                 className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
//                 style={{
//                     minHeight: "100px",
//                     backgroundSize: "cover",
//                     backgroundPosition: "center top",
//                 }}
//             >
//                 {/* Mask */}
//                 <span className="mask bg-gradient-purple" />
//                 {/* Header container */}
//                 <Container className="d-flex align-items-center" fluid>
//                     <Row></Row>
//                 </Container>
//             </div>

//             {/* Page content */}
//             <Container className="mt--5" fluid >
//                 <Row className="mt-5">
//                     <Col className="mb-5 mb-xl-0" xl="8">
//                         <Card className="shadow">
//                             <CardHeader className="border-0">
//                                 <Row className="align-items-center">
//                                     <div className="col-md-8">
//                                         <h3 className="mb-2">Personality Test Questions List </h3>
//                                     </div>
//                                     {/* search bar */}
//                                     <div className="col text-right">
//                                         <Button color="red"
//                                             href="#pablo"
//                                             onClick={(e) => e.preventDefault()}
//                                             size="sm" ><Link to="/admin/addPersonalityTest" style={{color:'white'}}>Add</Link></Button>
//                                     </div>
//                                     {/* search bar */}

//                                 </Row>
//                             </CardHeader>
//                             <Table className="align-items-center table-flush" responsive>
//                                 <thead className="thead-light">
//                                     <tr>
//                                         <th scope="col">Personality Test</th>
//                                         <th scope="col">Creation Date</th>
//                                         <th scope="col">-</th>
//                                         <th scope="col">-</th>
//                                         <th scope="col">-</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     <tr>
//                                         <th scope="row">DISC</th>

//                                         <td>1/04/2020</td>

//                                         <td><Button color="danger"
//                                             href="#pablo"
//                                             onClick={(e) => e.preventDefault()}
//                                             size="sm" >Delete</Button></td>

//                                         <td><Button color="success"
//                                             href="#pablo"
//                                             onClick={(e) => e.preventDefault()}
//                                             size="sm" >Send Test</Button></td>

//                                         <td><Button color="primary" size="sm" ><Link to="/admin/personalityTestDetail" style={{color:'white'}}>Details</Link></Button></td>

//                                     </tr>
//                                     <tr>
//                                         <th scope="row">Java</th>

//                                         <td>25/03/2021</td>

//                                         <td><Button color="danger"
//                                             href="#pablo"
//                                             onClick={(e) => e.preventDefault()}
//                                             size="sm" >Delete</Button></td>
//                                         <td><Button color="success"
//                                             href="#pablo"
//                                             onClick={(e) => e.preventDefault()}
//                                             size="sm" >Send Test</Button></td>
//                                             <td><Button color="primary" size="sm" ><Link to="/admin/personalityTestDetail" style={{color:'white'}}>Details</Link></Button></td>

//                                     </tr>
//                                     <tr>
//                                         <th scope="row">Django</th>

//                                         <td>3/04/2021</td>

//                                         <td><Button color="danger"
//                                             href="#pablo"
//                                             onClick={(e) => e.preventDefault()}
//                                             size="sm" >Delete</Button></td>

//                                         <td><Button color="success"
//                                             href="#pablo"
//                                             onClick={(e) => e.preventDefault()}
//                                             size="sm" >Send Test</Button></td>
//                                             <td><Button color="primary" size="sm" ><Link to="/admin/personalityTestDetail" style={{color:'white'}}>Details</Link></Button></td>

//                                     </tr>
//                                 </tbody>
//                             </Table>
//                         </Card>
//                     </Col>

//                 </Row>
//             </Container>
//         </>
//     );
// };

// export default ListPersonalityTest;
