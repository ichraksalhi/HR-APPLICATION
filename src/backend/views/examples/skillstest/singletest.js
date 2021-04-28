// import React from "react";
// import { Button } from "reactstrap";

// function SingleTest({ test, history, index, /*token*/ url }) {
//   const date = test.validity;

//   const handleClick = () => {
//     history.push(`/admin/result/${test._id}`);
//    // history.push(`/admin/updatequestion/${JSON.stringify(question._id)}`);
//   };
//   return (
//     <div className="Single-Test">
//       <h2>Test {index}-: </h2>
//       <h3>Valid Till: {date.slice(0, 10) + " " + date.slice(11, 16)}</h3>
//       <h3>Total Questions: {test.numberOfQuestions}</h3>
//       <h3>Test pin: {test.pin}</h3>
//       <Button onClick={handleClick}>See results of candidates</Button>
//     </div>
//   );


// }

// export default SingleTest;

import React,{useState} from "react";
//import {Link} from "react-router-dom";
import axios from "axios";
//import Details from "./Details";
//import Notification from "../skillstest/notification";
import {Route} from'react-router-dom';
import Result from "./Result";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
} from "reactstrap";


function SingleTest({ test, history, index, /*token*/ url}) { 
  const date = test.validity;
  //  const [notify,setNotify]=useState({isOpen:false,message:'',type:''}) 
  const handleClick = () => {
         history.push(`/admin/result/${test._id}`);
    //    // history.push(`/admin/updatequestion/${JSON.stringify(question._id)}`);
    
     };
     

     const handlesent = () => {
      history.push("/admin/send");
 
  };

     const handledeletep =() =>{
       axios.delete(`http://localhost:5000/api/test/${test._id}`)
       .then((response) => {
        console.log(response.data);
      
       alert("Successfully removed Test");
         window.location.reload(true);
       })
      .catch((err) => {
         alert(err.response.data.msg);
      });
     }

  
const handleClick2 =()=>{
  
 /* axios.put(`http://localhost:5000/api/test/archive/${test._id}`)
  .then((response) => {
    console.log(response.data);
    alert("Successfully archived Test");
    window.location.reload(true);
  })
  .catch((err) => {
   alert(err);
  console.log(err);
  });*/

};
  return (
    <>
           <tr>
                    <th scope="row">Test {index}: </th>
                  
                    <td> {date.slice(0, 10) + " " + date.slice(11, 16)}</td>
                    <td> {test.numberOfQuestions}</td>
                    <td> {test.pin}</td>
                  
    

                   <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                         
                          role="button"
                          size="sm"
                         // color=""
                         style={{backgroundColor:'#e6f3ff'}}
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v"   />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right >
                          <DropdownItem
                           // href="#pablo"
                            onClick={handleClick}
                          >
                            See results
                          </DropdownItem>
                          <DropdownItem
                           // href="#pablo"
                            onClick={handleClick2}
                          >
                           archivate
                          </DropdownItem>
                          <DropdownItem
                           
                            onClick={handledeletep}
                          >
                           Delete 
                          </DropdownItem>
                          <DropdownItem
                           
                            onClick={handlesent}
                          >
                           Send Test 
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                
              
    </>
  );
};

export default SingleTest;


