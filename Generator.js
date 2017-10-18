const Runes = require("./Runes.json");

function generateText (numWords) {

  if (!numWords) {
    numWords = 200;
  }

  for (let i = 0; i < numWords; i++) {
    // Generate words
  }
}

function generateWord (wordLength) {
  for (let i = 0; i < wordLength; i++) {
    // Concatenate runes from Runes.normal and Runes.pillared
    // up to wordLength. Runes should be randomly chosen, but
    // need some rules to place syllables together and not 
    // just a load of pillared consonants / vowels together
  }
}
