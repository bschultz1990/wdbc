// Use Import and Require in the same file:
import {createRequire} from "module";
const require = createRequire(import.meta.url);
import {franc} from 'franc'
const langs = require('langs');
const colors = require('colors');

let langCode = franc(process.argv[2])
let language = langs.where("3", langCode);

try {
	console.log(`Language guess: ${language.name}`.green);
} catch {
	console.log("More info needed. Try a larger sample.".red)
}
