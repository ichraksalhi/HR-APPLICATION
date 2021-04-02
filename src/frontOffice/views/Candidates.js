import React from 'react';
import {Link} from 'react-router-dom' ;
import Header from '../Layouts/Header';
import person1 from '../assets/images/person_1.jpg';
import person2 from '../assets/images/person_2.jpg';
import person3 from '../assets/images/person_3.jpg';
import person4 from '../assets/images/person_4.jpg';
import person5 from '../assets/images/person_5.jpg';
import person6 from '../assets/images/person_6.jpg';



const Candidates = () => {
    return (
        <>
        <Header/>
        <section className="ftco-section ftco-candidates ftco-candidates-2 bg-light">
            <div className="container">
            <div className="row">
            <div className="col-lg-8 pr-lg-4">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="team d-md-flex p-4 bg-white">
                            <div className="img"   style={{ backgroundImage: `url(${person1})`}}></div>
                            <div className="text pl-md-4">
                                <span className="location mb-0">Western City, UK</span>
                                <h2>Danica Lewis</h2>
                                <span className="position">Graduate</span>
                                <p className="mb-2">Python Developer Django Devops at SOFINE</p>
                                <span className="seen">Creation of a RESTFUL API platform and tokenized Dar Blockchain on the Ethereum blockchain.
                                This platform will be a Saas (Software As a Service) for other Coworking
                                Spaces that want to tokenize their services on the Ethereum blockchain.
                                Creation of smart contract erc20</span>
                                <p><Link to="#" className="btn btn-primary">Shortlist</Link></p>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-12">
                            <div className="team d-md-flex p-4 bg-white">
                            <div className="img" style={{ backgroundImage: `url(${person2})`}}></div>
                            <div className="text pl-md-4">
                                <span className="location mb-0">Western City, UK</span>
                                <h2>Danica Lewis</h2>
                                <span className="position">Graduate</span>
                                <p className="mb-2">Supply chain & Logistics Manager</p>
                                <span className="seen">Last Activity 4 months ago</span>
                                <p><Link to="#" className="btn btn-primary">Shortlist</Link></p>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-12">
                            <div className="team d-md-flex p-4 bg-white">
                            <div className="img" style={{ backgroundImage: `url(${person3})`}}></div>
                            <div className="text pl-md-4">
                                <span className="location mb-0">Western City, UK</span>
                                <h2>Danica Lewis</h2>
                                <span className="position">Graduate</span>
                                <p className="mb-2">Scrum Master & Fullstack PHP / Symfony / Js Developer at Sofrecom Tunisie Part of the Orange group</p>
                                <span className="seen">Last Activity 4 months ago</span>
                                <p><Link to="#" className="btn btn-primary">Shortlist</Link></p>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-12">
                            <div className="team d-md-flex p-4 bg-white">
                            <div className="img" style={{ backgroundImage: `url(${person4})`}}></div>
                            <div className="text pl-md-4">
                                <span className="location mb-0">Western City, UK</span>
                                <h2>Danica Lewis</h2>
                                <span className="position">Graduate</span>
                                <p className="mb-2">Maintenance Manager at General Electrique Tunisie</p>
                                <span className="seen">Last Activity 4 months ago</span>
                                <p><Link to="#" className="btn btn-primary">Shortlist</Link></p>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-12">
                            <div className="team d-md-flex p-4 bg-white">
                            <div className="img" style={{ backgroundImage: `url(${person5})`}}></div>
                            <div className="text pl-md-4">
                                <span className="location mb-0">Western City, UK</span>
                                <h2>Danica Lewis</h2>
                                <span className="position">Graduate</span>
                                <p className="mb-2">Founder of CDCP</p>
                                <span className="seen">Last Activity 4 months ago</span>
                                <p><Link to="#" className="btn btn-primary">Shortlist</Link></p>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-12">
                            <div className="team d-md-flex p-4 bg-white">
                            <div className="img" style={{ backgroundImage: `url(${person6})`}}></div>
                            <div className="text pl-md-4">
                                <span className="location mb-0">Western City, UK</span>
                                <h2>Danica Lewis</h2>
                                <span className="position">Graduate</span>
                                <p className="mb-2">Senior technician in plastic industry maintenance at Sousse Tunisia Plastics Training Center</p>
                                <span className="seen">Last Activity 4 months ago</span>
                                <p><Link to="#" className="btn btn-primary">Shortlist</Link></p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                  <div className="col text-center">
                    <div className="block-27">
                      <ul>
                        <li><Link to="#">&lt;</Link></li>
                        <li className="active"><span>1</span></li>
                        <li><Link to="#">2</Link></li>
                        <li><Link to="#">3</Link></li>
                        <li><Link to="#">4</Link></li>
                        <li><Link to="#">5</Link></li>
                        <li><Link to="#">&gt;</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
            <div className="col-lg-3 sidebar">
            <div className="sidebar-box bg-white p-4 ftco-animate">
                <h3 className="heading-sidebar">Browse Category</h3>
                <form action="#" className="search-form mb-3">
                    <div className="form-group">
                      <span className="icon icon-search"></span>
                      <input type="text" className="form-control" placeholder="Search..."/>
                    </div>
                </form>
                <form action="#" className="browse-form">
                          <label for="option-job-1"><input type="checkbox" id="option-job-1" name="vehicle" value="" checked/> Website &amp; Software</label><br/>
                          <label for="option-job-2"><input type="checkbox" id="option-job-2" name="vehicle" value=""/> Education &amp; Training</label><br/>
                          <label for="option-job-3"><input type="checkbox" id="option-job-3" name="vehicle" value=""/> Graphics Design</label><br/>
                          <label for="option-job-4"><input type="checkbox" id="option-job-4" name="vehicle" value=""/> Accounting &amp; Finance</label><br/>
                          <label for="option-job-5"><input type="checkbox" id="option-job-5" name="vehicle" value=""/> Restaurant &amp; Food</label><br/>
                          <label for="option-job-6"><input type="checkbox" id="option-job-6" name="vehicle" value=""/> Health &amp; Hospital</label><br/>
                </form>
            </div>
          </div>

            </div>
            </div>
        </section>
        </>
    );
};

export default Candidates;
