const Runes = require("./PhoneticRunes.json");
const RNG = require("./RNG.js");

function generateText(numWords, minWordLength, maxWordLength) {

  if (!numWords) {
    numWords = 200;
  }

  var output = [];

  for (let i = 0; i < numWords; i++) {
    output.push(generateWord(minWordLength, maxWordLength));
  }

  console.log(output.join(" "));
}

function generateWord(minWordLength, maxWordLength) {

  var wordLength;
  if (!minWordLength) {
    wordLength = Math.round(RNG(1, 10));
  } else if (!maxWordLength) {
    console.log("Error, no maximum wordlength specified");
  } else {
    wordLength = Math.round(RNG(minWordLength, maxWordLength));
  }

  var word = [];
  var lastRuneType;
  var rune;
  var random;

  for (let i = 0; i < wordLength; i++) {
    // Concatenate runes from Runes.normal and Runes.pillared
    // up to wordLength. Runes should be randomly chosen, but
    // need some rules to place syllables together and not 
    // just a load of pillared consonants / vowels together

    random = RNG();
    switch (lastRuneType) {
      case "normal":
        if (random < 0.7) {
          rune = Runes.normal[Math.floor(RNG(Runes.normal.length))];
          lastRuneType = "normal";
        } else if (random < 0.85) {
          rune = Runes.pillared.consonant[Math.floor(RNG(Runes.pillared.consonant.length))];
          lastRuneType = "consonant";
        } else {
          rune = Runes.pillared.vowel[Math.floor(RNG(Runes.pillared.vowel.length))];
          lastRuneType = "vowel";
        }
        break;
      case "consonant":
        if (random < 0.3) {
          rune = Runes.normal[Math.floor(RNG(Runes.normal.length))];
          lastRuneType = "normal";
        } else {
          rune = Runes.pillared.vowel[Math.floor(RNG(Runes.pillared.vowel.length))];
          lastRuneType = "vowel";
        }
        break;
      case "vowel":
        if (random < 0.8) {
          rune = Runes.normal[Math.floor(RNG(Runes.normal.length))];
          lastRuneType = "normal";
        } else {
          rune = Runes.pillared.consonant[Math.floor(RNG(Runes.pillared.consonant.length))];
          lastRuneType = "consonant";
        }
        break;
      default:
        if (random < 0.7) {
          rune = Runes.normal[Math.floor(RNG(Runes.normal.length))];
          lastRuneType = "normal";
        } else if (random < 0.85) {
          rune = Runes.pillared.consonant[Math.floor(RNG(Runes.pillared.consonant.length))];
          lastRuneType = "consonant";
        } else {
          rune = Runes.pillared.vowel[Math.floor(RNG(Runes.pillared.vowel.length))];
          lastRuneType = "vowel";
        }
    }

    word.push(rune);
  }
  return word.join("-");
}

module.exports = generateText;
