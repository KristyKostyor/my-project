const p = document.querySelector("p");

p.onclick = function (e) {
  console.log("p");
  e.stopPropagation();
};
