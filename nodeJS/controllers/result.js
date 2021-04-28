const express = require("express");
//const r = express.Router();
const Result = require("../models/skillsmodel/result");
const Question = require("../models/skillsmodel/question");
//const question = require("./question");
const User = require("../models/User");

var test=require("../routes/skillsroute/result");

// const {LocalStorage} =require("node-localstorage");
// var localStorage = new LocalStorage('./scratch');

// var c =''
//     var g=''
//     var d=''
//     r.route('/idConnected').post((req, res, next) =>{
//         c=JSON.stringify(req.body) 
//         d=JSON.parse(c)
//        console.log(d.email);
//        // g=d._id 
//     })


// var c="" 
// var d=""
//     function Recupperermail(req, res) {
//      c=JSON.stringify(req.body) 
      
//      d=JSON.parse(c);
//       console.log(d);
//       return d;
     
//     }

    //const userG = d;

  
    function takeTest(req, res, next) {

     const { email,numberOfQuestions, testId } = req.body;
    //  Recupperermail()
      // const useremail= d.email;
      // const userId=d.id;
      //console.log(pin);
      //console.log(email);

      Result.findOne({ email }, (err, result) => {
       
        //console.log(email);
        if (err) {
          return res.status(500).send({ msg: "Internal server error!" });
        }
        if (result) {
          return res.status(400).send({ msg: "Email already exists!" });
        }
    
        const newResult = new Result({email,numberOfQuestions, testId });
    
        newResult.save((err, res) => {
          if (err) {
            return res.status(500).send({ msg: "Internal server error!" });
          } 
          //console.log(res);
          next();
        });
      
      });
    }
    
  
function submitTest(req, res) {

  const { email,questions} = req.body;
 // console.log(email);
  //console.log(res)
  if (!questions|| !email) {
    return res.status(400).send({ msg: "Wrong credentials!" });
  }
  Result.findOne({email }, (err, result) => {
    //console.log(email);
 // console.log(result)
    if (err) {
      return res.status(500).send({ msg: "Internal server error!" });
    }
    if (!result) {
      return res.status(401).send({ msg: "Go back!" });
    }

    Question.find({}, (err, result) => {
      if (err) {
        return res.status(500).send({ msg: "Internal server error!" });
      }

      let marks = 0;

      for ({ _id, answer } of questions) {
       // console.log(questions);
        console.log(questions.length);
        for (let question of result) {
         // console.log(result);
          //question._id is an object
          if (question._id == _id && question.answer == answer) {
            ++marks;
          
          }
          console.log(marks);
        }
      }
      Result.findOneAndUpdate({ email }, { marks }, (err, user) => {
       // console.log(res);
        //console.log(email);
        if (err) {
          return res.status(500).send({ msg: "Internal server error!" });
        }
        else {
         
          //return res.send({msg: `Successful test submission! got ${marks} out of ${questions.length} answers right!`});
           return res.status(200).send({
           msg: `Successful test submission! got ${marks} out of ${questions.length} answers right!`,
         });
      }
      });
    });
  });
}

function listResult(req, res) {
  const { testId } = req.body;
  console.log(testId);
  Result.find({ testId }, (err, result) => {
    if (err) {
      return res.status(400).send({ msg: "Unsuccess in getting results!" });
    } else {
      return res.send(result);
    }
  });
}

module.exports = { takeTest, submitTest, listResult};
// ***********************************************function takeTest(req, res, next) {
//  const user =  User.findById(req.user.id).select('-password');
// console.log(req.body);
// //console.log(req.body);

//   const { numberOfQuestions, testId } = req.body;
  
//   Result.findOne( req.user.email , (err, result) => {
//     if (err) {
//       return res.status(500).send({ msg: "Internal server error!" });
//     }
//     if (result) {
//       return res.status(400).send({ msg: "Email already exists!" });
//     }

//     const newResult = new Result({ userId:user.id, useremail:user.email, numberOfQuestions, testId });
//   console.log(newResult);
//     newResult.save((err, res) => {
//       if (err) {
//         return res.status(500).send({ msg: "Internal server error!" });
//       }
//       next();
//     });
//  });
// *********************************************}
 //const Result = require("../models/skillsmodel/result");
//  const Question = require("../models/skillsmodel/question");
// //const question = require("./question");
// function takeTest(req, res, next) {
//   const {numberOfQuestions, testId } = req.body;
//   Result.findOne({ email }, (err, result) => {
//     if (err) {
//       return res.status(500).send({ msg: "Internal server error!" });
//     }
//     if (result) {
//       return res.status(400).send({ msg: "Email already exists!" });
//     }

//     const newResult = new Result({email, numberOfQuestions, testId });

//     newResult.save((err, res) => {
//       if (err) {
//         return res.status(500).send({ msg: "Internal server error!" });
//       }
//       next();
//     });
//   });
// }
// function submitTest(req, res) {
//   const { questions } = req.body;
//   if (!questions) {
//     return res.status(400).send({ msg: "Wrong credentials!" });
//   }
//   Result.findOne({ email }, (err, result) => {
//     if (err) {
//       return res.status(500).send({ msg: "Internal server error!" });
//     }
//     if (!result) {
//       return res.status(401).send({ msg: "Go back!" });
//     }

//     Question.find({}, (err, result) => {
//       if (err) {
//         return res.status(500).send({ msg: "Internal server error!" });
//       }

//       let marks = 0;

//       for ({ _id, answer } of questions) {
//         for (let question of result) {
//           //question._id is an object
//           if (question._id == _id && question.answer == answer) {
//             ++marks;
//           }
//         }
//       }
//       Result.findOneAndUpdate({ email }, { marks }, (err, res) => {
//         console.log(email)
//         console.log(res)
//         if (err) {
//           return res.status(500).send({ msg: "Internal server error!" });
//         }
//         return res.send({
//           msg: `Successful test submission! got ${marks} out of ${questions.length} answers right!`,
//         });
//       });
//     });
//   });
// }

// function listResult(req, res) {
//   const { testId } = req.body;
//   Result.find({ testId }, (err, result) => {
//     if (err) {
//       return res.status(400).send({ msg: "Unsuccess in getting results!" });
//     } else {
//       return res.send(result);
//     }
//   });
// }

// module.exports = { takeTest, submitTest, listResult };