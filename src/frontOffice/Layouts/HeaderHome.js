import React from 'react';

const HeaderHome = (props) => {
    return (
    <>
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
    </>        
    );
};

export default HeaderHome;