import React,{useState} from "react";
import axios from "axios";
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
} from "reactstrap";


function Question({ question,history, index /*, token*/ }) {



  const handleDelete = () => {
    axios.delete("http://localhost:5000/api/question/delete", { data: {/*  token, */id: question._id } })
      .then((response) => {
        alert(response.data.msg);
        window.location.reload(true);
      })
      .catch((err) => {
        alert(err.response.data.msg);
      });
  };

  const handleUpdate = (e) => {
    console.log(JSON.stringify(question));
    localStorage.setItem("question", JSON.stringify(question));
    history.push(`/admin/updatequestion/${JSON.stringify(question._id)}`);
   
  }

  return (
    <>
    <tr>   
    <th scope="row">Question {index}: </th>
                  
                  <td> {question.question}</td>
                  <td> {question.opt1}</td>
                  <td> {question.opt2}</td>
                  <td> {question.opt3}</td>
                  <td> {question.opt4}</td>
                  <td> {question.answer}</td>
           
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
                            onClick={handleUpdate}
                          >
                            update
                          </DropdownItem>
                          <DropdownItem
                           // href="#pablo"
                            onClick={handleDelete}
                          >
                           delete
                          </DropdownItem>
                         
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                    

    </tr>

    </>
  );

}

export default Question;

