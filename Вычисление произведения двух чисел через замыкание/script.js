function multiple(a) {
  return function (b) {
    return a * b;
  };
}

alert(multiple(7)(9));
