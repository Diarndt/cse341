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
const createNew = async (req, res, next) => {
  const newContact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };

  const result = await mongodb.getDb().db().collection('contacts').insertOne(newContact);

  res.status(201).json({
    message: 'Contact successfully added',
    contactId: result.insertId
  });
};

//Create a PUT to update a contact


module.exports = {getAll, getOne, createNew};

