import React, { useState } from "react";
import { Link } from "react-router-dom";
import Details from "./Details";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
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


const ListPersonalityTest = (props) => {
    const [activeNav, setActiveNav] = useState(1);
    const [chartExample1Data, setChartExample1Data] = useState("data1");


    return (
        <>

            <div
                className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                style={{
                    minHeight: "100px",
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                }}
            >
                {/* Mask */}
                <span className="mask bg-gradient-purple" />
                {/* Header container */}
                <Container className="d-flex align-items-center" fluid>
                    <Row></Row>
                </Container>
            </div>

            {/* Page content */}
            <Container className="mt--5" fluid >
                <Row className="mt-5">
                    <Col className="mb-5 mb-xl-0" xl="8">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <Row className="align-items-center">
                                    <div className="col-md-8">
                                        <h3 className="mb-2">Personality Test Questions List </h3>
                                    </div>
                                    {/* search bar */}
                                    <div className="col text-right">
                                        <Button color="red"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                            size="sm" ><Link to="/admin/addPersonalityTest" style={{color:'white'}}>Add</Link></Button>
                                    </div>
                                    {/* search bar */}

                                </Row>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Personality Test</th>
                                        <th scope="col">Creation Date</th>
                                        <th scope="col">-</th>
                                        <th scope="col">-</th>
                                        <th scope="col">-</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">DISC</th>

                                        <td>1/04/2020</td>


                                        <td><Button color="danger"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                            size="sm" >Delete</Button></td>

                                        <td><Button color="success"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                            size="sm" >Send Test</Button></td>

                                        <td><Button color="primary" size="sm" ><Link to="/admin/personalityTestDetail" style={{color:'white'}}>Details</Link></Button></td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Java</th>

                                        <td>25/03/2021</td>


                                        <td><Button color="danger"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                            size="sm" >Delete</Button></td>
                                        <td><Button color="success"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                            size="sm" >Send Test</Button></td>
                                            <td><Button color="primary" size="sm" ><Link to="/admin/personalityTestDetail" style={{color:'white'}}>Details</Link></Button></td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Django</th>

                                        <td>3/04/2021</td>


                                        <td><Button color="danger"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                            size="sm" >Delete</Button></td>

                                        <td><Button color="success"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                            size="sm" >Send Test</Button></td>
                                            <td><Button color="primary" size="sm" ><Link to="/admin/personalityTestDetail" style={{color:'white'}}>Details</Link></Button></td>

                                    </tr>
                                </tbody>
                            </Table>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </>
    );
};

export default ListPersonalityTest;