"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const google_spreadsheet_1 = require("google-spreadsheet");
// import { Telegraf } from 'telegraf';
// import { message }  from 'telegraf/filters';
const doc = new google_spreadsheet_1.GoogleSpreadsheet(process.env.GOOGLE_ID);
console.log(process.env.GOOGLE_ID);
const client_email = process.env.GOOGLE_EMAIL;
const private_key = process.env.GOOGLE_KEY.replace(/\\n/g, '\n');
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        yield doc.useServiceAccountAuth({ client_email, private_key });
        yield doc.loadInfo(); // loads document properties and worksheets
        console.log(doc.title);
    });
}
;
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
