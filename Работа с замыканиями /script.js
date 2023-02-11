function sumfactorial() {
  let count = 1;
  let factorial = 1;
  return function () {
    factorial = factorial * count;
    count++;
    return factorial;
  };
}
let newFactorial = sumfactorial();

alert(newFactorial());
alert(newFactorial());
alert(newFactorial());
alert(newFactorial());
alert(newFactorial());
alert(newFactorial());
alert(newFactorial());
alert(newFactorial());
alert(newFactorial());
