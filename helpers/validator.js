const expressValidator = require('express-validator');

const validator = async (body, rules, customMessages, callback) => {
    const validation = new expressValidator(body, rules, customMessages);
    validation.passes(() => callback(null, true));
    validation.fails(() => callback(validation.errors, false));
};
module.exports = validator;