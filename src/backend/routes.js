import Index from "backend/views/Index.js";
import Profile from "backend/views/examples/Profile.js";
import Maps from "backend/views/examples/Maps.js";
import Register from "backend/views/examples/Register.js";
import Login from "backend/views/examples/Login.js";
import Tables from "backend/views/examples/Tables.js";
import Icons from "backend/views/examples/Icons.js";
import UsersList from "backend/views/examples/UsersList.js";
import ListJobs from "backend/views/ListJobs";
import JobDetails from "backend/views/examples/JobDetails";
import scraping from "backend/views/examples/scrapping";
var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  /*{
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },*/
  {
    path: "/UsersList",
    name: "UsersList",
    icon: "ni ni-circle-08 text-pink",
    component: UsersList,
    layout: "/admin",
  },
  {
    path: "/ListJobs",
    name: "ListJobs",
    icon: "ni ni-circle-08 text-pink",
    component: ListJobs,
    layout: "/admin",
  },
  {
    path: "/JobDetails",
    name: "JobDetails",
    icon: "ni ni-circle-08 text-pink",
    component: JobDetails,
    layout: "/admin",
  },
  {
    path: "/scrapping",
    name: "scrapping",
    icon: "ni ni-planet text-blue",
    component: scraping,
    layout: "/admin",
  },

];
export default routes;