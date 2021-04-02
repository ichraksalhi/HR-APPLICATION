import React from 'react';
const Sidebar = () => {
  return (
    <>
    <div className="col-lg-4 sidebar">
      <div className="sidebar-box bg-white p-4 ftco-animate">
          <h3 className="heading-sidebar">Browse Category</h3>
          <form action="#" className="search-form mb-3">
                <div className="form-group">
                          <span className="icon icon-search"></span>
                                  <input type="text" className="form-control" placeholder="Search..."></input>
                </div>
          </form>
          
          <form className="browse-form">
             <label htmlFor="option-job-2"><input type="checkbox" id="option-job-2" name="vehicle" value=""/> Education &amp; Training</label><br/>
            <label htmlFor="option-job-3"><input type="checkbox" id="option-job-3" name="vehicle" value=""/> Graphics Design</label><br/>
          </form>

      </div>
      <div className="sidebar-box bg-white p-4 ftco-animate">
                    <h3 className="heading-sidebar">Select Location</h3>
                    <form action="#" className="search-form mb-3">
                        <div className="form-group">
                          <span className="icon icon-search"></span>
                          <input type="text" className="form-control" placeholder="Search..."/>
                        </div>
              </form>
                    <form action="#" className="browse-form">
                              <label htmlFor="option-location-1"><input type="checkbox" id="option-location-1" name="vehicle" value="" checked/> Sydney, Australia</label><br/>
                              <label htmlFor="option-location-2"><input type="checkbox" id="option-location-2" name="vehicle" value=""/> New York, United States</label><br/>
                              <label htmlFor="option-location-3"><input type="checkbox" id="option-location-3" name="vehicle" value=""/> Tokyo, Japan</label><br/>
                        </form>

          </div>
      <div className="sidebar-box bg-white p-4 ftco-animate">
                    <h3 className="heading-sidebar">Job Type</h3>
                    <form action="#" className="browse-form">
                              <label htmlFor="option-job-type-1"><input type="checkbox" id="option-job-type-1" name="vehicle" value="" checked/> Partime</label><br/>
                              <label htmlFor="option-job-type-2"><input type="checkbox" id="option-job-type-2" name="vehicle" value=""/> Fulltime</label><br/>
                              <label htmlFor="option-job-type-3"><input type="checkbox" id="option-job-type-3" name="vehicle" value=""/> Intership</label><br/>
                              <label htmlFor="option-job-type-4"><input type="checkbox" id="option-job-type-4" name="vehicle" value=""/> Temporary</label><br/>
                              <label htmlFor="option-job-type-5"><input type="checkbox" id="option-job-type-5" name="vehicle" value=""/> Freelance</label><br/>
                              <label htmlFor="option-job-type-6"><input type="checkbox" id="option-job-type-6" name="vehicle" value=""/> Fixed</label><br/>
                    </form>
          </div>
    </div>
    
    </>
  );
};

export default Sidebar;