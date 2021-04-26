import React, {useState} from "react";
// reactstrap components
import {
  Card,
  CardHeader,
  Container,
  Row,
} from "reactstrap";
import { addJob } from '../../../actions/job';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// core components
import UserHeader from "backend/components/Headers/UserHeader.js";

const PostJob =(addJob)=>  {
  const [formData, setFormData] = useState({
    title: '',
    experience: '',
    level: '',
    salary: '',
    description: '',
    contract: '',
    location: '',
    requirements: '',
    skills: '' 
   });
  const {title,experience,location,contract,level,salary,description} = formData;
  const onChange = e =>setFormData({...formData, [e.target.name]: e.target.value}); //using onChange for every field
  const onSubmit = async e =>{
      e.preventDefault();
      alert(contract)
  }

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
              </CardHeader>
              <form className="container" onSubmit={e => onSubmit(e)}>
                  <div className="form-group">
                  <label><strong>Title</strong></label>
                  <input type="text" class="form-control" name="title" placeholder="Title..." value={title} onChange={e=> onChange(e)}/>
                  </div>
                  <div className="form-group">
                  <label><strong>Location</strong></label>
                  <input type="text" class="form-control" name="location" placeholder="Kap IT Tunisia Rue Ghar el Melh Tunis Tunisia, Tunis, 1053, Tunisia." value={location} onChange={e=> onChange(e)}/>
                  </div>
                <div className="form-group">
                <label><strong>Salary</strong></label>
                  <input type="number" className="form-control" name="salary" placeholder="eg: 2500 dt" value={salary} onChange={e=> onChange(e)}/>
                </div>
                <div className="form-group">
                <label><strong>Study Lavel</strong></label>
                  <input type="text" className="form-control" name="experience" placeholder="eg: engineer (bac+5)" value={experience} onChange={e=> onChange(e)}/>
                </div>
                <div className="form-group">
                <label><strong>Experience</strong></label>
                  <input type="text" className="form-control" name="level" placeholder="eg: 2-4 years" value={level} onChange={e=> onChange(e)}/>
                </div>
                <div className="form-group">
                <label><strong>Description</strong></label>
                <div className="md-form">
                <i className="fas fa-pencil-alt prefix"></i>
                <textarea id="form10" className="md-textarea form-control" rows="3" name="description" value={description} onChange={e=> onChange(e)}></textarea>
              </div>
                </div>
                <label><strong>Contract Type</strong></label>
                <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref"
                       value={contract} onChange={e=> onChange(e)} name="contract">
                <option selected>CDI</option>
                <option value="Full-Time">Full-Time</option>
                <option value="SIVP">SIVP</option>
                <option value="Freelance">Freelance</option>
                <option value="Stage">Stage</option>
                </select>
                <div className="form-group">
                <label><strong>Requirements</strong></label>
                <div className="md-form">
                <i className="fas fa-pencil-alt prefix"></i>
                <textarea id="form10" class="md-textarea form-control" rows="3"></textarea>
              </div>
                </div>
                  <button type="submit" className="btn btn-outline-primary btn-block" >Create</button>
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