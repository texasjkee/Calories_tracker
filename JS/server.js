require('dotenv').config();
const {GoogleSpreadsheet} = require('google-spreadsheet');

const doc = new GoogleSpreadsheet(process.env.GOOGLE_ID);

const client_email = process.env.GOOGLE_EMAIL;
const private_key = process.env.GOOGLE_KEY.replace(/\\n/g, '\n');

async function start() {
    await doc.useServiceAccountAuth({client_email, private_key });

    await doc.loadInfo();
    console.log(doc.title);

    const sheet = doc.sheetsByIndex[1];
    console.log(sheet.title);

    const rows = await sheet.getRows(); 
    console.log(rows);

    await sheet.loadCells('A1:J10'); 
    const a2 = sheet.getCellByA1('A2'); 
    console.log(a2);

    const mainSheet = {
      DATE : sheet.getCell(0, 0),
      meal : sheet.getCell(1, 0),
      grame : sheet.getCell(1, 1),
      protein : sheet.getCell(1, 2),
      fat : sheet.getCell(1, 3),
      carbohydrates : sheet.getCell(1, 4),
      calories : sheet.getCell(1, 5),
      comments : sheet.getCell(1, 6),
      dream : sheet.getCell(1, 7),
      steps : sheet.getCell(1, 8),
      water : sheet.getCell(1, 9)
    }; 
    mainSheet.water.note = 'Beer'
};

start();