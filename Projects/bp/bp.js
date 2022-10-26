const fs = require('fs'); // Import the fs module
const Path = require ('path');

// path to the JS file being executed
// regex here is lookahead assertion. Match anything before bp.js or bp.
const directory = process.argv[1].match(/.*(?=bp.js|bp)/);

// Store your own argument as a variable.
const folderName = process.argv[2] || 'NewFolder'

// make a new folder
fs.mkdirSync(folderName);
console.log(`Created project folder: ${folderName}`);

const htmlbp = fs.readFileSync(`${directory}/sources/index.html`, 'utf8');

// Make folder contents inside new folder:
fs.writeFileSync(`${folderName}/index.html`, htmlbp);
fs.writeFileSync(`${folderName}/styles.css`, '');
fs.writeFileSync(`${folderName}/app.js`, '');
