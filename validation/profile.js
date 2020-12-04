const validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data){
    let errors = {};

    if (!validator.isLength(data.handle, {min: 2, max: 30})){
        errors.handle = 'Handle needs to be between 2 and 40 characters';
    }

    if (isEmpty(data.handle)){
        errors.handle = 'Handle field is required';
    }

    if (isEmpty(data.status)){
        errors.status = 'Status field is required';
    }

    if (isEmpty(data.skills)){
        errors.skills = 'Skills field is required';
    }

    if (isEmpty(data.website)){
        if (!validator.isURL(data.website)){
            errors.website = 'Not a valid URL';
        }
    }

    if (isEmpty(data.youtube)){
        if(!validator.isURL(data.youtube)){
            errors.youtube = 'Not a valid URL';
        }
    }

    if (isEmpty(data.twitter)){
        if(!validator.isURL(data.twitter)){
            errors.twitter = 'Not a valid URL';
        }
    }

    if (isEmpty(data.facebook)){
        if (!validator.isURL(data.facebook)){
            errors.facebook = 'Not a valid URL';
        }
    }

    if (isEmpty(data.linkedin)){
        if (!validator.isURL(data.linkedin)){
            errors.linkedin = 'Not a valid URL';
        }
    }

    if (isEmpty(data.instagram)){
        if (!validator.isURL(data.instagram)){
            errors.instagram = 'Not a valid URL';
        }
    }

    return {
        errors: errors,
        isValid: isEmpty(errors)
    }
}

