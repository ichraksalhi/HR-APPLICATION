

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
                                    Add
        </Button>
                            </Col>
                        </Row>
                    </CardHeader>
                    <CardBody>
                        <Form>
                            <h6 className="heading-small text-muted mb-4">
                                Personality Test 
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
export default AddPersonalityTest;