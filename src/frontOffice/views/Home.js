import React from 'react';
import { Link } from "react-router-dom";
import person1 from '../../frontOffice/assets/images/person_1.jpg';
import person2 from '../../frontOffice/assets/images/person_2.jpg';
import person3 from '../../frontOffice/assets/images/person_3.jpg';
import person4 from '../../frontOffice/assets/images/person_4.jpg';
import person5 from '../../frontOffice/assets/images/person_5.jpg';
import person6 from '../../frontOffice/assets/images/person_6.jpg';
import image1 from '../../frontOffice/assets/images/image_1.jpg';
import image2 from '../../frontOffice/assets/images/image_2.jpg';
import image3 from '../../frontOffice/assets/images/image_3.jpg';
import image4 from '../../frontOffice/assets/images/image_4.jpg';
import bg from '../../frontOffice/assets/images/bg_1.jpg';



const Home = () => {
    return (
      <>
	  <div className="hero-wrap img" style={{ backgroundImage: `url(${bg})`}}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row d-md-flex no-gutters slider-text align-items-center justify-content-center">
		<div className="hero-wrap img" style={{ backgroundImage: `url(${bg})`}}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row d-md-flex no-gutters slider-text align-items-center justify-content-center">
          <div className="col-md-10 d-flex align-items-center ftco-animate">
            <div className="text text-center pt-5 mt-md-5">
              <p className="mb-4">Find Job, Employment, and Career Opportunities</p>
              <h1 className="mb-5">The Eassiest Way to Get Your New Job</h1>
              <div className="ftco-counter ftco-no-pt ftco-no-pb">
                <div className="row">
                  <div className="col-md-4 d-flex justify-content-center counter-wrap ftco-animate">
                    <div className="block-18">
                      <div className="text d-flex">
                        <div className="icon mr-2">
                          <span className="flaticon-worldwide"></span>
                        </div>
                        <div className="desc text-left">
                          <strong className="number" data-number="46">0</strong>
                          <span>Countries</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 d-flex justify-content-center counter-wrap ftco-animate">
                    <div className="block-18 text-center">
                      <div className="text d-flex">
                        <div className="icon mr-2">
                          <span className="flaticon-visitor"></span>
                        </div>
                        <div className="desc text-left">
                          <strong className="number" data-number="450">0</strong>
                          <span>Companies</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 d-flex justify-content-center counter-wrap ftco-animate">
                    <div className="block-18 text-center">
                      <div className="text d-flex">
                        <div className="icon mr-2">
                          <span className="flaticon-resume"></span>
                        </div>
                        <div className="desc text-left">
                          <strong className="number" data-number="80000">0</strong>
                          <span>Active Employees</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ftco-search my-md-5">
                <div className="row">
                  <div className="col-md-12 nav-link-wrap">
                    <div className="nav nav-pills text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                      <a className="nav-link active mr-md-1" id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="true">Find a Job</a>

                      <a className="nav-link" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="false">Find a Candidate</a>

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
                                <div className="form-field">
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
        </div>
      </div>
    </div>
	  </div>
      </div>
    </div>
 <section className="ftco-section ftco-no-pt ftco-no-pb">
	 
    	<div className="container">
    		<div className="row">
    			<div className="col-md-12">
    				<div className="category-wrap">
    					<div className="row no-gutters">
    						<div className="col-md-2">
    							<div className="top-category text-center no-border-left">
    								<h3><Link to="#">Website &amp; Software</Link></h3>
    								<span className="icon flaticon-contact"></span>
    								<p><span className="number">143</span> <span>Open position</span></p>
    							</div>
    						</div>
    						<div className="col-md-2">
    							<div className="top-category text-center active">
    								<h3><Link to="#">Education &amp; Training</Link></h3>
    								<span className="icon flaticon-mortarboard"></span>
    								<p><span className="number">143</span> <span>Open position</span></p>
    							</div>
    						</div>
    						<div className="col-md-2">
    							<div className="top-category text-center">
    								<h3><Link to="#">Graphic &amp; UI/UX Design</Link></h3>
    								<span className="icon flaticon-idea"></span>
    								<p><span className="number">143</span> <span>Open position</span></p>
    							</div>
    						</div>
    						<div className="col-md-2">
    							<div className="top-category text-center">
    								<h3><Link to="#">Accounting &amp; Finance</Link></h3>
    								<span className="icon flaticon-accounting"></span>
    								<p><span className="number">143</span> <span>Open position</span></p>
    							</div>
    						</div>
    						<div className="col-md-2">
    							<div className="top-category text-center">
    								<h3><Link to="#">Restaurant &amp; Food</Link></h3>
    								<span className="icon flaticon-dish"></span>
    								<p><span className="number">143</span> <span>Open position</span></p>
    							</div>
    						</div>
    						<div className="col-md-2">
    							<div className="top-category text-center">
    								<h3><Link to="#">Health &amp; Hospital</Link></h3>
    								<span className="icon flaticon-stethoscope"></span>
    								<p><span className="number">143</span> <span>Open position</span></p>
    							</div>
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    </section>

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
        			<li><Link to="#">Mobile Development <br/><span className="number">90</span> <span>Open position</span><i className="ion-ios-arrow-forward"></i></Link></li>
        		</ul>
        	</div>
        	<div className="col-md-3 ftco-animate">
        		<ul className="category text-center">
        			<li><Link to="#">Education &amp; Training <br/><span className="number">100</span> <span>Open position</span><i className="ion-ios-arrow-forward"></i></Link></li>
        			<li><Link to="#">English <br/><span className="number">200</span> <span>Open position</span><i className="ion-ios-arrow-forward"></i></Link></li>
        			<li><Link to="#">Arabic <br/><span className="number">300</span> <span>Open position</span><i className="ion-ios-arrow-forward"></i></Link></li>
        			<li><Link to="#">Frensh <br/><span className="number">150</span> <span>Open position</span><i className="ion-ios-arrow-forward"></i></Link></li>
        		</ul>
        	</div>
        	<div className="col-md-3 ftco-animate">
        		<ul className="category text-center">
        			<li><Link to="#">PHP <br/><span className="number">400</span> <span>Open position</span><i className="ion-ios-arrow-forward"></i></Link></li>
        			<li><Link to="#">JS <br/><span className="number">100</span> <span>Open position</span><i className="ion-ios-arrow-forward"></i></Link></li>
        			<li><Link to="#">Java <br/><span className="number">222</span> <span>Open position</span><i className="ion-ios-arrow-forward"></i></Link></li>
        			<li><Link to="#"> Python <br/><span className="number">123</span> <span>Open position</span><i className="ion-ios-arrow-forward"></i></Link></li>
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

    <section className="ftco-section services-section">
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-3 d-flex align-self-stretch ftco-animate">
            <div className="media block-6 services d-block">
              <div className="icon"><span className="flaticon-resume"></span></div>
              <div className="media-body">
                <h3 className="heading mb-3">Search Millions of Jobs</h3>
                <p>A small river named Duden flows by their place and supplies.</p>
              </div>
            </div>      
          </div>
          <div className="col-md-3 d-flex align-self-stretch ftco-animate">
            <div className="media block-6 services d-block">
              <div className="icon"><span className="flaticon-team"></span></div>
              <div className="media-body">
                <h3 className="heading mb-3">Easy To Manage Jobs</h3>
                <p>A small river named Duden flows by their place and supplies.</p>
              </div>
            </div>    
          </div>
          <div className="col-md-3 d-flex align-self-stretch ftco-animate">
            <div className="media block-6 services d-block">
              <div className="icon"><span className="flaticon-career"></span></div>
              <div className="media-body">
                <h3 className="heading mb-3">Top Careers</h3>
                <p>A small river named Duden flows by their place and supplies.</p>
              </div>
            </div>      
          </div>
          <div className="col-md-3 d-flex align-self-stretch ftco-animate">
            <div className="media block-6 services d-block">
              <div className="icon"><span className="flaticon-employees"></span></div>
              <div className="media-body">
                <h3 className="heading mb-3">Search Expert Candidates</h3>
                <p>A small river named Duden flows by their place and supplies.</p>
              </div>
            </div>      
          </div>
        </div>
      </div>
    </section>

		<section className="ftco-section bg-light">
			<div className="container">
				<div className="row">
					<div className="col-lg-9 pr-lg-5">
						<div className="row justify-content-center pb-3">
		          <div className="col-md-12 heading-section ftco-animate">
		          	<span className="subheading">Recently Added Jobs</span>
		            <h2 className="mb-4">Featured Jobs Posts For This Week</h2>
		          </div>
		        </div>
						<div className="row">
							<div className="col-md-12 ftco-animate">
		           </div>

							<div className="col-md-12 ftco-animate">
		         </div>

		          <div className="col-md-12 ftco-animate">
		            <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
		              <div className="one-third mb-4 mb-md-0">
		                <div className="job-post-item-header align-items-center">
		                	<span className="subadge">Freelance</span>
		                  <h2 className="mr-3 text-black"><Link to="#">Open Source Interactive Developer</Link></h2>
		                </div>
		                <div className="job-post-item-body d-block d-md-flex">
		                  <div className="mr-3"><span className="icon-layers"></span> <Link to="#">New York Times</Link></div>
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

		          <div className="col-md-12 ftco-animate">
		            <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
		              <div className="one-third mb-4 mb-md-0">
		                <div className="job-post-item-header align-items-center">
		                	<span className="subadge">Temporary</span>
		                  <h2 className="mr-3 text-black"><Link to="#">Open Source Interactive Developer</Link></h2>
		                </div>
		                <div className="job-post-item-body d-block d-md-flex">
		                  <div className="mr-3"><span className="icon-layers"></span> <Link to="#">New York Times</Link></div>
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

		         	<div className="col-md-12 ftco-animate">
		            <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
		              <div className="one-third mb-4 mb-md-0">
		                <div className="job-post-item-header align-items-center">
		                	<span className="subadge">Fulltime</span>
		                  <h2 className="mr-3 text-black"><Link to="#">Full Stack Developer</Link></h2>
		                </div>
		                <div className="job-post-item-body d-block d-md-flex">
		                  <div className="mr-3"><span className="icon-layers"></span> <Link to="#">Google, Inc.</Link></div>
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
		       
		          <div className="col-md-12 ftco-animate">
		            </div>
					
		        </div>
		      </div>
		   
				</div>
			</div>
		</section>

    <section className="ftco-section testimony-section">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-md-7 text-center heading-section ftco-animate">
          	<span className="subheading">Testimonial</span>
            <h2 className="mb-4">Happy Clients</h2>
          </div>
        </div>
        <div className="row ftco-animate">
          <div className="col-md-12">
            <div className="carousel-testimony owl-carousel ftco-owl">
              <div className="item">
                <div className="testimony-wrap py-4">
                  <div className="text">
                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className="d-flex align-items-center">
                    	<div className="user-img" style={{ backgroundImage: `url(${person1})`}}></div>
                    	<div className="pl-3">
		                    <p className="name">Roger Scott</p>
		                    <span className="position">Marketing Manager</span>
		                  </div>
	                  </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap py-4">
                  <div className="text">
                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className="d-flex align-items-center">
                    	<div className="user-img" style={{ backgroundImage: `url(${person2})`}}></div>
                    	<div className="pl-3">
		                    <p className="name">Roger Scott</p>
		                    <span className="position">Marketing Manager</span>
		                  </div>
	                  </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap py-4">
                  <div className="text">
                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className="d-flex align-items-center">
                    	<div className="user-img" style={{ backgroundImage: `url(${person3})`}}></div>
                    	<div className="pl-3">
		                    <p className="name">Roger Scott</p>
		                    <span className="position">Marketing Manager</span>
		                  </div>
	                  </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap py-4">
                  <div className="text">
                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className="d-flex align-items-center">
                    	<div className="user-img" style={{ backgroundImage: `url(${person1})`}}></div>
                    	<div className="pl-3">
		                    <p className="name">Roger Scott</p>
		                    <span className="position">Marketing Manager</span>
		                  </div>
	                  </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap py-4">
                  <div className="text">
                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className="d-flex align-items-center">
                    	<div className="user-img" style={{ backgroundImage: `url(${person2})`}}></div>
                    	<div className="pl-3">
		                    <p className="name">Roger Scott</p>
		                    <span className="position">Marketing Manager</span>
		                  </div>
	                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="ftco-section ftco-candidates bg-primary">
    	<div className="container">
    		<div className="row justify-content-center pb-3">
          <div className="col-md-10 heading-section heading-section-white text-center ftco-animate">
          	<span className="subheading">Candidates</span>
            <h2 className="mb-4">Latest Candidates</h2>
          </div>
        </div>
    	</div>
    	<div className="container">
        <div className="row">
        	<div className="col-md-12 ftco-animate">
        		<div className="carousel-candidates owl-carousel">
        			<div className="item">
		        		<Link to="#" className="team text-center">
		        			<div className="img" style={{ backgroundImage: `url(${person1})`}}></div>
		        			<h2>Danica Lewis</h2>
		        			<span className="position">Western City, UK</span>
		        		</Link>
        			</div>
        			<div className="item">
	        			<Link to="#" className="team text-center">
		        			<div className="img" style={{ backgroundImage: `url(${person2})`}}></div>
		        			<h2>Nicole Simon</h2>
		        			<span className="position">Western City, UK</span>
		        		</Link>
	        		</div>
	        		<div className="item">
	        			<Link to="#" className="team text-center">
		        			<div className="img" style={{ backgroundImage: `url(${person3})`}}></div>
		        			<h2>Cloe Meyer</h2>
		        			<span className="position">Western City, UK</span>
		        		</Link>
	        		</div>
	        		<div className="item">
	        			<Link to="#" className="team text-center">
		        			<div className="img" style={{ backgroundImage: `url(${person4})`}}></div>
		        			<h2>Rachel Clinton</h2>
		        			<span className="position">Western City, UK</span>
		        		</Link>
	        		</div>
	        		<div className="item">
	        			<Link to="#" className="team text-center">
		        			<div className="img" style={{ backgroundImage: `url(${person5})`}}></div>
		        			<h2>Dave Buff</h2>
		        			<span className="position">Western City, UK</span>
		        		</Link>
	        		</div>
	        		<div className="item">
	        			<Link to="#" className="team text-center">
		        			<div className="img" style={{ backgroundImage: `url(${person6})`}}></div>
		        			<h2>Dave Buff</h2>
		        			<span className="position">Western City, UK</span>
		        		</Link>
	        		</div>
        		</div>
        	</div>
        </div>
    	</div>
    </section>

    <section className="ftco-section bg-light">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
          	<span className="subheading">Our Blog</span>
            <h2><span>Recent</span> Blog</h2>
          </div>
        </div>
        <div className="row d-flex">
          <div className="col-md-3 d-flex ftco-animate">
            <div className="blog-entry align-self-stretch">
              <Link to="blog-single.html" className="block-20" style={{ backgroundImage: `url(${image1})`}}>
              </Link>
              <div className="text mt-3">
              	<div className="meta mb-2">
                  <div><Link to="#">August 28, 2019</Link></div>
                  <div><Link to="#">Admin</Link></div>
                  <div><Link to="#" className="meta-chat"><span className="icon-chat"></span> 3</Link></div>
                </div>
                <h3 className="heading"><Link to="#">Even the all-powerful Pointing has no control about the blind texts</Link></h3>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex ftco-animate">
            <div className="blog-entry align-self-stretch">
              <Link to="blog-single.html" className="block-20" style={{ backgroundImage: `url(${image2})`}}>
              </Link>
              <div className="text mt-3">
              	<div className="meta mb-2">
                  <div><Link to="#">August 28, 2019</Link></div>
                  <div><Link to="#">Admin</Link></div>
                  <div><Link to="#" className="meta-chat"><span className="icon-chat"></span> 3</Link></div>
                </div>
                <h3 className="heading"><Link to="#">Even the all-powerful Pointing has no control about the blind texts</Link></h3>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex ftco-animate">
            <div className="blog-entry align-self-stretch">
              <Link to="blog-single.html" className="block-20" style={{ backgroundImage: `url(${image3})`}}>
              </Link>
              <div className="text mt-3">
              	<div className="meta mb-2">
                  <div><Link to="#">August 28, 2019</Link></div>
                  <div><Link to="#">Admin</Link></div>
                  <div><Link to="#" className="meta-chat"><span className="icon-chat"></span> 3</Link></div>
                </div>
                <h3 className="heading"><Link to="#">Even the all-powerful Pointing has no control about the blind texts</Link></h3>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex ftco-animate">
            <div className="blog-entry align-self-stretch">
              <Link to="blog-single.html" className="block-20" style={{ backgroundImage: `url(${image4})`}}>
              </Link>
              <div className="text mt-3">
              	<div className="meta mb-2">
                  <div><Link to="#">August 28, 2019</Link></div>
                  <div><Link to="#">Admin</Link></div>
                  <div><Link to="#" className="meta-chat"><span className="icon-chat"></span> 3</Link></div>
                </div>
                <h3 className="heading"><Link to="#">Even the all-powerful Pointing has no control about the blind texts</Link></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</>
    );
};

export default Home;