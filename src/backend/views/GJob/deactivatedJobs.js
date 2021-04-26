import React, {useEffect, Fragment} from 'react';
// reactstrap components
import {
  Badge,
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
import {Link} from 'react-router-dom' ;
import UserHeader from "../../components/Headers/UserHeader";
import {getJobsHRDeact} from '../../../actions/job';
import { connect } from 'react-redux';
import Spinner from '../../../frontOffice/Layouts/Spinner';
import PropTypes from 'prop-types';
import JobItem from './JobItem';
const DeactivatedJobs = ({getJobsHRDeact, job: {jobs, loading}}) => {
    useEffect(() => {
      getJobsHRDeact();
    }, [getJobsHRDeact]);
  
    return loading ? <Spinner/>  :(
      <Fragment>
  <UserHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col">
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
            <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Deactivated Jobs</h3>
                  <Link to="/admin/ListJobs">List Jobs</Link>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <Link to="/admin/activatedJobs">Activated Jobs</Link>
                </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                  <th scope="col">Title</th>
                    <th scope="col">Salary</th>
                    <th scope="col">Contract Type</th>
                    <th scope="col">Location</th>
                    <th scope="col">Status</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {jobs.map(job => (
                        <JobItem key={job._id} job={job} />
                      ))}                  
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
  
      </Fragment>
      );
  };
  DeactivatedJobs.propTypes ={
    getJobsHRDeact: PropTypes.func.isRequired,
    job: PropTypes.object.isRequired
  }
  
  const mapStateToProps = state => ({
    job: state.job
  });
  export default connect(mapStateToProps, {getJobsHRDeact})(DeactivatedJobs);