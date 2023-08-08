const mealModel = require('../models/Meal');

const addMeal = async meal => {
  await mealModel.create(meal);
};

const getMeal = async meal => {
  return await mealModel.findOne({name: meal});
};

module.exports = {addMeal, getMeal};