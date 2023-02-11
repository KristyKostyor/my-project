let height = 5;
let star = "*";
let gap = " ";

function chistmasTree(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= n - i; j++) {
      str = str.concat(gap);
    }
    for (let j = 1; j <= i * 2 - 1; j++) {
      str = str.concat(star);
    }
    console.log(str);
  }
}
chistmasTree(height);
