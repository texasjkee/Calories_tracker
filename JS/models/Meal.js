const {Schema, model} = require('mongoose');

const meal = Schema({
  name: {type: String, required: true},
  gramme: {type: String, required: true},
  protein: {type: String, required: true},
  carbohydrates: {type: String, required: true},
  calories: {type: String, required: true},
  fat: {type: String, required: true},
})

module.exports = model('Meal', meal);