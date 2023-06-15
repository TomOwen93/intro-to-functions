/**
 *
 * @param {Array} words - an input list of words in array form, to see which is longest
 * @returns {string} the longest word from the words Array
 */
function longestInList(words) {
  let longest = words[0];

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

/** Test Cases: */
console.log(
  `longestInList(["England", "Wales", "Scotland", "Northern Ireland"]):`,
  longestInList(["England", "Wales", "Scotland", "Northern Ireland"]),
  `should be "Northern Ireland"`
);
console.log(
  'longestInList(["the", "quick", "brown", "fox"]):',
  longestInList(["the", "quick", "brown", "fox"]),
  `should be "quick"`
);
console.log(
  `longestInList(["hello", "hi", "greetings", "hey"]):`,
  longestInList(["hello", "hi", "greetings", "hey"]),
  `should be "greetings"`
);
