import React, {useEffect} from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
  FormGroup,
  Form,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
} from "reactstrap";
import { getJobsnonApp } from '../../../actions/job';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../../frontOffice/Layouts/Spinner';
// core components
import UserHeader from "backend/components/Headers/UserHeader";
import JobItem from "./JobItem";

const ListJobsDesap = ({getJobsnonApp, job: {jobs, loading}}) => {
      useEffect(() => {
        getJobsnonApp();
      }, [getJobsnonApp]);
      return loading ? <Spinner/>  :(
    <>
      <UserHeader />
      <Container className="mt--7" fluid>
        <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <FormGroup className="mb-0">
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Search" type="text" />
              </InputGroup>
            </FormGroup>
          </Form>
          <br/>
        <Row>
          <div className="col">
            
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">List Jobs</h3>
                Would you like to approve these Jobs?
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                  <th scope="col">Title</th>
                    <th scope="col">Salary</th>
                    <th scope="col">Contract Type</th>
                    <th scope="col">Location</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  {jobs.map(job => (
                        <JobItem key={job._id} job={job} />
                      ))}
                 </tr>
                </tbody>
            </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
        {/* Dark table */}      
      </Container>
 
  </>
  );
};

ListJobsDesap.propTypes ={
  getJobsnonApp: PropTypes.func.isRequired,
  job: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  job: state.job
});
export default connect(mapStateToProps, {getJobsnonApp})(ListJobsDesap);