require('dotenv').config();
const telegramBot = require('node-telegram-bot-api');
const mongoose = require('mongoose');

const token = process.env.BOT_TOKEN;

const {addMeal, getMeal} = require('./controllers/mealControllers');
const {addMealToSheet, addNewDay} = require('./googleSheet/index');

const bot = new telegramBot(token, {polling: true});

bot.on('message', async message => {
  const text = message.text.toLowerCase();
  const chatId = message.chat.id;
 
  // addMeal(data);
  // const {name, gramme, carbohydrates, calories, fat, protein} = await getMeal(text);
  addNewDay();
  // addMealToSheet({name, gramme, carbohydrates, calories, fat, protein});
});

mongoose.connect('mongodb://127.0.0.1:27017/Calories')
    .then(()=> console.log('Connected to mongoDB'))
    .catch((err) => console.log(err));