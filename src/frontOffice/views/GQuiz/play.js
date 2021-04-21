import React, { Component } from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import setCenter from '@iconify-icons/mdi/set-center';
import lightbulbOnOutline from '@iconify-icons/mdi/lightbulb-on-outline';
import clockOutline from '@iconify-icons/mdi/clock-outline';
import {Link} from "react-router-dom";
export default class test extends Component {
    render() {
        return (
            <>
            <div className="questions" style={{color:'black'}}>
               <h2>ANGULAR TEST </h2>
                <div className="lifeline-container">
                    <p><span><Icon className="mdi mdi-set-center mdi-24px lifeline-icon" icon={setCenter} /></span>2</p>
                    <p><span><Icon  className="lifeline" icon={lightbulbOnOutline}/></span>5</p>
                  
                </div>
                <div>
                    <p>
                        <span className="left">1 of 15</span>
                        <span className="right">2:15<span><Icon className="lifeline"  icon={clockOutline} /></span></span>
                    </p>
                </div>
             <h5>In which array of <stron>AppModule</stron> should you declare your services in order for there to be a single instance for your entire application? </h5>
               <div className="options-container">
                <p className="options">declarations</p> 
                <p className="options">imports</p>    
                </div> 
                <div className="options-container">
                <p className="options">providers</p> 
                <p className="options">no response</p>    
                </div> 
                <div className="button-container">
                    <button>Previous</button>
                    <button><Link style={{color:'white'}} to="/quizSummary"> Next </Link></button>
                   
                    <button><Link style={{color:'white'}} to="/Elearning"> Quit </Link></button>

                </div> 
            </div>
            </>
        )
    }
}
