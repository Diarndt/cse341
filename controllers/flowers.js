const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;
// const Contact = require('../routes/contacts'); 

const getAll = (req, res) => {
  mongodb
  .getDb()
  .db('gardens')
  .collection('flowers')
  .find()
  .toArray((err, list) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(list);
  });
};

const getOne = async (req, res, next) => {
  const flowerId = new ObjectId(req.params.id);

  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must have a valid flowers id to find a flower');
    return;
  }
  mongodb
  .getDb()
  .db('gardens')
  .collection('flowers')
  .find({_id:flowerId})
  .toArray((err, result) => {
    //added try/catch block
    try {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result[0]);on(lists[0]);
    } catch (err) {
        res.status(400).json({ message: err });
      }
  });
};

//Create POST for a new contact
const createFlower = async (req, res) => {
  const flower = {
    plantName: req.body.plantName, 
    scientificName: req.body.scientificName, 
    countryOfOrigin: req.body.countryOfOrigin
  };
  //added try/catch block
  try{
  const result = await mongodb.getDb().db('gardens').collection('flowers').insertOne(flower);
    if(response.acknowledge) {
     res.status(201).json();
    } 
  } catch (err) {
    res.status(500).json(response.error || 'An error occurred while creating this vegetable.');
  }
};

//Create a PUT to update a contact
const updateFlower = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must have a valid flowers id to update a flower');
    return;
  }
    const flowerId = new ObjectId(req.params.id);
    const flower = {
      plantName: req.body.plantName, 
      scientificName: req.body.scientificName, 
      countryOfOrigin: req.body.countryOfOrigin
    };
    //added try/catch block
    try {
    const response = await mongodb.getDb().db('gardens').collection('flowers').replaceOne({ _id: flowerId }, flower);
    console.log(response);
    if(response.modifiedCount > 0) {
      res.status(204).send();
    } 
  } catch (err) {
      res.status(500).json(response.error || 'An error occurred while updating the contact.');
    }
};

//Create a DELETE  use deleteOne
const deleteFlower = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must have a valid flowers id to delete a flower');
    return;
  }
  const flowerId = new ObjectId(req.params.id);
  //added try/catch block
  try{
  const response = await mongodb.getDb().db('gardens').collection('flowers').deleteOne({ _id: flowerId }, true);
  console.log(response);

   if(response.deleteVegetable > 0) {
    res.status(200).send();
    } 
  }catch (err) {
    res.status(500).json(response.error || 'Error occurred while deleting.'); //best practice to log the 500 error to a file and not display
  }
};
  

module.exports = {getAll, getOne, createFlower, updateFlower, deleteFlower};