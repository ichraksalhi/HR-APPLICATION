import React from "react";
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
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
import {Link} from 'react-router-dom' ;

// core components
import UserHeader from "backend/components/Headers/UserHeader.js";
import { data } from "jquery";

class PostJob extends React.Component {
  render() {
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
              <form className="container">
                <div className="form-group">
                  <label><strong>Title</strong></label>
                  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Title..."/>
                </div>
                <div className="form-group">
                <label><strong>Salary</strong></label>
                  <input type="number" className="form-control" id="formGroupExampleInput2" placeholder="eg: 2500 dt"/>
                </div>
                <div className="form-group">
                <label><strong>Study Lavel</strong></label>
                  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="eg: engineer (bac+5)"/>
                </div>
                <div className="form-group">
                <label><strong>Experience</strong></label>
                  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="eg: 2-4 years"/>
                </div>
                <div className="form-group">
                <label><strong>Description</strong></label>
                <div className="md-form">
                <i className="fas fa-pencil-alt prefix"></i>
                <textarea id="form10" className="md-textarea form-control" rows="3"></textarea>
              </div>
                </div>
                <label><strong>Contract Type</strong></label>
                <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                <option selected>CDI</option>
                <option value="1">Full-Time</option>
                <option value="2">SIVP</option>
                <option value="3">Freelance</option>
                <option value="3">Stage</option>
                </select>
                <div className="form-group">
                <label><strong>Requirements</strong></label>
                <div className="md-form">
                <i className="fas fa-pencil-alt prefix"></i>
                <textarea id="form10" class="md-textarea form-control" rows="3"></textarea>
              </div>
                </div>
                          <br/>
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
  
  }
  
export default PostJob;