// url: https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763
// Description:

// We want to generate a function that computes the series starting from 0 and ending until the given number.

// Example:
// Input:

// > 6
// Output:

// 0+1+2+3+4+5+6 = 21

// Input:

// > -15
// Output:

// -15<0

// Input:

// > 0
// Output:

// 0=0
var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    if (count === 0){return '0=0'}
    let sequenceArr = []
    for(let i = 0; i <= count; i++){
      sequenceArr.push(i)
    }
    const sequenceStr = sequenceArr.join('+')
    return sequenceStr ? `${sequenceStr} = ${(count + 1) * (count / 2)}` : `${count}<0`
    
  };

  return SequenceSum;

})();