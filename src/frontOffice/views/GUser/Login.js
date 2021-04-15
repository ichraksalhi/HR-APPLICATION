import React, {useState} from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link, Redirect } from "react-router-dom";
import bg from '../../assets/images/bg_1.jpg';
import NavbarLogReg from '../../Layouts/NavbarLogReg';
//REDUX
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../../actions/auth';
import { logout } from '../../../actions/auth';
import { createNonNullExpression, createNull } from 'typescript';

const Login = ({ login, isAuth }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const {email,password} = formData;
  const onChange = e =>setFormData({...formData, [e.target.name]: e.target.value}); //using onChange for every field
  const onSubmit = async e =>{
      e.preventDefault(); 
      login({email,password});  
        //Redirect if logged in
        if(isAuth){
          return <Redirect to='/'/>
        }
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
              <div className="wrap-input100 validate-input" data-validate = "Enter Email">
                <input className="input100" type="email" name="email" placeholder="Email" value={email} onChange={e=> onChange(e)}/>
                <span className="focus-input100" data-placeholder="&#xf159;"></span>
              </div>
    
              <div className="wrap-input100 validate-input" data-validate="Enter password">
                <input className="input100" type="password" name="password" placeholder="Password" value={password} onChange={e=> onChange(e)}/>
                <span className="focus-input100" data-placeholder="&#xf191;"></span>
              </div>
              
              <div className="forgot-pass">
                  <a href="#">
                      Forgot Password?
                  </a>
              </div>
             <br/>
              <div className="container-login100-form-btn">
                <button className="login100-form-btn">
                  Login
                </button>

              </div>
              <br/>
              <div>
                <center>
                <ul className="ftco-social list-unstyled float-md-center">
                <li className="ftco-animate"><Link to="#"><span className="icon-google"></span></Link></li>
                </ul>
                </center>

              </div>
            
              <br/>
              <div className="signup">
                <center>
                Don't have an account?
              <br></br>
                  <Link to="/Register" className="nav-link">SIGN UP</Link>
                </center>
                <Link to="/Candidates" className="nav-link">Canditates</Link>
              </div>          
            </form>
          </div>
        </div>
      </div>
        </>
      );
    };
//for redux actions
Login.propTypes= {
  login: PropTypes.func.isRequired,
  isAuth: PropTypes.bool
};
const mapStateToProps = state => (
  {
    isAuth: state.auth.isAuthenticated
  }
);
export default connect(mapStateToProps, {login}) (Login);
//export default connect(null, {login}) (Login);