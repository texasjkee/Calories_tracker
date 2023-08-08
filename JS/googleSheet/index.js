const {google} = require('googleapis');

const connectToSheet = async () => {
  const auth = new google.auth.GoogleAuth({
    keyFile: 'credentials.json',
    scopes: 'https://www.googleapis.com/auth/spreadsheets'
  });
  const client = await auth.getClient();
  const googleSheets = google.sheets({version: 'v4', auth: client});
  const spreadsheetId = '1MUFEigUKAYWF3wRREcS4sgNjENykQyMK30TybdUd2Vc';

  return {googleSheets , spreadsheetId, auth};
};

const addMealToSheet = async data => {
  const {googleSheets, spreadsheetId, auth} = await connectToSheet();
  const {name, gramme, carbohydrates, calories, fat, protein} = data;
 
  await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: `bot (DON'T TOUCH)!A3`,
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [[name, gramme, protein, fat, carbohydrates, calories]]
    },
  }); 
};

const addNewDay = async () => {
  const {googleSheets, spreadsheetId, auth} = await connectToSheet();

  const newDay = [['Meal', 'Gramme', 'Protein', 'Fat', 'Carbohydrates', 
    'Calories',	'Comments', 'Dream',	'Steps',	'Water' 
  ]];

  await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: `bot (DON'T TOUCH)!A23`,
    valueInputOption: "USER_ENTERED",
    resource: {
      values: newDay
    },
  }); 
};

module.exports = {addMealToSheet, addNewDay};

// const getRows = async data => {
//   const metaData = await googleSheets.spreadsheets.get({
//     auth, 
//     spreadsheetId
//   });
  
//   const getRows = await googleSheets.spreadsheets.values.get({
//     auth, 
//     spreadsheetId,
//     range: `bot (DON'T TOUCH)`
//   })
// };

// const data = {
//   name: 'meal',
//   gramme: '100',
//   protein: '20',
//   carbohydrates: '80',
//   calories: '400',
//   fat: '30',
// };
