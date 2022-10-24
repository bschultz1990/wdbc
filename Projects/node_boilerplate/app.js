const fs = require('fs'); // Import the fs module
const contents = process.argv[1] // path to the JS file bein executed
const htmlbp = fs.readFileSync(`${contents}/index.html`)

console.log(htmlbp)
// Store your own argument as a variable.
const folderName = process.argv[2] || 'NewFolder'

// make a new folder
fs.mkdirSync(folderName);
console.log(`Created project folder: ${folderName}`);

// Make folder contents inside new folder:
fs.writeFileSync(`${folderName}/index.html`, ``);
fs.writeFileSync(`${folderName}/styles.css`, '');
fs.writeFileSync(`${folderName}/app.js`, '');
