import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button } from "reactstrap";
import Pagination from './pagination.js';

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

import Header from '../../Layouts/Header'; 
//arch


const Reclamation = props => (
  <tr>
    <td>{props.reclamation.lastname}</td>
    <td>{props.reclamation.object}</td>
    <td>{props.reclamation.description}</td>
    <td>{props.reclamation.comment}</td>
    <td>{props.reclamation.type}</td>
    <td>{props.reclamation.etat}</td>
  
   
    <td>
       <a href="#" onClick={() => { props.deleteReclamation(props.reclamation._id) }}>delete</a>
     
</td>

  </tr>
)

//arch






export default class Reclamations extends Component {

  
  constructor(props) {
    super(props);

    this.deleteReclamation = this.deleteReclamation.bind(this)
    
    //this.handleChange = this.handleChange.bind(this)


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
       handleChange={this.handleChange}
       
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
        <Header/>
       
       
        <section className="ftco-section contact-section bg-light">
      <div className="container">
      
        <Row className="mt-5">
          <div className="col">
            <Card className="bg-default shadow"></Card>
      <div>
        <h3>Reclamation list</h3>
       



        <Table
                className="align-items-center table-flush"
                responsive
              >
          <thead className="thead">
            <tr>
              <th scope="col">lastname</th>
              <th scope="col">object</th>
              <th scope="col">Description</th>
              <th scope="col">comment</th>
              <th scope="col">type</th>
              <th scope="col">etat</th>
              <th scope="col">delete</th>
              <th scope="col">Actions</th>
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
      </div>
      </div>
        </Row>

        

         
     
      </div>
    </section>
      
      </> )
  }
}



