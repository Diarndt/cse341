const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;
// const Contact = require('../routes/contacts'); 

const getAll = (req, res) => {
  mongodb
  .getDb()
  .db('gardens')
  .collection('vegetables')
  .find()
  .toArray((err, list) => {
    if (err) {
      res.status(400).json({ message: err });
    }
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(list);
  });
};

const getOne = (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must have a valid vegetable id to find a vegetable');
  }
  const vegetableId = new ObjectId(req.params.id);
  mongodb
  .getDb()
  .db('gardens')
  .collection('vegetables')
  .find({_id:vegetableId})
  .toArray((err, result) => {
    if (err) {
      res.status(400).json({ message: err });
    }
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result[0]);
  });
};

//Create POST for a new contact
const createVegetable = async (req, res) => {
  const vegetable = {
    plantName: req.body.plantName, 
    scientificName: req.body.scientificName, 
    countryOfOrigin: req.body.countryOfOrigin, 
    bestEnvironment: req.body.bestEnvironment,
    bestTimeToPlant: req.body.bestTimeToPlant, 
    whenToHarvest: req.body.whenToHarvest,
    commonRecipes: req.body.commonRecipes
  }; 
  const response = await mongodb.getDb().db('gardens').collection('vegetables').insertOne(vegetable);
  if(response.acknowledge) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'An error occurred while creating this vegetable.');
  }
};

//Create a PUT to update a contact
const updateVegetable = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must have a valid vegetable id to find a vegetable');
  }
    const vegetableId = new ObjectId(req.params.id);
    const vegetable = {
        plantName: req.body.plantName, 
        scientificName: req.body.scientificName, 
        countryOfOrigin: req.body.countryOfOrigin, 
        bestEnvironment: req.body.bestEnvironment,
        bestTimeToPlant: req.body.bestTimeToPlant, 
        whenToHarvest: req.body.whenToHarvest,
        commonRecipes: req.body.commonRecipes
    };
    const response = await mongodb.getDb().db('gardens').collection('vegetables').replaceOne({ _id: vegetableId }, vegetable);
    console.log(response);
    if(response.modifiedCount > 0) {
      res.status(204).send();
    }else {
      res.status(500).json(response.error || 'An error occurred while updating the vegetable.');
    }
};

//Create a DELETE  use deleteOne
const deleteVegetable = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must have a valid vegetable id to delete a vegetable');
  }
  const vegetableId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db('').collection('gardens').deleteOne({ _id: vegetableId }, true);
  console.log(response);
  //add if/else statement
  if(response.deleteVegetable > 0) {
    res.status(200).send();
  } else {
    res.status(500).json(response.error || 'Error occurred while deleting.'); //best practice to log the 500 error to a file and not display
  }

};

module.exports = {getAll, getOne, createVegetable, updateVegetable, deleteVegetable};

//add if else statements after each console.log