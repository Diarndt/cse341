const mongodb = require('../personal_project/db/connect');
const ObjectId = require('mongodb').ObjectId;
// const Contact = require('../routes/contacts'); 

const getAll = async (req, res, next) => {
  const result = await mongodb.getDb().db('gardens').collection('flowers').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
  });
};

const getOne = async (req, res, next) => {
  const flowerId = new ObjectId(req.params.id);
  const result = await mongodb
  .getDb()
  .db('gardens')
  .collection('flowers')
  .find({_id:flowerId});
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

//Create POST for a new contact
const createFlower = async (req, res) => {
  const flower = {
    plantName: req.body.plantName, 
    scientificName: req.body.scientificName, 
    countryOfOrigin: req.body.countryOfOrigin
  };

  const result = await mongodb.getDb().db('gardens').collection('flowers').insertOne(flower);
  res.status(201).json();
};

//Create a PUT to update a contact
const updateFlower = async (req, res) => {
    const flowerId = new ObjectId(req.params.id);
    const flower = {
      plantName: req.body.plantName, 
      scientificName: req.body.scientificName, 
      countryOfOrigin: req.body.countryOfOrigin
    };
    const response = await mongodb.getDb().db('gardens').collection('flowers').replaceOne({ _id: flowerId }, flower);
    console.log(response);
    if(response.modifiedCount > 0) {
      res.status(204).send();
    }else {
      res.status(500).json(response.error || 'An error occurred while updating the contact.');
    }
};

//Create a DELETE  use deleteOne
const deleteFlower = async (req, res) => {
  const flowerId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db('gardens').collection('flowers').deleteOne({ _id: flowerId }, true);
  console.log(response);
  
    res.status(200).send();

};

module.exports = {getAll, getOne, createFlower, updateFlower, deleteFlower};