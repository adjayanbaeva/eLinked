const validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data){
    let errors = {};
    
    //name validation
    if (!validator.isLength(data.name, {min: 2, max: 30})){
        errors.name = 'Name must be between 2 and 30 characters';
    }

    //email validation
    if (!validator.isEmail(data.email)){
        errors.email = 'Email is invalid';
    }

    if (isEmpty(data.email)){
        errors.email = 'Email field is required';
    }

    //password validation
    if (isEmpty(data.password)){
        errors.password = 'Password is required';
    }

    if (isEmpty(data.password2)){
        errors.password2 = 'Confirm password field is required';
    }

    if (!validator.equals(data.password, data.password2)){
        errors.password2 = 'Password must match';
    }




    



    return {
        errors,
        isValid: isEmpty(errors),
    };
};