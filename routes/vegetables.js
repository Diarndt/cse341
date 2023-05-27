const express = require('express');
const router = express.Router();
const vegetablesController = require('../controllers/vegetables');
// const { vegetableSchema } = require('../helper/validation_schema');
// const vegeValidation = require('../helper/validation_schema');
const vegeValidation = require('../middleware/validator')

router.get('/', vegetablesController.getAll);
router.get('/:id', vegetablesController.getOne);

//Use post to create a new contact
router.post('/', vegeValidation.veggie, vegetablesController.createVegetable);
router.put('/:id', vegetablesController.updateVegetable);
router.delete('/:id', vegetablesController.deleteVegetable);

module.exports = router;