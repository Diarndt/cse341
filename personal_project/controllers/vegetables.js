const mongodb = require('../personal_project/db/connect');
const ObjectId = require('mongodb').ObjectId;
// const Contact = require('../routes/contacts'); 

const getAll = async (req, res, next) => {
  const result = await mongodb.getDb().db('gardens').collection('vegetables').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
  });
};

const getOne = async (req, res, next) => {
  const vegetableId = new ObjectId(req.params.id);
  const result = await mongodb
  .getDb()
  .db('gardens')
  .collection('vegetables')
  .find({_id:vegetableId});
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

//Create POST for a new contact
const createVegetable = async (req, res) => {
  const vegetable= {
    plantName: req.body.plantName, 
    scientificName: req.body.scientificName, 
    countryOfOrigin: req.body.countryOfOrigin, 
    bestEnvironment: req.body.bestEnvironment,
    bestTimeToPlant: req.body.bestTimeToPlant, 
    whenToHarvest: req.body.whenToHarvest,
    commonRecipes: req.body.commonRecipes
  };

  const result = await mongodb.getDb().db('gardens').collection('vegetables').insertOne(vegetable);
  res.status(201).json();
};

//Create a PUT to update a contact
const updateVegetable = async (req, res) => {
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
      res.status(500).json(response.error || 'An error occurred while updating the contact.');
    }
};

//Create a DELETE  use deleteOne
const deleteVegetable = async (req, res) => {
  const vegetableId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db('').collection('gardens').deleteOne({ _id: vegetableId }, true);
  console.log(response);
  
    res.status(200).send();

};

module.exports = {getAll, getOne, createVegetable, updateVegetable, deleteVegetable};