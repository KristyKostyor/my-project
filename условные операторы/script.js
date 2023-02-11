let count = prompt('Введите число от 0 до 60');

if (count >= 0 && count < 15)  {
        alert('Число попадает в первую четверть');
}   else if (count >= 15 && count < 30) {
    alert('Число попадает во вторую четверть');
}   else if (count >= 30 && count < 45) {
    alert('Число попадает в третью четверть');
}   else if  (count >= 45 && count < 60) {
    alert('Число попадает в четвертую четверть') ;
}   else {
    alert('Недопустимое значение!');
}  
console.log(count);