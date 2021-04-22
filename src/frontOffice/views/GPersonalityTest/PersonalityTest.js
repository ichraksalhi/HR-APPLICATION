import React, { Component } from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import clockOutline from '@iconify-icons/mdi/clock-outline';
import {Link} from "react-router-dom";
import { Helmet } from "react-helmet";
import logo from '../../assets/images/discLogo.png';

//12-ADDING QUESTIONS 
import questions from '../../../personalityQuestions.json';
//import isEmpty
import isEmpty from '../../../utils/is-empty'



export default class PersonalityTest extends Component {

    constructor(props){
        super(props);

        this.state = {
            questions,
            currentQuestion:{},
            nextQuestion: {},
            previousQuestion: {},
            answer: '',
            numberOfQuestions: 0,
            answeredQuestions: 0,
            currentQuestionIndex: 0,
            time: {},

            score: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            hints: 5,
            fiftyFifty: 2,
            usedFiftyFifty:0,

            
        };

    }

    // increaseCount = () => {
    //     this.setState({
    //         counter : 5
    //     });
    // }

    componentDidMount(){
        const { questions, currentQuestion, nextQuestion , previousQuestion }= this.state;
        this.displayQuestions(questions, currentQuestion, nextQuestion , previousQuestion);
    }

    displayQuestions = (questions = this.state.questions, currentQuestion, nextQuestion,previousQuestion) =>{
        let {currentQuestionIndex} = this.state;
        //check if the question is empty
        if (!isEmpty( this.state.questions )) {
            questions = this.state.questions;
            currentQuestion = questions[currentQuestionIndex];
            nextQuestion = questions[currentQuestionIndex + 1];
            previousQuestion = questions[currentQuestionIndex - 1];
            const answer = currentQuestion.answer;
            this.setState({
                currentQuestion,
                nextQuestion,
                previousQuestion,
                answer,
            });
        }

    }

 

    render() {
        //check if the questions list is displayed 
        console.log(questions);

        const { currentQuestion } = this.state;
        
        

        return (
            <>
            <Helmet>
              <title>Personality Test</title>
            </Helmet>
            <div className="questionsTest" style={{color:'black'}}>
                <div align='center'>
                <br/>
                <img src={logo} className="logoTest" alt="logo" />  
                </div>
                <br/>
               <h2 style={{fontWeight:'bold'}}>DISC Test </h2>
                <div>
                    <p>
                        <span className="left">1 of 10</span>
                        <span className="right">30:00<span><Icon className="lifeline"  icon={clockOutline} /></span></span>
                    </p>
                </div>
             <h5>{currentQuestion.question}</h5>
               <div className="options-container">
                <p className="optionsRed">{currentQuestion.optionA}</p> 
                <p className="optionsGreen">{currentQuestion.optionB}</p>    
                </div>  
                <div className="options-container">
                <p className="options">{currentQuestion.optionC}</p> 
                <p className="optionsYellow">{currentQuestion.optionD}</p>    
                </div> 
                <div className="button-container">
                    <button><Link style={{color:'white'}} to="/personalityTest/instructions">Previous</Link></button>
                    <button><Link style={{color:'white'}} to="/personalityTest/testResult"> Next </Link></button>
                   
                    <button><Link style={{color:'white'}} to="/Elearning"> Quit </Link></button>

                </div> 
            </div>
            </>
        )
    }
}
