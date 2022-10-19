const fs = require('fs'); // Import the fs module

// Store your own argument as a variable.
const folderName = process.argv[2] || 'New_Folder'

// make a new folder
fs.mkdirSync(folderName);
console.log(`Created project folder: ${folderName}`);

// fs.writeFileSync("test.txt");
// fs.writeFileSync(`${folderName}/styles.css`);
// fs.writeFileSync(`${folderName}/app.js`);
