const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAll);
router.get('/:id', contactsController.getOne);

//Use post to create a new contact
router.post('/', contactsController.createNew);

module.exports = router;