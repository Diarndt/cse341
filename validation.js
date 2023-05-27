
// const { body, validationResult } = require('express-validator')
// const vegeValidationRules = () => {
//   return [
//     // username must be an email
//     body('plantName').isEmpty(),
//     // password must be at least 5 chars long
//     // body('password').isLength({ min: 5 }),
//   ]
// }

// const validate = (req, res, next) => {
//   const errors = validationResult(req)
//   if (errors.isEmpty()) {
//     return next()
//   }
//   const extractedErrors = []
//   errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

//   return res.status(422).json({
//     errors: extractedErrors,
//   })
// }

// module.exports = {
//   vegeValidationRules,
//   validate,
// }

// const { check } = require('express-validator');
 
// exports.checkVegetable = [
//     check('plantName', 'Plant name is requied').not().isEmpty(),
//     check('scientificName', 'Scientific name is required').not().isEmpty(),
//     check('countryOfOrigin', 'Place of origin is required').not().isEmpty(),
//     check('bestEnvironment', 'Best environment is required').not().isEmpty(),
//     check('bestTimeToPlant', 'Best time to plant is required').not().isEmpty(),
//     check('whenToHarvest', 'When to harvest is required').not().isEmpty(),
//     check('commonRecipes', 'Common Recipes is required').not().isEmpty(),
    
// ]
 

