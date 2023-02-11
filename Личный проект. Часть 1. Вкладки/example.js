//Поиск элементов и создание переменных
var button = document.querySelector("#addTab");
var tabs = document.querySelectorAll('.tab');
var text = document.querySelectorAll('.text');

//Переключение между табами и связь с текстовыми полями
function switchingNewTabs(event) {
    var activeTab = document.querySelector('.tab.active');
    var activeText = document.querySelector('.text.active');

    activeTab.classList.remove('active');
    event.target.classList.add('active');

    activeText.classList.remove('active');
    var infoActive = event.target.dataset.tab;
    var switching = document.querySelector('div[data-text="' + infoActive + '"]');
    switching.classList.add('active');   
}

//Переключение для стандартных табов
for(var i = 0; i < tabs.length; i++){
    tabs[i].addEventListener ('click', switchingNewTabs);     
}

button.addEventListener('click', function(event) {
    //Сброс кнопки с заводских настроек
    event.preventDefault();
    
    //Создание новых табов и присвоение им значиний
    var ulList = document.querySelector('.tabs');
    var addLi = document.createElement('li')
    addLi.className = ('tab');
    addLi.setAttribute("data-tab", + (ulList.childNodes.length - 2));
    addLi.textContent = 'ТАБ ' + (ulList.childNodes.length - 2);
    ulList.append(addLi);   

    //Создание новых текствоых полей
    var divText = document.querySelector('.wrapper');
    var addDiv = document.createElement('div');
    addDiv.className = ('text');
    addDiv.setAttribute("data-text", + (ulList.childNodes.length - 3));
    divText.append(addDiv);

    //Переключение для новых табов
    addLi.addEventListener('click', switchingNewTabs);
    
    //Переход текста из Textarea в новый Tab
    var textarea = document.getElementById('tab-text').value;
    var counter = (ulList.childNodes.length - 3);
    var dataAtr = document.querySelector('div[data-text="' + counter + '"]')
    dataAtr.innerHTML = textarea;
    
    //Очищение поля ввода
    var textareaClean = document.getElementById('tab-text');
    textareaClean.value = '';
    
});



   

