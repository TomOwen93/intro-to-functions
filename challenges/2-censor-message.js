/**
 *
 * @param {string} MESSAGE - input string contining words to be "checked"
 * @param {Array} BAN_LIST - Array of words to check MESSAGE for and "censor"
 * @returns {string} Our censored string
 */
function censorMessage(MESSAGE, BAN_LIST) {
  let RAW_WORDS = MESSAGE.split(" ");
  let SCRUBBED_WORDS = [];

  for (let word of RAW_WORDS) {
    let LOWERCASE_WORD = word.toLowerCase();
    BAN_LIST.includes(LOWERCASE_WORD)
      ? SCRUBBED_WORDS.push("*****")
      : SCRUBBED_WORDS.push(word);
  }

  let SCRUBBED_MESSAGE = SCRUBBED_WORDS.join(" ");
  return SCRUBBED_MESSAGE;
}

/** Test Cases: */
console.log(
  `censorMessage("don't mess with cats", ["mess"]):`,
  censorMessage("don't mess with cats", ["mess"]),
  `should be "don't ***** with cats`
);
console.log(
  `censorMessage("Are you sure that this is safe", ["are", "is"]):`,
  censorMessage("Are you sure that this is safe", ["are", "is"]),
  `should be "***** you sure that this ***** safe`
);
console.log(
  `censorMessage("I CANNOT HELP YOU", ["can", "not", "help", "you"]):`,
  censorMessage("I CANNOT HELP YOU", ["can", "not", "help", "you"]),
  `should be "I CANNOT ***** *****`
);
