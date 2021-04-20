import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import Pagination from './pagination.js';
import axios from 'axios';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

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
      <td>{props.reclamation.username}</td>
      <td>{props.reclamation.object}</td>
      <td>{props.reclamation.description}</td>
      <td>{props.reclamation.comment}</td>
      <td>{props.reclamation.type}</td>
      <td>{props.reclamation.etat}</td>
    



      <td>
  
        
  </td>
  <td>
 
</td>


     
      <td>
  
         <Button color="info" type="button"   
          size={'sm'}
         onClick={() => { props.deleteReclamation(props.reclamation._id) }} >
          Delete
        </Button>
  </td>
  <td>
         
  
      </td>
    </tr>
  )
  
  //arch
  
  
  
  
  
  
  export default class ListReclamations extends Component {
  
    
    constructor(props) {
      super(props);

     
  
      this.deleteReclamation = this.deleteReclamation.bind(this)
      
    //  this.handleChange = this.handleChange.bind(this)
  
  
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
  

   

    deleteReclamation(id) {
      axios.delete('http://localhost:5000/Reclamation/'+id)
        .then(response => { console.log(response.data)});
  
      this.setState({
        reclamations: this.state.reclamations.filter(el => el._id !== id)
      })
    }
  
   
  
   
  
   
  
    reclamationList() {
      return this.state.reclamations.map(currentreclamation => {
        return <Reclamation reclamation={currentreclamation}
        
         
         deleteReclamation={this.deleteReclamation} key={currentreclamation._id}/>;
      })
    }
    //arch
  
   
  
    
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
                <th scope="col">Username</th>
                <th scope="col">object</th>
                <th scope="col">Description</th>
                <th scope="col">comment</th>
                <th scope="col">type</th>
                <th scope="col">etat</th>
                <th scope="col">sms</th>
                <th scope="col">whats</th>
                <th scope="col">delete</th>
                <th scope="col">archiver</th>
              
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
  
  
  