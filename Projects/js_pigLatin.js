// Pig Latin Translator
// igPay atinLay ranslatorTay

let numWords = prompt("How many words do you want to translate?")
function pigLatin() {
    const wordArray = []
    for (let i = 1; i<= numWords; i++) {
        let word = prompt(`Type a word to translate.`)
        let pigWord = word.slice(1)
        let firstLetter = word.slice(0,1)
        wordArray.push(pigWord+firstLetter.toUpperCase()+`ay`);
    }
    console.log(...wordArray);
}

pigLatin();