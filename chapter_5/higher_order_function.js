/*Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.*/

function greaterThan(n) {
  return function(m) { return m > n; };
}

var greaterThan10 = greaterThan(10)
console.log(greaterThan10(11));
console.log(greaterThan10(1));