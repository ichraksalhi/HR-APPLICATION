import React, {useState} from "react";
// reactstrap components
import {
  Card,
  CardHeader,
  Container,
  Row,
  Button
} from "reactstrap";
import { addJob } from '../../../actions/job';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom' ;
import axios from 'axios';
// core components
import UserHeader from "backend/components/Headers/UserHeader.js";

const PostJob =({ addJob })=>  {
  const [formData, setFormData] = useState({
    title: '', 
    experience: '',
    studyLevel: '',
    salary: '',
    description: '',
    contractType: '',
    location: '',
    requirements: [
      { "text": "Anglais"},
      { "text": "Français"}
    ],
    skills: [
      {"title": "Symfony4"},
      {"title": "Symfony3"},
      {"title": "Angular"}
    ] 
   });
   const {title,description,studyLevel,experience,location,salary,contractType,requirements,skills} = formData;
   const onChange = e =>setFormData({...formData, [e.target.name]: e.target.value}); //using onChange for every field
  //validation

  const onSubmit = async e =>{
    e.preventDefault();
    //console.log(formData)
    addJob({title,description,studyLevel,experience,location,salary,contractType,requirements,skills});
  };
    //console.log(formData);
   /* onSubmit={e => {
      e.preventDefault();
      addJob({ formData });
      setFormData('');
    }} */
           //register({firstname,lastname, email,password});  
    return (
      <>
        <UserHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Add Job</h3>
                <div className="col text-right">
                  <Button color="danger" size="sm">
                    <Link
                      to="/admin/ListJobs"
                      style={{ color: "white" }}
                    >
                      Cancel
                    </Link>
                  </Button>
                  </div>
              </CardHeader>
              <form className="container" 
              onSubmit={e => onSubmit(e)}>
                  <div className="form-group">
                  <label><strong>Title</strong></label>
                  <input type="text" className="form-control" name="title" placeholder="Title..." value={title} onChange={e=> onChange(e)}/>
                  </div>
                  <div className="form-group">
                  <label><strong>Location</strong></label>
                  <input type="text" className="form-control" name="location" placeholder="Kap IT Tunisia Rue Ghar el Melh Tunis Tunisia, Tunis, 1053, Tunisia." value={location} onChange={e=> onChange(e)}/>
                  </div>
                <div className="form-group">
                <label><strong>Salary</strong></label>
                  <input type="number" className="form-control" name="salary" placeholder="eg: 2500 dt" value={salary} onChange={e=> onChange(e)}/>
                </div>
                <div className="form-group">
                <label><strong>Study Level</strong></label>
                  <input type="text" className="form-control" name="experience" placeholder="eg: engineer (bac+5)" value={experience} onChange={e=> onChange(e)}/>
                </div>
                <div className="form-group">
                <label><strong>Experience</strong></label>
                  <input type="text" className="form-control" name="studyLevel" placeholder="eg: 2-4 years" value={studyLevel} onChange={e=> onChange(e)}/>
                </div>
                <div className="form-group">
                <label><strong>Description</strong></label>
                <div className="md-form">
                <i className="fas fa-pencil-alt prefix"></i>
                <textarea id="form10" className="md-textarea form-control" rows="3" name="description" value={description} onChange={e=> onChange(e)}></textarea>
              </div>
                </div>
                <label><strong>contract Type</strong></label>
                <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref"
                       value={contractType} onChange={e=> onChange(e)} name="contractType">
                <option selected>CDI</option>
                <option value="Full-Time">Full-Time</option>
                <option value="SIVP">SIVP</option>
                <option value="Freelance">Freelance</option>
                <option value="Traineeship">Traineeship</option>
                </select>
 <button type="submit" className="btn btn-primary btn-block" >ADD</button>
                  <br/><br/>
        </form>

            </Card>
          </div>
        </Row>
        </Container>
      </>
    );
  };
  
//for redux actions
PostJob.propTypes= {
  addJob: PropTypes.func.isRequired,
};

export default connect(null, {addJob}) (PostJob);