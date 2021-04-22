const express = require('express');
const router = express.Router();

const PersonalityTest = require('../../models/PersonalityTest');
const validateAddQuestion = require('../../utils/validation/addPersonalityTest');


// // GET PersonalityTest 
// // @route GET /PersonalityTest
// // @access Private
router.route('/').get((req,res)=>{
    PersonalityTest.find().then(tests => res.json(tests)).catch(
        err => res.status(400).json('Error: '+err));
});

// Gets PersonalityTest by id
// @route GET /PersonalityTest
// @desc get questions by id
// @access Private
router.get('/:id',/* passport.authenticate('jwt-admin', { session: false }),*/ (req, res) => {
    PersonalityTest.find({ _id : req.params.id })
        .then(personalitytests => res.json(personalitytests))
        .catch(err => console.log(err));
});

// // Add new PersonalityTest question
// // @route POST /PersonalityTest
// // @desc add question
// // @access Private
router.route('/add').post((req, res) => {
  
    new PersonalityTest({
        question : req.body.question,
        optionA : req.body.optionA,
        optionB : req.body.optionB,
        optionC : req.body.optionC,
        optionD : req.body.optionD,
    }).save()
    .then(() => res.json('Personality test question added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });


// // Update Quiz
// // @route PUT /PersonalityTest
// // @desc update quiz question by Id
// // @access Private
router.put('/update/:id', /*passport.authenticate('jwt-admin', { session: false }),*/ (req, res) => {
    
    
    
    //const { errors, isValid } = validateAddQuestion(req.body);

    // if (!isValid) {
    //     return res.status(400).json(errors);
    // }

    const quiz = new PersonalityTest({

        question: req.body.question,
        optionA: req.body.optionA,
        optionB: req.body.optionB,
        optionC: req.body.optionC,
        optionD: req.body.optionD
    });

    PersonalityTest.findOneAndDelete({ _id: req.params.id })
        .then((returnedQuiz) => {
            if (!returnedQuiz) {
                errors.noQuiz = 'No question found';
                return res.status(404).json(errors);
            }
            quiz.save()
                .then(() => {
                    res.json({ message: 'Quesiton updated successfully!' });
                })
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
});


// removes test
// @route DELETE /PersonalityTest/:id
// @desc removes quiz question by id
// @access Private
router.delete('/:id',/* passport.authenticate('jwt-admin', { session: false }),*/ (req, res) => {
    PersonalityTest.findByIdAndDelete({ _id: req.params.id })
        .then(() => res.json({ message: 'Question successfully removed' }))
        .catch(err => console.log(err));
});






module.exports = router;

// const validateAddQuestion = require('../utils/validation/addQuestion');
//    // '../utils/validation/addQuestion') 
// // Add new PersonalityTest question
// // @route POST /api/PersonalityTestr
// // @desc add question
// // @access Private
// router.post('/', /*passport.authenticate('jwt-admin', { session: false }),*/ (req, res) => {
//     const { errors, isValid } = validateAddQuestion(req.body);

//     if (!isValid) {
//         return res.status(400).json(errors);
//     }

//     const quiz = new PersonalityTest({
//         type: req.body.type,
//         question: req.body.question,
//         optionA: req.body.optionA,
//         optionB: req.body.optionB,
//         optionC: req.body.optionC,
//         optionD: req.body.optionD
        
//     });

//     quiz.save()
//         .then(quiz => res.json(quiz))
//         .catch(err => console.log(err));
// });

// // Gets free quiz questions
// // @route GET /api/quiz/getFreeQuiz
// // @desc get questions
// // @access Private
// router.get('/getFreeQuiz', (req, res) => {
//     PersonalityTest.aggregate([{ $sample: { size: 15 } }])
//         .exec((err, result) => {
//             if (err) {
//                 return console.log(err);
//             }
//             res.json(result);
//         });
// });

// // Gets all quiz questions
// // @route GET /api/quiz/all
// // @desc get questions
// // @access Private
// router.get('/all',/* (passport.authenticate('jwt-admin', { session: false })), */(req, res) => {
//     PersonalityTest.find()
//         .then(personalitytests => res.json(personalitytests))
//         .catch(err => console.log(err));
// });

// // Gets quiz questions
// // @route GET /api/quiz/category/:category
// // @desc get questions by category
// // @access Private
// router.get('/category/:quizCategory',/* passport.authenticate('jwt-admin', { session: false }),*/ (req, res) => {
//     PersonalityTest.find({ type: req.params.quizCategory })
//         .then(personalitytests => res.json(personalitytests))
//         .catch(err => console.log(err));
// });

// // Update Quiz
// // @route PUT /api/quiz/updateQuestion/:id
// // @desc update quiz question by Id
// // @access Private
// router.put('/updateQuestion/:id', /*passport.authenticate('jwt-admin', { session: false }),*/ (req, res) => {
//     const { errors, isValid } = validateAddQuestion(req.body);

//     if (!isValid) {
//         return res.status(400).json(errors);
//     }

//     const quiz = new PersonalityTest({

//         type: req.body.type,
//         question: req.body.question,
//         optionA: req.body.optionA,
//         optionB: req.body.optionB,
//         optionC: req.body.optionC,
//         optionD: req.body.optionD
//     });

//     PersonalityTest.findOneAndDelete({ _id: req.params.id })
//         .then((returnedQuiz) => {
//             if (!returnedQuiz) {
//                 errors.noQuiz = 'No Question found';
//                 return res.status(404).json(errors);
//             }
//             quiz.save()
//                 .then(() => {
//                     res.json({ message: 'Updated successfully!' });
//                 })
//                 .catch(err => console.log(err));
//         })
//         .catch(err => console.log(err));
// });

// // removes all quiz questions
// // @route DELETE /api/quiz/all
// // @desc remove questions
// // @access Private
// router.delete('/all',/* passport.authenticate('jwt-admin', { session: false }), */(req, res) => {
//     PersonalityTest.remove()
//         .then(info => res.json({  message: 'Successfully removed' }))
//         .catch(err => console.log(err));
// });

// // removes quiz question
// // @route DELETE /api/quiz/category/:category
// // @desc removes quiz questions by category
// // @access Private
// router.delete('/category/:quizCategory', /*passport.authenticate('jwt-admin', { session: false }), */(req, res) => {
//     PersonalityTest.remove({ type: req.params.quizCategory })
//         .then(() => res.json({ message: 'Successfully removed' }))
//         .catch(err => console.log(err));
// });

// // removes quiz questions
// // @route DELETE /api/quiz/:id
// // @desc removes quiz question by id
// // @access Private
// router.delete('/:id',/* passport.authenticate('jwt-admin', { session: false }),*/ (req, res) => {
//     PersonalityTest.findByIdAndDelete({ _id: req.params.id })
//         .then(() => res.json({ message: 'Successfully removed' }))
//         .catch(err => console.log(err));
// });

// module.exports = router;