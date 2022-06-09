/*

let currentLocation = document.getElementsByTagName('html')[0].getAttribute('lang');

var button_ru = document.getElementById('ru');
var button_eng = document.getElementById('eng');

if (currentLocation == 'ru') {
    button_eng.classList.add('disabled');
    button_ru.classList.remove('disabled');
} else {
    button_ru.classList.add('disabled');
    button_eng.classList.remove('disabled');
}

button_ru.addEventListener("click", function() {
    if(currentLocation != 'ru'){
        console.log('redirect ru');
        window.location.href = 'https://providenta.ru/index.php';
    }
});
button_eng.addEventListener("click", function() {
    if(currentLocation != 'en'){
        console.log('redirect en');
        window.location.href = 'en/index.php';
    }
});

*/

var optionMenu_1 = document.getElementById('optionMenu-1');
var optionMenu_2 = document.getElementById('optionMenu-2');
var optionMenu_3 = document.getElementById('optionMenu-3');
var optionMenu_4 = document.getElementById('optionMenu-4');
var optionMenu_5 = document.getElementById('optionMenu-5');
var optionMenu_6 = document.getElementById('optionMenu-6');
var optionMenu_7 = document.getElementById('optionMenu-7');
var optionMenu_8 = document.getElementById('optionMenu-8');
var optionMenu_9 = document.getElementById('optionMenu-9');

let elementsMenu_1 = ['optionMenu-1', 'optionMenu-2', 'optionMenu-3', 'optionMenu-4'];
let elementsMenu_2 = ['optionMenu-5', 'optionMenu-6', 'optionMenu-7'];
let elementsMenu_3 = ['optionMenu-8', 'optionMenu-9'];

optionMenu_1.addEventListener("click", function() {
    k = 1;
    option = 'optionMenu-' + String(k);
    document.getElementById(option).classList.add('active');

    elementsMenu_1.splice(k-1, 1);
    for(i = 0; i < 3; i++){
        document.getElementById(elementsMenu_1[i]).classList.remove('active')
    };
    elementsMenu_1.splice(k-1, 0, option);
});

optionMenu_2.addEventListener("click", function() {
    k = 2;
    option = 'optionMenu-' + String(k);
    document.getElementById(option).classList.add('active');
    elementsMenu_1.splice(k-1, 1);
    for(i = 0; i < 3; i++){
        document.getElementById(elementsMenu_1[i]).classList.remove('active')
    };
    elementsMenu_1.splice(k-1, 0, option);
});
optionMenu_3.addEventListener("click", function() {
    k = 3;
    option = 'optionMenu-' + String(k);
    document.getElementById(option).classList.add('active');
    elementsMenu_1.splice(k-1, 1);
    for(i = 0; i < 3; i++){
        optionMenu = elementsMenu_1[i];
        document.getElementById(optionMenu).classList.remove('active')
    };
    elementsMenu_1.splice(k-1, 0, option);
});
optionMenu_4.addEventListener("click", function() {
    k = 4;
    option = 'optionMenu-' + String(k);
    document.getElementById(option).classList.add('active');
    elementsMenu_1.splice(k-1, 1);
    for(i = 0; i < 3; i++){
        optionMenu = elementsMenu_1[i];
        document.getElementById(optionMenu).classList.remove('active')
    };
    elementsMenu_1.splice(k-1, 0, option);
});
optionMenu_5.addEventListener("click", function() {
    k = 5;
    option = 'optionMenu-' + String(k);
    document.getElementById(option).classList.add('active');
    elementsMenu_2.splice(k-1, 1);
    for(i = 0; i < 2; i++){
        optionMenu = elementsMenu_2[i];
        document.getElementById(optionMenu).classList.remove('active')
    };
    elementsMenu_2.splice(k-1, 0, option);
});
optionMenu_6.addEventListener("click", function() {
    k = 6;
    option = 'optionMenu-' + String(k);
    document.getElementById(option).classList.add('active');
    elementsMenu_2.splice(k-1, 1);
    for(i = 0; i < 2; i++){
        optionMenu = elementsMenu_2[i];
        document.getElementById(optionMenu).classList.remove('active')
    };
    elementsMenu_2.splice(k-1, 0, option);
});
optionMenu_7.addEventListener("click", function() {
    k = 7;
    option = 'optionMenu-' + String(k);
    document.getElementById(option).classList.add('active');
    elementsMenu_2.splice(k-1, 1);
    for(i = 0; i < 2; i++){
        optionMenu = elementsMenu_2[i];
        document.getElementById(optionMenu).classList.remove('active')
    };
    elementsMenu_2.splice(k-1, 0, option);
});
optionMenu_8.addEventListener("click", function() {
    document.getElementById('optionMenu-8').classList.add('active');
    document.getElementById('optionMenu-9').classList.remove('active');
});
optionMenu_9.addEventListener("click", function() {
    document.getElementById('optionMenu-8').classList.remove('active');
    document.getElementById('optionMenu-9').classList.add('active');
});