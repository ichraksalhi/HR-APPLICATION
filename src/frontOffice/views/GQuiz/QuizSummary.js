import React, {Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
//import { Icon, InlineIcon } from '@iconify/react';
//import checkCircleOutline from '@iconify-icons/mdi/check-circle-outline';


class QuizSummary extends Component {
    constructor(props ){
     
            super(props);
            this.state= {
                score:0,
                numberofQuestions:0,
                numberOfAnsweredQuestion:0,
                correctAnswers:0,
                wrongAnswers:0,
                usedHints:0,
                usedFiftyFifty:0


            }
        }
        componentDidMount(){
            this.setState({
                score:10,
                numberofQuestions:15,
                numberOfAnsweredQuestion:8,
                correctAnswers:8,
                wrongAnswers:7,
                usedHints:10,
                usedFiftyFifty:0
            })
        }
    
 render(){

    console.log(this.props);
     return(
        <Fragment>
        <Helmet><title>Quiz Summary - E Learning</title></Helmet>
       <section className="quiz-summary">
        <div  style={{ textAlign: 'center' }}>
        </div>
        <h1>Congratulations you made it!</h1>
        <div className="container stats">
            <h4>you're an absolute genius!</h4>
            <h2 >Your Score: 85</h2>
            <span className="stat left">Total Number of Questions: </span><span className="right">{this.state.numberOfQuestions}</span><br />
            <span className="stat left">Number of attempted questions: </span><span className="right">{this.state.numberOfAnsweredQuestions}</span><br />
            <span className="stat left">Number of Correct Answers: </span><span className="right">{this.state.correctAnswers}</span><br />
            <span className="stat left">Number of Wrong Answers: </span><span className="right">{this.state.wrongAnswers}</span><br />
            <span className="stat left">Hints used: </span><span className="right">{this.state.usedHints} out of 5</span><br />
            <span className="stat left">50-50 used: </span><span className="right">{this.state.usedfiftyFifty} out of 2</span><br />
        </div>
        <section>
            <ul>
                <li><Link to="/">Back to Home</Link></li>
            </ul>
            <p>Want to earn really cool cash while playing games? <Link to="/register">Create an account now!</Link></p>
        </section>
        </section>
    </Fragment>
     );

 }
}

export default QuizSummary; 