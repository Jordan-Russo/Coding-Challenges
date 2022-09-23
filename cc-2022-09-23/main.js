// url: https://www.codewars.com/kata/5dd462a573ee6d0014ce715b
// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1
function sameCase(a, b){
  const areLetters = /[a-z]/i.test(a) && /[a-z]/i.test(b);
  const whatCasing = (char) => char === char.toUpperCase() ? 1 : 0;
  // for two chars the sum of whatCasing can only be 0 or 2 if it is the same for both;
  const shareCasing = whatCasing(a) + whatCasing(b) !== 1;
  return !areLetters ? -1 : shareCasing ? 1 : 0;
}