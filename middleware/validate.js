const validator = require('../helpers/validate');

const saveVeggie = async (req, res, next) => {
    const validationRule = {
    'plantName': 'required|string', 
    'scientificName': 'string', 
    'countryOfOrigin': 'string', 
    'bestEnvironment': 'string',
    'bestTimeToPlant': 'string', 
    'whenToHarvest': 'string',
    'commonRecipes': 'string'
    };
    await validator(req.body, validationRule, {}, (err, status) => {
        if(!status) {
            res.status(412).send({
                success: false,
                message: 'Validation Failed',
                data: err
            });
        } else {
            next();
        }
    });
};

const saveFlowers = async (req, res, next) => {
    const validationRule = {
    'plantName': 'required|string', 
    'scientificName': 'string', 
    'countryOfOrigin': 'string'
    };
    await validator(req.body, validationRule, {}, (err, status) => {
        if(!status) {
            res.status(412).send({
                success: false,
                message: 'Unable to save that flower.',
                data: err
            });
        } else {
            next();
        }
    });
};

module.exports = {saveVeggie, saveFlowers};