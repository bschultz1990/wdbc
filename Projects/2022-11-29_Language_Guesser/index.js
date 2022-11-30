// Use Import and Require in the same file:
import {createRequire} from "module";
const require = createRequire(import.meta.url);
import {franc} from 'franc'
const langs = require('langs');

let langCode = franc(process.argv[2])
let language = langs.where("3", langCode);
// if (language === "und"){
// 	console.log("More info needed. Try a larger sample.")
// }
// else {
// 	console.log(`Language guess: ${language.name}`);
// }

console.log(language.name)
