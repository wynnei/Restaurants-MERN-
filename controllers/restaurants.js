//import restaurant model
const Note = require("../models/restaurant");
const getRestaurant = async (req, res) => {
  try {
    const noteId = req.params.id
    //find the note using that id
    const note = await Note.findById(noteId)
    //respond with the noe
    res.json ({note:note})
  } catch (error) {
    res.status(500).json(error);
  }
};

const createRestaurants = async (req, res) => {
  try {
    //Get the sent in data off request bosy
    const name =req.body.name
    const cuisineType = req.body.cuisineType
    const location = req.body.location
    const selectedFile = req.body.selectedFile
    
    //save item to database
    const note = await Note.create({
      name:name,
      cuisineType:cuisineType,
      location:location,
      selectedFile:selectedFile,
    });
    res.status(200).json({note:note});
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllRestaurants = async(req, res) => {
  // find the restaurant
  const notes = await Note.find()
  // respond with them
  res.json({notes:notes})
};

const updateRestaurants = async (req, res) => {
  try {
    //Get the id off the url
    const noteId = req.params.id;
    //Get the data off the req body
    const name = req.body.name
    const cuisineType = req.body.cuisineType
    const location = req.body.location
    const selectedFile = req.body.selectedFile
    //find and update the record
   await Note.findByIdAndUpdate(noteId,{
      name:name,
      cuisineType:cuisineType,
      location:location,
      selectedFile:selectedFile,
    });
    //find updated note
    const note =  await Note.findById(noteId)
    //respond with it
    res.json({note:note})
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteRestaurants = async (req, res) => {
  try {
    //get id off url
    const noteId =  req.params.id
    //delete the record
    await Note.deleteOne({id:noteId})

    //respond
    res.json({success:"Recording successful"})
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllRestaurants,
  createRestaurants,
  getRestaurant,
  updateRestaurants,
  deleteRestaurants,
};
