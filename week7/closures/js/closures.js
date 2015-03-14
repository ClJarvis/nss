/*
    What is a closure????????

    It's all about memory allocation and garbage collection.
*/


// No closure is created here.
// The function executes, returns nothing that can be
// referred to somewhere else in the code, so the
// memory is released.
function doSomethingSimple () {
  var a = 1;
  console.log('Something simple');
}

doSomethingSimple();






// Closure is created because this function returns yet
// another function that can be execute elsewhere in your
// code. The outer() function creates a closure around the
// variables inner, firstOperand, secondOperand, and thirdOperand
// so they remain in memory even after the function executes.
function outer (firstOperand) {
  var inner;
  var secondOperand = 2;

  function inner () {
    var thirdOperand = 3;

    console.log(firstOperand * secondOperand * thirdOperand);
  }

  return inner;
}

var output = outer(1);

output();
