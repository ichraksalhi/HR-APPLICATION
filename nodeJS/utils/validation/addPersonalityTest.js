const Validator = require('validator');
const isEmpty = require('../isEmpty');

module.exports = (data) => {
    let errors = {};

    data.question = !isEmpty(data.question) ?  data.question : '';
    data.optionA.text = !isEmpty(data.optionA.text) ?  data.optionA.text : '';
    data.optionA.value = !isEmpty(data.optionA.value) ?  data.optionA.value : 0;
    
    data.optionB.text = !isEmpty(data.optionB.text) ?  data.optionB.text : '';
    data.optionB.value = !isEmpty(data.optionB.value) ?  data.optionB.value : 0;
    
    data.optionC.text = !isEmpty(data.optionC.text) ?  data.optionC.text : '';
    data.optionC.value = !isEmpty(data.optionC.value) ?  data.optionC.value : 0;
    
    data.optionD.text = !isEmpty(data.optionD.text) ?  data.optionD.text : '';
    data.optionD.value = !isEmpty(data.optionD.value) ?  data.optionD.value : 0;
    // data.optionB = !isEmpty(data.optionB) ?  data.optionB: ['',''];
    // data.optionC = !isEmpty(data.optionC) ?  data.optionC : ['',''];
    // data.optionD = !isEmpty(data.optionD) ?  data.optionD : ['',''];


    if (Validator.isEmpty(data.question)) {
        errors.question = 'Question is required!';
    }

    if (Validator.isEmpty(data.optionA.text)) {
        errors.optionA = 'Option (A) is required!';
    }

    if (Validator.isEmpty(data.optionB.text)) {
        errors.optionB = 'Option (B) is required!';
    }

    if (Validator.isEmpty(data.optionC.text)) {
        errors.optionC = 'Option (C) is required!';
    }
    
    if (Validator.isEmpty(data.optionD.text)) {
        errors.optionD = 'Option (D) is required!';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};