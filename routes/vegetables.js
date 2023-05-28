const express = require('express');
const router = express.Router();
const vegetablesController = require('../controllers/vegetables');
const validation = require('../middleware/validate');

router.get('/', vegetablesController.getAll);
router.get('/:id', vegetablesController.getOne);

//Use post to create a new contact
router.post('/', validation.saveVeggie, vegetablesController.createVegetable);
router.put('/:id', validation.saveVeggie, vegetablesController.updateVegetable);
router.delete('/:id', vegetablesController.deleteVegetable);

module.exports = router;