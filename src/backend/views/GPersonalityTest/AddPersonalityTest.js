import React, { useState } from "react";
// reactstrap components
import { Button, Card, CardHeader, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

import axios from "axios";

function AddPersonalityTest({ history }) {
  const [question, setQuestion] = useState("");
  const [optionA, setoptionA] = useState({text:"",value:""});
  const [optionB, setoptionB] = useState({text:"",value:""});
  const [optionC, setoptionC] = useState({text:"",value:""});
  const [optionD, setoptionD] = useState({text:"",value:""});

  // const [CoptionA,setCoptionA] = useState({text:"",value:""});
  // const [CoptionB,setCoptionB] = useState({text:"",value:""});
  // const [CoptionC,setCoptionC] = useState({text:"",value:""});
  // const [CoptionD,setCoptionD] = useState({text:"",value:""});



  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/PersonalityTest/add", {
        question,
        optionA,
        optionB,
        optionC,
        optionD,
        // CoptionA,
        // CoptionB,
        // CoptionC,
        // CoptionD
      })
      .then((response) => {
        alert(response.data.msg);
        history.push("/admin/personalityTestList");
      })
      .catch((err) => {
        alert(err.response.data.msg);
        setQuestion("");
        setoptionA({text:"",value:""});
        setoptionB({text:"",value:""});
        setoptionC({text:"",value:""});
        setoptionD({text:"",value:""});
      });
  };

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
              <form className="container" onSubmit={submitHandler}>
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
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
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
                    <input
                      type="text"
                      className="form-control"
                      id="" 
                      value={optionA}
                      onChange={(e) => setoptionA(e.target.value)}
                    />
                  </td>
                  <td className="col-md-4">
                    <label>
                      <strong>Color A</strong>
                    </label>
                    <select
                      className="custom-select "
                      id="inlineFormCustomSelectPref"
                      value={optionA}
                      onChange={(e) => setoptionA(e.target.value)}
                    >
                      <option value="Red">Red</option>
                      <option value="Yellow">Yellow</option>
                      <option value="Green">Green</option>
                      <option value="Blue">Blue</option>
                    </select>
                  </td>
                </Row>
                <Row className="form-group col-md-12">
                  <td className="col-md-6">
                    <label>
                      <strong>Option B</strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="  "
                      value={optionB}
                      onChange={(e) => setoptionB(e.target.value)}
                    />
                  </td>
                  <td className="col-md-4">
                    <label>
                      <strong>Color B</strong>
                    </label>
                    <select
                      className="custom-select "
                      id="inlineFormCustomSelectPref"
                      value={optionB}
                      onChange={(e) => setoptionB(e.target.value)}
                    >
                      <option value="Red">Red</option>
                      <option value="Yellow">Yellow</option>
                      <option value="Green">Green</option>
                      <option value="Blue">Blue</option>
                    </select>
                  </td>
                </Row>

                <Row className="form-group col-md-12">
                  <td className="col-md-6">
                    <label>
                      <strong>Option C</strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="  "
                      value={optionC}
                      onChange={(e) => setoptionC(e.target.value)}
                    />
                  </td>
                  <td className="col-md-4">
                    <label>
                      <strong>Color C</strong>
                    </label>
                    <select
                      className="custom-select "
                      id="inlineFormCustomSelectPref"
                      value={optionC}
                      onChange={(e) => setoptionC(e.target.value)}
                    >
                      <option value="Red">Red</option>
                      <option value="Yellow">Yellow</option>
                      <option value="Green">Green</option>
                      <option value="Blue">Blue</option>
                    </select>
                  </td>
                </Row>

                <Row className="form-group col-md-12">
                  <td className="col-md-6">
                    <label>
                      <strong>Option D</strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="  "
                      value={optionD}
                      onChange={(e) => setoptionD(e.target.value)}
                    />
                  </td>
                  <td className="col-md-4">
                    <label>
                      <strong>Color D</strong>
                    </label>
                    <select
                      className="custom-select "
                      id="inlineFormCustomSelectPref"
                      value={optionD}
                      onChange={(e) => setoptionD(e.target.value)}
                    >
                      <option value="Red">Red</option>
                      <option value="Yellow">Yellow</option>
                      <option value="Green">Green</option>
                      <option value="Blue">Blue</option>
                    </select>
                  </td>
                </Row>

                <Row className="form-group col-md-12"></Row>

                <div className="form-group">
                  <Button
                    className="btn btn-block col-md-2 "
                    color="primary"
                    type="submit"
                    value="Create Exercise Log"
                  >
                    Add
                  </Button>
                </div>

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

export default AddPersonalityTest;

// constructor(props) {
//   super(props);

//   this.onChangeQuestion = this.onChangeQuestion.bind(this);
//   this.onChangeOptionA = this.onChangeOptionA.bind(this);
//   this.onChangeOptionB = this.onChangeOptionB.bind(this);
//   this.onChangeOptionC = this.onChangeOptionC.bind(this);
//   this.onChangeOptionD = this.onChangeOptionD.bind(this);
//   // this.onChangeDate = this.onChangeDate.bind(this);
//   this.onSubmit = this.onSubmit.bind(this);

//   this.state = {
//     question: "",
//     optionA: "",
//     optionB: {},
//     optionC: {},
//     optionD: {},
//     dateCreated: new Date(),
//   };
// }

// onChangeQuestion(e) {
//   this.setState({
//     question: e.target.value,
//   });
// }

// onChangeOptionA(e) {
//   this.setState({
//     optionA: e.target.value,
//     // value: e.target.value,
//   });
// }
// onChangeOptionB(e) {
//   this.setState({
//     optionB: e.target.value,
//     //value: e.target.value,
//   });
// }
// onChangeOptionC(e) {
//   this.setState({
//     optionC: e.target.value,
//     //value: e.target.value,
//   });
// }
// onChangeOptionD(e) {
//   this.setState({
//     optionD: e.target.value,
//     //value: e.target.value,
//   });
// }

// // onChangeDate(date) {
// //   this.setState({
// //     date: date
// //   })
// // }

// onSubmit(e) {
//   e.preventDefault();

//   const q = {
//     question: this.state.question,
//     optionA: this.state.optionA,
//     optionB: this.state.optionB,
//     optionC: this.state.optionC,
//     optionD: this.state.optionD,
//     // date: this.state.date,
//   };

//   console.log(q);

//   // axios.post('http://localhost:5000/exercises/add', exercise)
//   //   .then(res => console.log(res.data));

//   window.location = "/admin/personalityTestList";
// }
