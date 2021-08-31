import axios from 'axios';
import { LOAD_QUIZ, GET_ERRORS, SET_QUIZ_LOADING, END_FREE_QUIZ, CLEAR_QUIZ_STATS } from './types';

export const fetchQuiz = () => dispatch => {
    axios.get('http://localhost:5000/api/quiz/all')
        .then(res => dispatch({
            type: LOAD_QUIZ,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }));
};

export const getFreeQuestions = () => (dispatch) => {
   
    dispatch(setQuizLoading());
    axios.get("http://localhost:5000/api/quiz/getFreeQuiz")
        .then(res => dispatch({
           
                type: LOAD_QUIZ,
                payload: res.data,
               
            })
           
        )
        .catch(err => {
            console.error(err);
        });
        
};

export const endFreeQuiz = (quizData, history) => (dispatch) => {

    dispatch({
        type: END_FREE_QUIZ,
        payload: quizData
    });
    history.push('/quizSummary');
};

export const clearQuizStats = () => (dispatch) => dispatch({
    type: CLEAR_QUIZ_STATS,
    payload: {}
});

export const setQuizLoading = () => {
    return {
        type: SET_QUIZ_LOADING
    }
};
// export const EXAM_FETCH_BEGIN = 'EXAM_FETCH_BEGIN'
// const examFetchBigin=()=>({
//     type: EXAM_FETCH_BEGIN
// })

// export const EXAM_FETCH_SUCCEED = 'EXAM_FETCH_SUCCEED'
// const examFetchSucceed=(res)=>({
//     type: EXAM_FETCH_SUCCEED,
//     value: res
// })

// export const EXAM_FETCH_FAIL = 'EXAM_FETCH_FAIL'
// const examFetchFail=(error)=>({
//     type: EXAM_FETCH_FAIL,
//     value: error
// })

// export const EXIT_EXAM = 'EXIT_EXAM'
// const exitExam =()=>{
//     Auth.deAuthenticateUser();
//     return {type: EXIT_EXAM}
// }

// export const SET_ANSWEWR = 'SET_ANSWEWR'
// const setAnswer =(id, questionType, option)=>({
//     type: SET_ANSWEWR,
//     id: id,
//     questionType: questionType,
//     value: option
// })


// export const ANSWEWR_SEND_BEGIN = 'ANSWEWR_SEND_BEGIN'
// const answerSendBigin=()=>({
//     type: ANSWEWR_SEND_BEGIN
// })

// export const ANSWEWR_SEND_SUCCEED = 'ANSWEWR_SEND_SUCCEED'
// const answerSendSucceed =(res)=>{
//     Auth.deAuthenticateUser();
//     return{
//         type: ANSWEWR_SEND_SUCCEED,
//         value: res
//     }
// }

// export const ANSWEWR_SEND_FAIL= 'ANSWEWR_SEND_FAIL'
// const answerSendFail =(error)=>({
//     type: ANSWEWR_SEND_FAIL,
//     value: error

// })

// const asynchorousSendAnswer=(questionPayload)=>{
//     console.log(questionPayload);
//     return (dispatch)=>{
//         dispatch(answerSendBigin());

//         fetch("http://localhost:5000/api/exam",{
//             method: 'POST',
//             body: JSON.stringify(questionPayload),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         })
//         .then( res=>res.json() )
//         .then( res=>{
//             console.log(res);
//             if( res.status)
//                 dispatch(answerSendSucceed(res.score) )
//             else
//                 dispatch(answerSendFail({error: res.error}) )
//         })
//         .catch( error=>{
//             console.log(error);
//             dispatch(answerSendFail(error) )
//         })
//     }
// }

