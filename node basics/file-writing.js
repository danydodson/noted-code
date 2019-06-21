const fs = require('fs');

fs.writeFile('./modules/data.html', ` \n Hello this file has just been created \n`, 'utf8', (err) => {
  if (err) return err;
  console.log("The file has been saved");
});

fs.appendFile('./modules/data.html', `\n Extra data appended to this file \n`, 'utf8', (err) => {
  if (err) return err;
  console.log("The file has been saved");
});