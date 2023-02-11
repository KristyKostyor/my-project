let result = "";

function myConcat(separator) {
  for (let i = 1; i < arguments.length; i++) {
    if (i === arguments.length - 1) {
      result += arguments[i];
    } else {
      result += arguments[i] + separator;
    }
  }

  return result;
}

alert(myConcat("; ", "elephant", "lion", "monkey"));
