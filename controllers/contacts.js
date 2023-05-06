const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;
// const Contact = require('../routes/contacts'); 

const getAll = async (req, res, next) => {
  const result = await mongodb.getDb().db('contacts').collection('contacts').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
  });
};

const getOne = async (req, res, next) => {
  const contactId = new ObjectId(req.params.id);
  const result = await mongodb
  .getDb()
  .db('contacts')
  .collection('contacts')
  .find({_id:contactId});
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

//Create POST for a new contact
const createNew = async (req, res) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };

  const result = await mongodb.getDb().db('contacts').collection('contacts').insertOne(contact);
  res.status(201).json();
};

//Create a PUT to update a contact
const updateContact = async (req, res) => {
    const contactId = new ObjectId(req.params.id);
    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    };
    const response = await mongodb.getDb().db('contacts').collection('contacts').replaceOne({ _id: contactId }, contact);
    console.log(response);
    if(response.modifiedCount > 0) {
      res.status(204).send();
    }else {
      res.status(500).json(response.error || 'An error occurred while updating the contact.');
    }
};

//Create a DELETE  use deleteOne
const deleteContact = async (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db('contacts').collection('contacts').deleteOne({ _id: contactId }, true);
  console.log(response);
  
    res.status(200).send();

};


module.exports = {getAll, getOne, createNew, updateContact, deleteContact};

