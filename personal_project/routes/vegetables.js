const express = require('express');
const router = express.Router();
const vegetablesController = require('../controllers/vegetables');

router.get('/', vegetablesController.getAll);
router.get('/:id', vegetablesController.getOne);

//Use post to create a new contact
router.post('/', vegetablesController.createVegetable);
router.put('/:id', vegetablesController.updateVegetable);
router.delete('/:id', vegetablesController.deleteVegetable);

module.exports = router;