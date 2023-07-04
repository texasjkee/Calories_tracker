require('dotenv').config();
const telegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;

const bot = new telegramBot(token, {polling: true});

bot.on('message', message => {
  const text = message.text;
  const chatId = message.chat.id;
  bot.sendMessage(chatId, `You sent me: ${text}`)
});
