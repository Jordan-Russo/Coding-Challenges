// url: https://www.codewars.com/kata/55db23c6ab208d61e10000af
// Subtract big numbers passed as strings

// Arguments are passed as strings
// Result should be returned as string
// 3 - 2 should return 1 while 2 - 3 should return -1
// Zeros should not preceed a number! 02, -02, 0001 are invalid
// Very large numbers will be tested
// Note: 100 randomly generated tests
function subtract(a, b){
  return (BigInt(a) - BigInt(b)).toString();
}