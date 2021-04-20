import React, { Component } from 'react';
import axios from 'axios';
//import DatePicker from 'react-datepicker';
//import "react-datepicker/dist/react-datepicker.css";

import { Link } from "react-router-dom";
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


import Header from '../../Layouts/Header';

//import 'react-notifications/lib/notifications.css';
//import {NotificationContainer, NotificationManager} from 'react-notifications';
//import ReactWhatsapp from 'react-whatsapp';




export default class NewReclamation extends Component {
  constructor(props) {
    super(props);


    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeObject = this.onChangeObject.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeComment = this.onChangeComment.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeEtat = this.onChangeEtat.bind(this);
    this.onChangeArchived = this.onChangeArchived.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {archived: 'false'};

    this.state = {
        lastname: '',
      object: '',
      description: '',
      comment: '',
      type: '',
      etat: '',
      //archived: 'false',
      user: []
    }
  }

 /* createNotification = (type) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
          NotificationManager.success('Success message', 'Title here');
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
      }
    };
  };*/

  componentDidMount() {
    axios.get('http://localhost:5000/user/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            user: response.data.map(user => user.lastname),
            lastname: response.data[0].lastname
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }
  onChangeLastname(e) {
    this.setState({
        lastname: e.target.value
    })
  }

  onChangeObject(e) {
    this.setState({
      object: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeComment(e) {
    this.setState({
      comment: e.target.value
    })
  }

  onChangeType(e) {
    this.setState({
      type: e.target.value
    })
  }
  onChangeEtat(e) {
    this.setState({
      etat: e.target.value
    })
  }
  onChangeArchived(e) {
    this.setState({
      archived: false
    })
  }

 

  onSubmit(e) {
    e.preventDefault();

    const reclamation = {
      username: this.state.username,
      object: this.state.object,
      description: this.state.description,
      comment: this.state.comment,
      type: this.state.type,
      etat: this.state.etat,
      archived: this.state.archived,
    }

    console.log(reclamation);

    axios.post('http://localhost:5000/Reclamation/add', reclamation)
      .then(res => console.log(res.data));

    window.location = '/Reclamations';
  }

  render() {
    return (
      <>
        <Header/>

    <div>
    <section className="ftco-section contact-section bg-light">
      <div className="container">
        <div className="row block-9">
        <div className="col-md-6 d-flex">
          
            
      <form onSubmit={this.onSubmit}  className="bg-white p-5 contact-form">
      <center>
              <h1>Reclamation</h1>
        
              </center>
      
     
        <div className="form-group"> 
          <label>username: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.user.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>object: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.object}
              onChange={this.onChangeObject}
              />
        </div>
       
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>

       
       
        <div className="form-group"> 
          <label>comm: </label>
          <input  type="text" 
              required
              className="form-control" 
              value={this.state.comment}
              onChange={this.onChangeComment}
              />
        </div>
        <div className="form-group"> 
          <label>type: </label>
        <select  required
              className="form-control"   value={this.state.type} onChange={this.onChangeType} >            
                              <option value="probleme">probleme</option>
                              <option value="suggestion"> suggestion</option>
                              <option value="autres">autres</option>
                            </select>
     
      </div>
      
        
        <div className="form-group"> 
      
          <label>etat: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.etat}
              onChange={this.onChangeEtat}
              />
        </div>
       
        <div className="form-group"    >
          <input type="submit" value="Create claim" className="btn btn-primary" />
        
          
        </div >
      </form>
</div>
      <div className="col-md-6 order-md-last d-flex">
          <img src={require('../../assets/images/reclamation.jpg').default } style={{height: '630px',width: '532px'}}/> 
            <div id="map" className="bg-white"></div>
          </div>
        </div>
      </div>
    </section>
   

    </div>
    </> )
  }
}