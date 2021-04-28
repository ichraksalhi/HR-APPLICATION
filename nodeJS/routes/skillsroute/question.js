const express = require("express");
const router = express.Router();

//const verifyToken = require("../middleware/AuthCheck");

const question = require("../../controllers/question");
const auth = require('../../middleware/auth');
//const User = require('../../models/User');


router.post("/", /*verifyToken,*/ question.allQuestion);

router.post("/add",auth,/*verifyToken,*/  question.addQuestion);

router.put("/update",auth ,/* verifyToken,*/  question.updateQuestion);

router.delete("/delete",auth ,/*verifyToken,*/ question.deleteQuestion);

module.exports = router;
