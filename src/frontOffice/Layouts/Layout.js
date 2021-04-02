import  React,{Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import {BrowserRouter} from'react-router-dom';
import Home from '../views/Home'; 
const Layout = (props) => {
    return (
        <BrowserRouter>
            <Fragment>
                <div id="wrapper">  
                    <Navbar/>  
                    <div id="content-wrapper" className="d-flex flex-column">  
                        <div id="content">  
                        <Header/>  
                            
                        </div>  
                        <Sidebar/>
                        <Footer />  
                    </div>  
                </div>  
            </Fragment> 
        </BrowserRouter>
    );
};
export default Layout;
