import './App.css';  
import React, { Fragment, useEffect } from 'react';
import {BrowserRouter, Route,Switch} from'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



//import './backend/assets/css/argon-dashboard-react.css';
//import PostJob from 'frontOffice/views/PostJob';
//import Sidebar from 'frontOffice/Layouts/Sidebar'; <Sidebar/>
//import homeQuiz from 'frontOffice/views/homeQuiz';


// Quiz
import QuizInstructions from './frontOffice/views/GQuiz/QuizInstructions';
import play from './frontOffice/views/GQuiz/play';
//import profile from './frontOffice/views/Profile'
import QuizSummary from 'frontOffice/views/GQuiz/QuizSummary';
// Quiz

// Personality Test
import PersonalityTest from 'frontOffice/views/GPersonalityTest/PersonalityTest';
import TestInstructions from 'frontOffice/views/GPersonalityTest/TestInstructions';
import TestResult from 'frontOffice/views/GPersonalityTest/TestResult';
// Personality Test

import Layout  from './frontOffice/Layouts/Layout';
import Home  from './frontOffice/views/Home';
import BrowseJobs  from './frontOffice/views/GJob/BrowseJobs';
import Elearning  from './frontOffice/views/Elearning';
import Blog  from './frontOffice/views/Blog';
import BlogSingle  from './frontOffice/views/BlogSingle';
import Candidates  from './frontOffice/views/Candidates';
import DetailJob  from './frontOffice/views/GJob/DetailJob';
//import Navbar  from './frontOffice/Layouts/Navbar';<Navbar/> 
//import Footer from 'frontOffice/Layouts/Footer';<Footer/> 
import Login from 'frontOffice/views/GUser/Login';
import Register from 'frontOffice/views/GUser/Register';
import Admin from 'backend/views/examples/UsersList';
import Navbar from 'frontOffice/Layouts/Navbar';
//import Header from 'frontOffice/Layouts/Header';  <Header/>
//import Sidebar from 'frontOffice/Layouts/Sidebar';                        <Sidebar/>
//redux
import {Provider} from 'react-redux';
import store from './store';
import {loadUser} from './actions/auth'; 
import setAuthToken from './utils/setAuthToken';

import NewReclamation from 'frontOffice/views/GReclamation/NewReclamation';
//import Reclamations from 'frontOffice/views/Reclamations';
import Reclamations from 'frontOffice/views/GReclamation/Reclamations';


if(localStorage.token){
    setAuthToken(localStorage.token);
}

const App = () => {
    useEffect(() =>{
        store.dispatch(loadUser());
    }, []); //component didMount
    return (
    <Provider store={store}>
 <div className="App">  
       <BrowserRouter>
       <Fragment>
                    <Navbar/>                 
                    <div id="content-wrapper" className="d-flex flex-column">  
                        <div id="content">  
                        <Switch>
                            <Route  exact  path="/" component={Home}></Route>
                            <Route  exact  path="/Home" component={Home}></Route>
                            <Route  exact  path="/Elearning" component={Elearning}></Route>
                            <Route  exact strict path="/BrowseJob" component={BrowseJobs}></Route>
                            <Route  exact path="/Candidates" component={Candidates}></Route>
                            <Route  exact path="/Blog" component={Blog}></Route>
                            <Route  exact path="/BlogSingle" component={BlogSingle}></Route>
                            <Route  exact  path="/Login" component={Login}></Route>
                            <Route  exact  path="/Register" component={Register}></Route>
                            <Route  exact  path="/admin" component={Admin}></Route>
                            <Route  exact  path="/DetailJob/:id" component={DetailJob}></Route>
                            <Route  exact path="/Reclamation" component={NewReclamation}></Route>
                            <Route  exact path="/Reclamations" component={Reclamations}></Route>
                            {/* Quiz */}
                            <Route  exact  path="/quizSummary" component={QuizSummary}></Route>
                            <Route  exact  path="/play/instructions" component={QuizInstructions}></Route>
                            <Route  exact  path="/play/quiz" component={play}></Route>
                            {/* Personality Test */}
                            <Route  exact  path="/personalityTest/instructions" component={TestInstructions}></Route>
                            <Route  exact  path="/personalityTest/takeTest" component={PersonalityTest}></Route>
                            <Route  exact  path="/personalityTest/testResult" component={TestResult}></Route>
                        </Switch>
                        </div>  
                         
                    </div>  
               
       </Fragment>
   </BrowserRouter>
   </div>
    </Provider>   
);
};

export default App;
