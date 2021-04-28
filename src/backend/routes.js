import Index from "backend/views/Index.js";
import Maps from "backend/views/examples/Maps.js";
import Tables from "backend/views/examples/Tables.js";
import Icons from "backend/views/examples/Icons.js";
//user
import UsersList from "backend/views/examples/UsersList.js";


//Job
import scraping from "backend/views/examples/scrapping";
import ListJobs from "backend/views/GJob/ListJobs";
import activatedJobs from "backend/views/GJob/activatedJobs";
import deactivatedJobs from "backend/views/GJob/deactivatedJobs";
import JobDetails from "backend/views/GJob/JobDetails";
import JobAdDetails from "backend/views/GJob/JobAdDetails";
import Ranking from "backend/views/GJob/ranking";
import PostJob from "backend/views/GJob/PostJob";
import ListJobsNonApp from "backend/views/GJob/ListJobsNonApp";
import UpdateJob from "backend/views/GJob/UpdateJob";


//Reclamation
import ListReclamations from "backend/views/GReclamation/ListReclamations.js"; 
import ReclamationDetails from "backend/views/GReclamation/ReclamationDetails.js";
import StatReclamation from "backend/views/GReclamation/StatReclamation.js";
import calendar from "backend/views/GCalendar/calendar.js"; 


//Personality test
import personalityTestResults from "backend/views/GPersonalityTest/personalityTestResults";
import personalityTestList from "backend/views/GPersonalityTest/ListPersonalityTest";
import personalityTestDetail from "backend/views/GPersonalityTest/DetailsPersonalityTest";
import AddPersonalityTest from "backend/views/GPersonalityTest/AddPersonalityTest";
import AddHr from "backend/views/GPersonalityTest/AddHr";

/// skills test 

import listetest from "backend/views/examples/skillstest/listtest";
import AddTest from "backend/views/examples/skillstest/AddnewTest";
import Questions from "backend/views/examples/skillstest/Questions";
import AddQuestion from "backend/views/examples/skillstest/AddQuestion";
import UpdateQuestion from "backend/views/examples/skillstest/UpdateQuestion";
import Result from "backend/views/examples/skillstest/Result";
import mail from "backend/views/examples/skillstest/mail";
import Profile from "backend/views/examples/Profile";





var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/UsersList",
    name: "UsersList",
    icon: "ni ni-circle-08 text-purple",
    component: UsersList,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
   //job routes
  {
    path: "/ListJobs",
    name: "Jobs",
    icon: "ni ni-circle-08 text-pink",
    component: ListJobs,
    layout: "/admin",
  },
  {
    path: "/PostJob",
    name: "PostJob",
    component: PostJob,
    layout: "/admin",
  },
  {
    path: "/ListJobsNonApp",
    name: "List Jobs Non Approved",
    //icon: "ni ni-circle-08 text-pink",
    component: ListJobsNonApp,
    layout: "/admin",
  },
  {
    path: "/Ranking",
    name: "Ranking",
    component: Ranking,
    layout: "/admin",
  },
  {
    path: "/scrapping",
    name: "scrapping",
    icon: "ni ni-planet text-blue",
    component: scraping,
    layout: "/admin",
  },
  {
    path: "/ListReclamations",
    name: "ListReclamations",
    icon: "ni ni-planet text-blue",
    component: ListReclamations,
    layout: "/admin",
  },
  {
    path: "/StatReclamation",
    name: "StatReclamation",
    icon: "ni ni-planet text-blue",
    component: StatReclamation,
    layout: "/admin",
  },
  {
    path: "/calendar",
    name: "calendar",
    icon: "ni ni-planet text-blue",
    component: calendar, 
    layout: "/admin",
  },
  {
    path: "/personalityTestList",
    name: "Personality Test List",
    icon: "ni ni-spaceship text-red ",
    component: personalityTestList,
    layout: "/admin",
  },
  {
    path: "/personalityTestResults",
    name: "Personality Test Results",
    component: personalityTestResults,
    layout: "/admin",
  },  
  {
    path: "/listetest",
    name: "skills Test List",
    icon: "ni ni-trophy text-orange",
    component:  listetest,
    layout: "/admin",
  },

  {
    path: "/allquestions",
    name: "Skills Test Questions",
    component: Questions,
    layout: "/admin",
  },
  
  {
    path: "/add",
    component: AddTest,
    layout: "/admin",
  },
  {
    path: "/ReclamationDetails",
    component: ReclamationDetails, 
    layout: "/admin",
  },
  
  
  {
    path: "/personalityTestDetail",
    component: personalityTestDetail,
    layout: "/admin",
  },
  {
    path: "/addPersonalityTest",
    component: AddPersonalityTest,
    layout: "/admin",
  },
  {
    path: "/addHr",
    component: AddHr,
    layout: "/admin",
  },

  //job not in sidebar
  ,
  {
    path: "/jobDetails/:id", 
    //name: "Job Details",
    component: JobDetails,
    layout: "/admin",
  },
  {
    path: "/jobAdDetails/:id", 
    //name: "Job Details",
    component: JobAdDetails,
    layout: "/admin",
  },
  {
    path: "/activatedJobs",
    //name: "activatedJobs",
    component: activatedJobs,
    layout: "/admin",
  },
  {
    path: "/deactivatedJobs",
    //name: "deactivated Jobs",
    component: deactivatedJobs,
    layout: "/admin",
  },
  {
    path: "/updateJob",
    component: UpdateJob,
    layout: "/admin",
  },


  ///////quiz skills 
  
 
  {
    path: "/send",
   component: mail,
    layout: "/admin",
  },
  {
    path: "/addquestion",
    component: AddQuestion,
    layout: "/admin",
  },
  {
    path: "/updatequestion",
    component: UpdateQuestion,
    layout: "/admin",
  },

  {
    path: "/result/:testId" ,
    component: Result,
    layout: "/admin",
  },

];
export default routes;
