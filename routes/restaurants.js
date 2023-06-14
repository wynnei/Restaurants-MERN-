const express = require("express");
const router = require ("express").Router();

const {getAllRestaurants,createRestaurants,getRestaurant,updateRestaurants,deleteRestaurants}= require('../controllers/restaurants')
router.route('/').get(getAllRestaurants).post(createRestaurants)
router.route('/:id').get(getRestaurant).patch(updateRestaurants).delete(deleteRestaurants)


module.exports = router