

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

const AddPersonalityTest = () => {
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
                                    Add Hr Account
        </Button>
                            </Col>
                        </Row>
                    </CardHeader>
                    <CardBody>
                        <Form>
                            <h6 className="heading-small text-muted mb-4">Add Hr</h6>
                            <div className="pl-lg-4">
                                <Row>
                                    <Col lg="6">
                                        <FormGroup>
                                            <label
                                                className="form-control-label"
                                            >Firstname</label>
                                            <Input
                                                className="form-control-alternative"

                                                placeholder=""
                                                type="string"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col lg="6">
                                        <FormGroup>
                                            <label
                                                className="form-control-label"
                                            >Lastname</label>
                                            <Input
                                                className="form-control-alternative"

                                                placeholder=""
                                                type="string"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col lg="12">
                                        <FormGroup>
                                            <label
                                                className="form-control-label"
                                            >Email</label>
                                            <Input
                                                className="form-control-alternative"

                                                placeholder=""
                                                type="string"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col lg="6">
                                        <FormGroup>
                                            <label
                                                className="form-control-label"
                                            >Password</label>
                                            <Input
                                                className="form-control-alternative"

                                                placeholder=""
                                                type="string"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col lg="6">
                                        <FormGroup>
                                            <label
                                                className="form-control-label"
                                            >Avatar</label>
                                            <Input
                                                className="form-control-alternative"

                                                placeholder=""
                                                type="sting"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col lg="12">
                                        <FormGroup>
                                            <label
                                                className="form-control-label"
                                            >Company</label>
                                            <Input
                                                className="form-control-alternative"

                                                placeholder=""
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
export default AddPersonalityTest;