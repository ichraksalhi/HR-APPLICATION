import React, { useState } from 'react';
import { Link, Redirect,useHistory } from "react-router-dom";
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import bg from '../../assets/images/bg_1.jpg';
import NavbarLogReg from 'frontOffice/Layouts/NavbarLogReg';
//redux
import { setAlert } from '../../../actions/alert';
import { register } from '../../../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Recaptcha from 'react-recaptcha';

const Register = ({setAlert, register, isAuth}) => {
    const history = useHistory();
    const [formData, setFormData] = useState({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      password2: ''
    });
    const [isVerified, setisVerified] = useState(false);

    const {firstname,lastname,email,password,password2} = formData;
    const onChange = e =>setFormData({...formData, [e.target.name]: e.target.value}); //using onChange for every field
    const onSubmit = async e =>{
        e.preventDefault();
        if (isVerified){
          alert('You are successfuly subscribe!');
        }else{
          alert('Verify that you are a human!');
        }
        if(password !== password2){
            setAlert('Passwords do not match','danger'); 
        }
        else
            {   
               //register({firstname,lastname, email,password});  
            }

    }
    const recapchaLoaded=()=>{
        console.log("recaptcha successfully loaded");
    }
  //Redirect if registed
  if(isAuth){
    history.push('/');
  }
      return (
        <>
        
        <div className="limiter">
        <NavbarLogReg/>

        <div className="container-login100" style={{ backgroundImage: `url(${bg})`}}>      
          <div className="wrap-login100">
            <form className="login100-form validate-form" onSubmit={e => onSubmit(e)}>
    
              <span className="login100-form-title p-b-34 p-t-27">
                Welcome!
              </span>
              <br/><br/>
              <div className="wrap-input100 validate-input" data-validate = "Enter first name">
                <input className="input100" type="text" name="firstname" value={firstname} placeholder="First Name" onChange={e=> onChange(e)}/>
                <span className="focus-input100" data-placeholder="&#xf207;"></span>
              </div>
              <div className="wrap-input100 validate-input" data-validate = "Enter last name">
                <input className="input100" type="text" name="lastname" value={lastname}  placeholder="Last Name" onChange={e=> onChange(e)}/>
                <span className="focus-input100" data-placeholder="&#xf207;"></span>
              </div>
              <div className="wrap-input100 validate-input" data-validate = "Enter Email">
                <input className="input100" type="email" name="email" placeholder="Email" value={email} onChange={e=> onChange(e)}/>
                <span className="focus-input100" data-placeholder="&#xf159;"></span>
              </div>
              <div className="wrap-input100 validate-input" data-validate="Enter password">
                <input className="input100" type="password" name="password" placeholder="Password" value={password} onChange={e=> onChange(e)}/>
                <span className="focus-input100" data-placeholder="&#xf191;"></span>
              </div>
              <div className="wrap-input100 validate-input" data-validate="Enter password">
                <input className="input100" type="password" name="password2" placeholder="Confirm Password" value={password2} onChange={e=> onChange(e)}/>
                <span className="focus-input100" data-placeholder="&#xf191;"></span>
              </div>
              
              
             <br/>
              <div className="container-login100-form-btn">
                <button className="login100-form-btn">
                  SIGN UP
                </button>
              </div>
              <Recaptcha
                sitekey="6LeEz7caAAAAAMveEusK2V6AWnDcuXXcXIfUy5AH
                "
                render="explicit"
                onloadCallback={recapchaLoaded}
              />
              <br/>
            </form>
          </div>
          <br></br>
        </div>

      </div>
        </>
      

      );
    };
//for redux actions
Register.propTypes= {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuth: PropTypes.bool
};
const mapStateToProps = state => (
  {
    isAuth: state.auth.isAuthenticated
  }
);
export default connect(mapStateToProps, {setAlert, register}) (Register);
//export default connect(null, {setAlert, register}) (Register);