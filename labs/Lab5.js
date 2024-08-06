const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function countWords(sentence) {
  const wordCounts = {};

  const words = sentence.split(/\s+/); // Split by one or more whitespace characters

  for (const word of words) {
    wordCounts[word] = (wordCounts[word] || 0) + 1;
  }

  return wordCounts;
}

rl.question("Enter a sentence: ", (inputSentence) => {
  const wordCounts = countWords(inputSentence);
  console.log(wordCounts);
  rl.close();
});
