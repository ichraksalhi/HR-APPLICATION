import React,{useState} from 'react'

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

const Mail  = ()=>{
   // const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");
    const [subject,setSubject] = useState("");

    const PostData = ()=>{
        fetch("http://localhost:5000/send",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
               // name,
                email,
                subject,
                message
            })
        })//.then(res=>res.json())
        .then(data=>{
            alert("your email has been successfully sent")
            console.log(data);
            setMessage('')
           // setName('')
            setSubject('')
            setEmail('')
        }).catch(err=>{
            console.log(err)
        })
    }
   return (
     <>
       <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
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
     
<Container className="mt--6" fluid style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
    
<Col className="mb-5 mb-xl-0" xl="5">
            <Card className="bg-secondary shadow" >
            <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Send Mail</h3>
                  </Col>
                  
                </Row>
              </CardHeader>
             <CardBody >
                <Form>
                  
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="10"  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <FormGroup>
                           <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email address
                          </label> 
                           <Input
                           className="form-control-alternative"
                            id="input-email"
                            type="email"
                            placeholder="To"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="10" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                           Object
                          </label>
                          <Input
                             className="form-control-alternative"
                            type="text"
                            placeholder="Object"
                            value={subject}
                            onChange={(e)=>setSubject(e.target.value)}
                            />
                        </FormGroup>
                      </Col>
                      <Col lg="10" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                           Email
                          </label>
                          <Input
                          className="form-control-alternative"
                            type="textarea"   
                            placeholder="email content"
                            value={message}
                            onChange={(e)=>setMessage(e.target.value)}
                            />
                          
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <Button
                    className="float-right"
                    color="info"
                    href="#pablo"
                    onClick={PostData}
                    size="sm"> Send Email   </Button>
                </Form>
              </CardBody>
              </Card>
              </Col>
              </Container>
            

     </>
   )
}


export default Mail