import React, { Component } from "react";
import { Icon, InlineIcon } from "@iconify/react";
import clockOutline from "@iconify-icons/mdi/clock-outline";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import logo from "../../assets/images/discLogo.png";

//12-ADDING QUESTIONS
//import questions from '../../../personalityQuestions.json';
import questions from "../../../tutoQuestions.json";

//import isEmpty
import isEmpty from "../../../utils/is-empty";

import m from "materialize-css";

//import audio
import correctNotif from "../../assets/audio/src_assets_audio_correct-answer.mp3";
import wrongNotif from "../../assets/audio/src_assets_audio_wrong-answer.mp3";
import btnSound from "../../assets/audio/src_assets_audio_button-sound.mp3";

export default class PersonalityTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions,
      currentQuestion: {},
      nextQuestion: {},
      previousQuestion: {},
      answer: "",
      numberOfAnsweredQuestions: 0,
      answeredQuestions: 0,
      currentQuestionIndex: 0,
      time: {},

      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      hints: 5,
      fiftyFifty: 2,
      usedFiftyFifty: 0,
    };
    this.interval = null;
  }

  // increaseCount = () => {
  //     this.setState({
  //         counter : 5
  //     });
  // }

  componentDidMount() {
    const {
      questions,
      currentQuestion,
      nextQuestion,
      previousQuestion,
    } = this.state;
    this.displayQuestions(
      questions,
      currentQuestion,
      nextQuestion,
      previousQuestion
    );
    this.startTimer();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  displayQuestions = (
    questions = this.state.questions,
    currentQuestion,
    nextQuestion,
    previousQuestion
  ) => {
    let { currentQuestionIndex } = this.state;
    //check if the question is empty
    if (!isEmpty(this.state.questions)) {
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
        numberOfQuestions: questions.length,
      });
    }
  };

  handleQuitButtonClick = () => {
    setTimeout(() => {
      document.getElementById("btnSound").play();
    }, 500);
    if (window.confirm("Are you sure you want to quit?")) {
      this.props.history.push("/Elearning");
    }
  };

  handleOptionClick = (e) => {
    if (e.target.innerHTML.toLowerCase() === this.state.answer.toLowerCase()) {
      setTimeout(() => {
        document.getElementById("correct-sound").play();
      }, 500);
      this.correctAnswer();
    } else {
      setTimeout(() => {
        document.getElementById("wrong-sound").play();
      }, 500);
      this.wrongAnswer();
    }
    // m.toast({
    //     html: 'option clicked!',
    //     classes: 'toast-dark'
    // });
  };

  correctAnswer = () => {
    m.toast({
      html: "Correct answer!",
      classes: "toast-valid",
      displayLength: 1500,
    });
    this.setState(
      (previousState) => ({
        score: previousState.score + 1,
        correctAnswers: previousState.correctAnswers + 1,
        currentQuestionIndex: previousState.currentQuestionIndex + 1,
        numberOfAnsweredQuestions: previousState.numberOfAnsweredQuestions + 1,
      }),
      () => {
        if (this.state.nextQuestion === undefined) {
          this.endGame();
        } else {
          this.displayQuestions(
            this.state.questions,
            this.state.currentQuestion,
            this.state.nextQuestion,
            this.state.previousQuestion
          );
        }
      }
    );
  };
  wrongAnswer = () => {
    navigator.vibrate(1000);
    m.toast({
      html: "Wrong answer!",
      classes: "toast-invalid",
      displayLength: 1500,
    });
    this.setState(
      (previousState) => ({
        wrongAnswers: previousState.wrongAnswers + 1,
        currentQuestionIndex: previousState.currentQuestionIndex + 1,
        numberOfAnsweredQuestions: previousState.numberOfAnsweredQuestions + 1,
      }),
      () => {
        if (this.state.nextQuestion === undefined) {
          this.endGame();
        } else {
          this.displayQuestions(
            this.state.questions,
            this.state.currentQuestion,
            this.state.nextQuestion,
            this.state.previousQuestion
          );
        }
      }
    );
  };

  startTimer = () => {
    const countDownTime = Date.now() + 1200000;
    this.interval = setInterval(() => {
      const now = new Date();
      const distance = countDownTime - now;

      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(this.interval);
        this.setState(
          {
            time: {
              minutes: 0,
              seconds: 0,
            },
          },
          () => {
            this.endGame();
          }
        );
      } else {
        this.setState({
          time: {
            minutes,
            seconds,
            distance,
          },
        });
      }
    }, 1000);
  };

  endGame = () => {
    alert("Quiz has eneded!");
    const { state } = this;
    const playerStats = {
      score: state.score,
      numberOfQuestions: state.numberOfQuestions,
      numberOfAnsweredQuestions: state.correctAnswers + state.wrongAnswers,
      correctAnswers: state.correctAnswers,
      wrongAnswers: state.wrongAnswers,
      // fiftyFiftyUsed: 2 - state.fiftyFifty,
      // hintsUsed: 5 - state.hints
    };
    console.log(playerStats);
    setTimeout(() => {
      this.props.history.push("/personalityTest/testResult");
    }, 1000);
  };

  render() {
    //check if the questions list is displayed
    console.log(questions);

    const {
      currentQuestion,
      currentQuestionIndex,
      numberOfQuestions,
      time,
    } = this.state;

    return (
      <>
        <>
          <audio id="correct-sound" src={correctNotif}></audio>
          <audio id="wrong-sound" src={wrongNotif}></audio>
          <audio id="btn-sound" src={btnSound}></audio>
        </>
        <Helmet>
          <title>Personality Test</title>
        </Helmet>
        <div className="questionsTest" style={{ color: "black" }}>
          <div align="center">
            <br />
            <img src={logo} className="logoTest" alt="logo" />
          </div>
          <br />
          <h2 style={{ fontWeight: "bold" }}>DISC Test </h2>
          <div>
            <p>
              <span className="left">
                {currentQuestionIndex + 1} of {numberOfQuestions}
              </span>
              <span className="right">
                {time.minutes}:{time.seconds}
                <span>
                  <Icon className="lifeline" icon={clockOutline} />
                </span>
              </span>
            </p>
          </div>
          <h5>{currentQuestion.question}</h5>
          <div className="options-container">
            <p onClick={this.handleOptionClick} className="optionsRed">
              {currentQuestion.optionA}
            </p>
            <p onClick={this.handleOptionClick} className="optionsGreen">
              {currentQuestion.optionB}
            </p>
          </div>
          <div className="options-container">
            <p onClick={this.handleOptionClick} className="options">
              {currentQuestion.optionC}
            </p>
            <p onClick={this.handleOptionClick} className="optionsYellow">
              {currentQuestion.optionD}
            </p>
          </div>
          <div className="button-container">
            <button>
              <Link
                style={{ color: "white" }}
                to="/personalityTest/instructions"
              >
                Previous
              </Link>
            </button>
            <button>
              <Link style={{ color: "white" }} to="/personalityTest/testResult">
                {" "}
                Next{" "}
              </Link>
            </button>

            <button>
              <Link style={{ color: "white" }} to="/Elearning">
                {" "}
                Quit{" "}
              </Link>
            </button>
          </div>
        </div>
      </>
    );
  }
}
