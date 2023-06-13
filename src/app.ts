import 'dotenv/config';
import { GoogleSpreadsheet } from 'google-spreadsheet';
// import { Telegraf } from 'telegraf';
// import { message }  from 'telegraf/filters';

const doc = new GoogleSpreadsheet(process.env.GOOGLE_ID);

const client_email = process.env.GOOGLE_EMAIL;
const private_key = process.env.GOOGLE_KEY!.replace(/\\n/g, '\n');

async function start() {
    await doc.useServiceAccountAuth({client_email, private_key });
    await doc.loadInfo(); // loads document properties and worksheets
    console.log(doc.title);
};

start();
// const bot = new Telegraf(process.env.BOT_TOKEN);
// bot.start((ctx) => ctx.reply('Welcome'));
// bot.help((ctx) => ctx.reply('Send me a sticker'));
// bot.on(message('sticker'), (ctx) => ctx.reply('👍'));
// bot.hears('hi', (ctx) => ctx.reply('Hi texasjkee'));
// bot.launch();

// Enable graceful stop
// process.once('SIGINT', () => bot.stop('SIGINT'));
// process.once('SIGTERM', () => bot.stop('SIGTERM'));