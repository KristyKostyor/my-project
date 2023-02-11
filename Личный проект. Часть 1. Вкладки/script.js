const button = document.querySelector("#addTab");
const allTabs = document.querySelectorAll(".tab");
const activeDivText = document.querySelector(".text");

button.addEventListener("click", function (e) {
  e.preventDefault();

  function toggleClass(e) {
    let activeTabs = document.querySelector(".tab.active");
    let activeText = document.querySelector(".text.active");

    activeTabs.classList.remove("active");
    e.target.classList.add("active");

    activeText.classList.remove("active");
    let dataTabs = e.target.dataset.tab;
    let addDiv = document.querySelector('div[data-text="' + dataTabs + '"]');
    addDiv.classList.add("active");
  }

  for (let i = 0; i < allTabs.length; i++) {
    allTabs[i].addEventListener("click", toggleClass);
  }

  let newTabs = document.querySelector(".tabs");
  let list = document.createElement("li");
  list.className = "tab";
  list.setAttribute("data-tab", +(newTabs.childNodes.length - 2));
  list.innerHTML = "ТАБ" + (newTabs.childNodes.length - 2);
  newTabs.append(list);

  let textDiv = document.querySelector(".wrapper");
  let newDiv = document.createElement("div");
  newDiv.className = "text";
  newDiv.setAttribute("data-text", +(newTabs.childNodes.length - 3));
  textDiv.append(newDiv);

  let textarea = document.querySelector("#tab-text").value;
  let numberTab = newTabs.childNodes.length - 3;
  let dataAtr = document.querySelector('div[data-text="' + numberTab + '"]');
  dataAtr.innerHTML = textarea;
  list.addEventListener("click", toggleClass);
});
