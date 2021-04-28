const express = require("express");
const router = express.Router();
const auth = require('../../middleware/auth');

const result = require("../../controllers/result");
const question = require("../../controllers/question");
//const recupperermail=require("../../controllers/recupperermail");
const Test = require("../../models/skillsmodel/test");


//récupérer le user connecté à partir un token
//const user =  User.findById(req.user.id).select('-password');
//const userId= req.user.id;

function checkValidity(req, res, next) {
 // const { pin } = req.body;
 const { email, pin } = req.body;
 console.log(email)
  Test.findOne({ pin }, (err, result) => {
    if (err) {
      return res.status(500).send({ msg: "Internal server error!" });
    } else {
      if (!result) {
        return res.status(400).send({ msg: "Wrong credentials!" });
      }
      if (result.validity < new Date()) {
        return res.status(400).send({ msg: "The test has been expired!" });
      }
      //req.body.email=email
      req.body.testId = result._id;
      req.body.numberOfQuestions = result.numberOfQuestions;
      next();
    }
  });
}


router.post("/takeTest",auth,checkValidity,result.takeTest,question.testQuestion);
router.post("/submitTest",auth, result.submitTest);
router.post("/listResult", auth, result.listResult);

module.exports = router;
