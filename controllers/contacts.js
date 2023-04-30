const Contact = require('../routes/contacts'); 

const allContacts = (req, res, next) => {
  Contact.find({}, (err, contacts) => {
    if (err) {
      return next(err);
    }
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contacts);
  });
};


const ContactModel = require('../routes/contacts');

const oneContact = (req, res, next) => {
  const contactId = req.params.id;

  ContactModel.findById(contactId, (err, contact) => {
    if (err) {
      return next(err);
    }
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contacts);
  });
};

module.exports = {allContacts, oneContact};

