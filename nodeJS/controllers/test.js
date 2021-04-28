const Test = require("../models/skillsmodel/test");
const Question = require("../models/skillsmodel/question");
const User = require('../models/User');

function createTest(req, res) {
    //récupérer le user connecté à partir un token
    const user =  User.findById(req.user.id).select('-password');
    const userId= req.user.id;
    //console.log(user);

  let { numberOfQuestions, validity } = req.body;
  if (!numberOfQuestions || !validity  ) { 
    return res.status(400).send({ msg: "Test format is not right!" });
  }

  Question.countDocuments({}, (err, result) => {
    if (err) {
      return res.status(500).send({ msg: "Internal server error1!" });
    }
    if (result < numberOfQuestions) {
      return res.status(400).send({ msg: "Less questions please!" });
    }
    validity = new Date(validity);

    Test.find({}, (err, result) => {
      if (err) {
        return res.status(500).send({ msg: "Internal server error2!" });
      }
      // Unique pin logic
      const pin = result.length ? result[0].pin + 183 : 575759;
      // const userId="6072dee42779a405404c54b1";
      const newTest = new Test({ validity, numberOfQuestions, pin, userId });

      newTest.save((err, result) => {
        if (err) {
          return res.status(500).send({ msg: "Internal server error3!" });
        }
        return res.send({ msg: "Successfully created the test!" });
      });
    })
      .sort({ pin: -1 })
      .limit(1);
  });
}

function allTest(req, res) {
  Question.countDocuments({}, (err, numberOfQuestions) => {
    if (err) {
      return res.status(500).send({ msg: "Internal server error!" });
    }
    Test.find({ userId: req.body.userId }, (err, result) => {
      if (err) {
        return res.status(500).send({ msg: "Internal server error!" });
      }
      return res.send({ tests: result, numberOfQuestions });
    });
  });
}




  // Test.find()
  //   .then(test => res.json(test))
  //   .catch(err => res.status(400).json('Error: ' + err));
    

module.exports = { createTest, allTest };
