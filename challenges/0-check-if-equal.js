/**
 *
 * @param {number} num1 - the first input number
 * @param {number} num2 - the second input number
 * @returns  true or false depending on if num1 and num2 are equal
 */
function isEqual(num1, num2) {
  if (num1 == num2) {
    return true;
  } else {
    return false;
  }
}

/** Test Cases: */
console.log("isEqual(4, 4):", isEqual(4, 4), "should be true");
console.log("isEqual(-4, -4)", isEqual(-4, -4), "should be false");
console.log("isEqual(4, -4)", isEqual(4, -4), "should be false");
console.log("isEqual(0, 0)", isEqual(0, 0), "should be true");
console.log("isEqual(0, 1)", isEqual(0, 1), "should be false");
