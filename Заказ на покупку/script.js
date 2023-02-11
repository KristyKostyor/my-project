let namePhone = "iPhone 13 Pro Max";
let price = 600;
let phoneCase = 20;
let amount= '';
let cover = '';

let nameUser = prompt ("Как Вас зовут?",'');
alert(`Добро пожаловать, ${nameUser}!`);

let order =confirm (`Желаете приобрести ${namePhone} за ${price}`);


if (order){
	amount = +prompt("Количество телефонов?", '');
}
else {
	alert (`До свидания, ${nameUser}!`);
}

if (amount > 0) {
	cover = confirm('Хотите приобрести к ним чехлы?');
}
if (cover>0 ) {
    alert(`Спасибо, ${nameUser}, к оплате за телефон: ${price * amount}$. Cтоимость одного чехла 20$. Общая сумма заказа ${phoneCase*amount+price * amount}$`);
} else {
    alert(`Спасибо, ${nameUser}, к оплате: ${price * amount}$ без ${phoneCase} чехла)`);
}

	alert (`Cпасибо за доверие, до свидания, ${nameUser}!`);


