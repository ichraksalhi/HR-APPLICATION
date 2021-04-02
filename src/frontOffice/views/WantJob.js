import React from 'react';
import Header from '../Layouts/Header';
import { Link } from "react-router-dom";

const WantJob = (props) => {
    return (
       <>
            <Header/>
            <section className="ftco-section">
        <div className="container">
            <div className="row justify-content-center mb-5">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <span className="subheading">Job Categories</span>
            <h2 className="mb-0">Top Categories</h2>
          </div>
        </div>
        <div className="row">
            <div className="col-md-3 ftco-animate">
                <ul className="category text-center">
                    <li><Link to="#">Web Development <br/><span className="number">354</span> <span>Open position</span><i className="ion-ios-arrow-forward"></i></Link></li>
                    <li><Link to="#">Graphic Designer <br/><span className="number">143</span> <span>Open position</span><i className="ion-ios-arrow-forward"></i></Link></li>
                    <li><Link to="#">Multimedia <br/><span className="number">100</span> <span>Open position</span><i className="ion-ios-arrow-forward"></i></Link></li>
                    <li><Link to="#">Advertising <br/><span className="number">90</span> <span>Open position</span><i className="ion-ios-arrow-forward"></i></Link></li>
                </ul>
            </div>
            <div className="col-md-3 ftco-animate">
                <ul className="category text-center">
                    <li><Link to="#">Education &amp; Training <br/><span className="number">100</span> <span>Open position</span><i className="ion-ios-arrow-forward"></i></Link></li>
                    <li><Link to="#">English <br/><span className="number">200</span> <span>Open position</span><i className="ion-ios-arrow-forward"></i></Link></li>
                    <li><Link to="#">Social Media <br/><span className="number">300</span> <span>Open position</span><i className="ion-ios-arrow-forward"></i></Link></li>
                    <li><Link to="#">Writing <br/><span className="number">150</span> <span>Open position</span><i className="ion-ios-arrow-forward"></i></Link></li>
                </ul>
            </div>
            <div className="col-md-3 ftco-animate">
                <ul className="category text-center">
                    <li><Link to="#">PHP Programming <br/><span className="number">400</span> <span>Open position</span><i className="ion-ios-arrow-forward"></i></Link></li>
                    <li><Link to="#">Project Management <br/><span className="number">100</span> <span>Open position</span><i className="ion-ios-arrow-forward"></i></Link></li>
                    <li><Link to="#">Finance Management <br/><span className="number">222</span> <span>Open position</span><i className="ion-ios-arrow-forward"></i></Link></li>
                    <li><Link to="#">Office &amp; Admin <br/><span className="number">123</span> <span>Open position</span><i className="ion-ios-arrow-forward"></i></Link></li>
                </ul>
            </div>
            <div className="col-md-3 ftco-animate">
                <ul className="category text-center">
                    <li><Link to="#">Web Designer <br/><span className="number">324</span> <span>Open position</span><i className="ion-ios-arrow-forward"></i></Link></li>
                    <li><Link to="#">Customer Service <br/><span className="number">564</span> <span>Open position</span><i className="ion-ios-arrow-forward"></i></Link></li>
                    <li><Link to="#">Marketing &amp; Sales <br/><span className="number">234</span> <span>Open position</span><i className="ion-ios-arrow-forward"></i></Link></li>
                    <li><Link to="#">Software Development <br/><span className="number">425</span> <span>Open position</span><i className="ion-ios-arrow-forward"></i></Link></li>
                </ul>
            </div>
        </div>
        </div>
    </section>

    <section className="ftco-section ftco-no-pb bg-light">
        <div className="container">
            <div className="row justify-content-center mb-4">
          <div className="col-md-7 text-center heading-section ftco-animate">
            <span className="subheading">Browse Jobs</span>
            <h2 className="mb-4">Advance Search</h2>
          </div>
        </div>
            <div className="row">
                <div className="ftco-search">
                        <div className="row">
                <div className="col-md-12 nav-link-wrap">
                    <div className="nav nav-pills text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                      <Link className="nav-link active mr-md-1" id="v-pills-1-tab" data-toggle="pill" to="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="true">Find a Job</Link>

                      <Link className="nav-link" id="v-pills-2-tab" data-toggle="pill" to="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="false">Find a Candidate</Link>

                    </div>
                  </div>
                  <div className="col-md-12 tab-wrap">
                    
                    <div className="tab-content p-4" id="v-pills-tabContent">

                      <div className="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-nextgen-tab">
                        <form action="#" className="search-job">
                            <div className="row no-gutters">
                                <div className="col-md mr-md-2">
                                    <div className="form-group">
                                        <div className="form-field">
                                            <div className="icon"><span className="icon-briefcase"></span></div>
                                            <input type="text" className="form-control" placeholder="eg. Garphic. Web Developer"/>
                                          </div>
                                      </div>
                                </div>
                                <div className="col-md mr-md-2">
                                    <div className="form-group">
                                        <div className="form-field">
                                            <div className="select-wrap">
                                          <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                          <select name="" id="" className="form-control">
                                            <option value="">Category</option>
                                            <option value="">Full Time</option>
                                            <option value="">Part Time</option>
                                            <option value="">Freelance</option>
                                            <option value="">Internship</option>
                                            <option value="">Temporary</option>
                                          </select>
                                        </div>
                                          </div>
                                      </div>
                                </div>
                                <div className="col-md mr-md-2">
                                    <div className="form-group">
                                        <div className="form-field">
                                            <div className="icon"><span className="icon-map-marker"></span></div>
                                            <input type="text" className="form-control" placeholder="Location"/>
                                          </div>
                                      </div>
                                </div>
                                <div className="col-md">
                                    <div className="form-group">
                                        <div className="form-field">
                                            <button type="submit" className="form-control btn btn-primary">Search</button>
                                          </div>
                                      </div>
                                </div>
                            </div>
                        </form>
                      </div>

                      <div className="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-performance-tab">
                        <form action="#" className="search-job">
                            <div className="row">
                                <div className="col-md">
                                    <div className="form-group">
                                        <div className="form-field">
                                            <div className="icon"><span className="icon-user"></span></div>
                                            <input type="text" className="form-control" placeholder="eg. Adam Scott"/>
                                          </div>
                                      </div>
                                </div>
                                <div className="col-md">
                                    <div className="form-group">
                                        <div className="form-field">
                                            <div className="select-wrap">
                                          <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                          <select name="" id="" className="form-control">
                                            <option value="">Category</option>
                                            <option value="">Full Time</option>
                                            <option value="">Part Time</option>
                                            <option value="">Freelance</option>
                                            <option value="">Internship</option>
                                            <option value="">Temporary</option>
                                          </select>
                                        </div>
                                          </div>
                                      </div>
                                </div>
                                <div className="col-md">
                                    <div className="form-group">
                                        <div className="form-field">
                                            <div className="icon"><span className="icon-map-marker"></span></div>
                                            <input type="text" className="form-control" placeholder="Location"/>
                                          </div>
                                      </div>
                                </div>
                                <div className="col-md">
                                    <div className="form-group">
                                        <div className="form-field border">
                                            <button type="submit" className="form-control btn btn-primary">Search</button>
                                          </div>
                                      </div>
                                </div>
                            </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            </div>
        </div>
    </section>

    <section className="ftco-section bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 pr-lg-4">
                        <div className="row">
                            <div className="col-md-12 ftco-animate">
                    <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                      <div className="one-third mb-4 mb-md-0">
                        <div className="job-post-item-header align-items-center">
                            <span className="subadge">Partime</span>
                          <h2 className="mr-3 text-black"><Link to="#">Frontend Development</Link></h2>
                        </div>
                        <div className="job-post-item-body d-block d-md-flex">
                          <div className="mr-3"><span className="icon-layers"></span> <Link to="#">Facebook, Inc.</Link></div>
                          <div><span className="icon-my_location"></span> <span>Western City, UK</span></div>
                        </div>
                      </div>

                      <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                        <div>
                            <Link to="#" className="icon text-center d-flex justify-content-center align-items-center icon mr-2">
                                <span className="icon-heart"></span>
                            </Link>
                        </div>
                        <Link to="job-single.html" className="btn btn-primary py-2">Apply Job</Link>
                      </div>
                    </div>
                  </div>
            </div>
            </div>
            </div>
            </div>
            </section>
       </>
    );
};

export default WantJob ;