import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import Pagination from './pagination.js';
import axios from 'axios';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

//import CallModal from "./CallModal.js";


import { Component } from 'react';
//import { Button } from "reactstrap";
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
 
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col
} from "reactstrap";
// core components
import Header from "backend/components/Headers/Header.js";

const Reclamation = props => (
    <tr>
      <td>{props.reclamation.lastname}</td>
      <td>{props.reclamation.object}</td>
      <td>{props.reclamation.description}</td>
      <td>{props.reclamation.comment}</td>
      <td>{props.reclamation.type}</td>
      <td>{props.reclamation.etat}</td>
    



      <td>
  
         <Button color="primary" type="button"   
          size={'sm'}
         onClick={() => { props.smsReclamation(props.reclamation._id) }} >
          Sms
        </Button>
  </td>

  <td>
  
  <Button color="warning" type="button"   
   size={'sm'}
  onClick={() => { props.whatsReclamation(props.reclamation._id) }} >
   whats
 </Button>
</td>


     
      <td>
  
         <Button color="danger" type="button"   
          size={'sm'}
         onClick={() => { props.deleteReclamation(props.reclamation._id) }} >
          Delete
        </Button>
  </td>
  
  <td>
         <Button
                  className={'float-right'}
                  color={!props.reclamation.archived ? 'secondary' : 'success'}
                  size={'sm'}
                  onClick={() => props.handleChange(props.reclamation._id , props.reclamation._id)}
                
  
                >
                  {!props.reclamation.archived ? 'Archive' : 'Unarchive'}
                </Button>
  
  
      </td>

     
      <td>
  
  <Button color="success" type="button"   
   size={'sm'}
  onClick={() => { props.approuveReclamation(props.reclamation._id) }} >
   approuver
 </Button>
</td>


<td>
  
  <Button color="danger" type="button"   
   size={'sm'}
  onClick={() => { props.deapprouveReclamation(props.reclamation._id) }} >
   despprouver
 </Button>
</td>




    </tr>
  )
  
  
  
  
  export default class ListReclamations extends Component {
  
    
    constructor(props) {
      super(props);

      //sms
      this.smsReclamation = this.smsReclamation.bind(this)
     
      //whats
      this.whatsReclamation = this.whatsReclamation.bind(this)
  
      this.deleteReclamation = this.deleteReclamation.bind(this)
      this.unarchiveReclamation = this.unarchiveReclamation.bind(this)
      this.archiveReclamation = this.archiveReclamation.bind(this)
      this.approuveReclamation = this.approuveReclamation.bind(this)
      this.deapprouveReclamation = this.deapprouveReclamation.bind(this)
      this.handleChangeapp = this.handleChangeapp.bind(this)
  
      this.handleChange = this.handleChange.bind(this)
  
  
      this.state = {reclamations: [],
      
      
        loading: false,
        currentPage: 0,
        postsPerPage: 2,
    
      };
  
     
    }
  
    componentDidMount() {
      axios.get('http://localhost:5000/Reclamation/')
        .then(response => {
          this.setState({ reclamations: response.data })
        })
        .catch((error) => {
          console.log(error);
        })

    }
  

    //sms 


    smsReclamation() {
      axios.post('http://localhost:5000/Reclamation/sms')
      .then(res => console.log(res.data));
    }
  

    //whats
    whatsReclamation() {
      axios.post('http://localhost:5000/Reclamation/whats')
      .then(res => console.log(res.data));
    }
  
//endwhats


    deleteReclamation(id) {
      axios.delete('http://localhost:5000/Reclamation/'+id)
        .then(response => { console.log(response.data)});
  
      this.setState({
        reclamations: this.state.reclamations.filter(el => el._id !== id)
      })
    }
  
    unarchiveReclamation(id) {
      axios.put('http://localhost:5000/Reclamation/unarchive/'+id)
        .then(response => { console.log(response.data)});
  
      this.setState({
        reclamations: this.state.reclamations.filter(el => el._id !== id)
      })
      //window.location = '/admin/ListReclamations';
    }
  
    archiveReclamation(id) {
      axios.put('http://localhost:5000/Reclamation/archive/'+id)
        .then(response => { console.log(response.data)});
  
      this.setState({
        reclamations: this.state.reclamations.filter(el => el._id !== id)
      })
    }
  
    handleChange = (archived, id) => {
      if (archived) this.unarchiveReclamation(id);
   this.archiveReclamation(id);
  
    };

    //approuvechange
    handleChangeapp = (etat, id) => {
      if (etat !== 'treated') this.approuveReclamation(id);
   if (etat == 'treated') this.deapprouveReclamation(id);
    };

    ///approuve

    approuveReclamation(id) {
      axios.put('http://localhost:5000/Reclamation/accepter/'+id)
        .then(response => { console.log(response.data)});
        window.location = '/admin/ListReclamations';
  
    }
    
    ///deapprouve

    deapprouveReclamation(id) {
      axios.put('http://localhost:5000/Reclamation/refuser/'+id)
        .then(response => { console.log(response.data)});
        window.location = '/admin/ListReclamations';
  
    }


  
    reclamationList() {
      return this.state.reclamations.map(currentreclamation => {
        return <Reclamation reclamation={currentreclamation}
         handleChange={this.handleChange}
         handleChangeapp={this.handleChangeapp}
          unarchiveReclamation={this.unarchiveReclamation}
          archiveReclamation={this.archiveReclamation} 
          approuveReclamation={this.approuveReclamation} 
          deapprouveReclamation={this.deapprouveReclamation} 
          smsReclamation={this.smsReclamation}
        
          whatsReclamation={this.whatsReclamation}
         deleteReclamation={this.deleteReclamation} key={currentreclamation._id}/>;
      })
    }
  
    
  
    
    render() {  
  

     
  
     
     
      const currentPage = this.state.currentPage;
      const postsPerPage = this.state.postsPerPage;
      const loading = this.state.loading;
  
  
  
       // Get current posts
       const indexOfLastPost = currentPage * postsPerPage;
       const indexOfFirstPost = indexOfLastPost - postsPerPage;
       const currentPosts = this.state.reclamations.slice(indexOfFirstPost, indexOfLastPost);
  
  
  
  
       // Change page
       const paginate = pageNumber => this.setState({ pageNumber }); 
  
       //archiv
       
       const { reclamation } = this.props;
  
      return (
       
        
        <>
       
       <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "400px",
          backgroundImage:
          "url(" +
          require("../../assets/img/theme/rec.jpg").default +
          ")",
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
                <h3 className="mb-0">List of claims</h3>
              </CardHeader>
      
         
     
  
          <Table
                 className="align-items-center table-flush" responsive
                >
            <thead className="thead">
              <tr>
                <th scope="col">name</th>
                <th scope="col">object</th>
                <th scope="col">Description</th>
                <th scope="col">comment</th>
                <th scope="col">type</th>
                <th scope="col">etat</th>
                <th scope="col">sms</th>
              
                <th scope="col">whats</th>
                <th scope="col">delete</th>
                <th scope="col">archiver</th>
                <th scope="col">approuver</th>
                <th scope="col">desapprouve</th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
              { this.reclamationList() }
         
             
            
    
        
            </tbody>
            
          </Table>
          
          <Pagination
                          postsPerPage={postsPerPage}
                          totalPosts={this.state.reclamations.length}
                          paginate={paginate}
                      /> 




</Card>
          </div>
        </Row>
        {/* Dark table */}
       
      </Container>

        </> )
    }
  }
  
  
  