/*But what if we want to do something other than logging the elements? Since “doing something” can be represented as a function and functions are just values, we can pass our action as a function value.*/

function forEach(array, action) {
  for(var i = 0; i < array.length; i++)
    action(array[i]);
}

var numbers = [1, 2, 3, 4, 5], sum = 0;
forEach(numbers, function(number) {
  sum += number;
});

console.log(sum);