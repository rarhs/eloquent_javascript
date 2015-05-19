/*Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.*/

function noisy(f) {
  return function(arg) {
    console.log("calling with", arg);
	var val = f(arg);
	console.log("called with", arg, "- got", val);
	return val;
  };
}

noisy(Boolean)(0);