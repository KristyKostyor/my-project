const divs = document.querySelectorAll('div');
function colorRed() {
  this.style.backgroundColor = "red";
  this.removeEventListener("click", colorRed);
  this.addEventListener("click", colorGreen);
}

function colorGreen() {
  this.style.backgroundColor = "green";
  this.removeEventListener("click", colorGreen);
  this.addEventListener("click", colorRed);
}

divs.forEach(function (element) {
  element.addEventListener("click", colorRed);
});
