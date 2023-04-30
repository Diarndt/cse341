const express = require('express');
const router = express.Router();
const contacts = require('../controllers/contacts');

router.get('/', contacts.allContacts);
router.get('/:id', contacts.oneContact);

module.exports = router;