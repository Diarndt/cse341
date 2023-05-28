const express = require('express');
const router = express.Router();
const flowersController = require('../controllers/flowers');
const validation = require('../middleware/validate');

router.get('/', flowersController.getAll);
router.get('/:id', flowersController.getOne);

//Use post to create a new contact
router.post('/', validation.saveFlowers, flowersController.createFlower);
router.put('/:id', flowersController.updateFlower);
router.delete('/:id', flowersController.deleteFlower);

module.exports = router;