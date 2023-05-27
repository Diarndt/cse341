const validator = require('../helpers/validator');

const veggie = async (req, res, next) => {
    const validationRule = {
        "plantName": "required|string",
        // "email": "required|string|email",
        // "username": "required|string",
        // "phone": "required|string",
        // "password": "required|string|min:6|confirmed",
        // "gender": "string"
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    }).catch( err => console.log(err))
}
module.exports = {
    veggie
};