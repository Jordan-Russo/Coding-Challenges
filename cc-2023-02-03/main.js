// url: https://www.codewars.com/kata/5808e2006b65bff35500008f
// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

const position = (char) => `Position of alphabet: ${char.toLowerCase().charCodeAt(0) - "a".charCodeAt(0) + 1}`;