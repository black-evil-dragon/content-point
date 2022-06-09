var optionMenu_1 = document.querySelector('.optionMenu-1');
var optionMenu_2 = document.querySelector('.optionMenu-2');
var optionMenu_3 = document.querySelector('.optionMenu-3');
var optionMenu_4 = document.querySelector('.optionMenu-4');
var optionMenu_5 = document.querySelector('.optionMenu-5');
var optionMenu_6 = document.querySelector('.optionMenu-6');
var optionMenu_7 = document.querySelector('.optionMenu-7');
var optionMenu_8 = document.querySelector('.optionMenu-8');
var optionMenu_9 = document.querySelector('.optionMenu-9');

let elementsMenu_1 = ['.optionMenu-1', '.optionMenu-2', '.optionMenu-3', '.optionMenu-4'];
let elementsMenu_2 = ['.optionMenu-5', '.optionMenu-6', '.optionMenu-7'];
let elementsMenu_3 = ['.optionMenu-8', '.optionMenu-9'];


/* First Group */


optionMenu_1.addEventListener("click", function() {
    k = 1;
    option = '.optionMenu-' + String(k);
    document.querySelector(option).classList.add('active');

    elementsMenu_1.splice(k-1, 1);
    for(i = 0; i < 3; i++){
        document.querySelector(elementsMenu_1[i]).classList.remove('active')
    };
    elementsMenu_1.splice(k-1, 0, option);
});

optionMenu_2.addEventListener("click", function() {
    k = 2;
    option = '.optionMenu-' + String(k);
    document.querySelector(option).classList.add('active');
    elementsMenu_1.splice(k-1, 1);
    for(i = 0; i < 3; i++){
        document.querySelector(elementsMenu_1[i]).classList.remove('active')
    };
    elementsMenu_1.splice(k-1, 0, option);
});
optionMenu_3.addEventListener("click", function() {
    k = 3;
    option = '.optionMenu-' + String(k);
    document.querySelector(option).classList.add('active');
    elementsMenu_1.splice(k-1, 1);
    for(i = 0; i < 3; i++){
        optionMenu = elementsMenu_1[i];
        document.querySelector(optionMenu).classList.remove('active')
    };
    elementsMenu_1.splice(k-1, 0, option);
});
optionMenu_4.addEventListener("click", function() {
    k = 4;
    option = '.optionMenu-' + String(k);
    document.querySelector(option).classList.add('active');
    elementsMenu_1.splice(k-1, 1);
    for(i = 0; i < 3; i++){
        optionMenu = elementsMenu_1[i];
        document.querySelector(optionMenu).classList.remove('active')
    };
    elementsMenu_1.splice(k-1, 0, option);
});


/* Second Group */

optionMenu_5.addEventListener("click", function() {
    k = 5;
    option = '.optionMenu-' + String(k);
    document.querySelector(option).classList.add('active');
    elementsMenu_2.splice(0, 1);

    for(i = 0; i < 2; i++){
        optionMenu = elementsMenu_2[i];
        document.querySelector(optionMenu).classList.remove('active')
    };
    elementsMenu_2.splice(0, 0, option);
});
optionMenu_6.addEventListener("click", function() {
    k = 6;
    option = '.optionMenu-' + String(k);
    document.querySelector(option).classList.add('active');
    elementsMenu_2.splice(1, 1);
    for(i = 0; i < 2; i++){
        optionMenu = elementsMenu_2[i];
        document.querySelector(optionMenu).classList.remove('active')
    };
    elementsMenu_2.splice(1, 0, option);
});
optionMenu_7.addEventListener("click", function() {
    k = 7;
    option = '.optionMenu-' + String(k);
    document.querySelector(option).classList.add('active');
    elementsMenu_2.splice(2, 1);
    for(i = 0; i < 2; i++){
        optionMenu = elementsMenu_2[i];
        document.querySelector(optionMenu).classList.remove('active')
    };
    elementsMenu_2.splice(2, 0, option);
});


/* Third Group */


optionMenu_8.addEventListener("click", function() {
    document.querySelector('.optionMenu-8').classList.add('active');
    document.querySelector('.optionMenu-9').classList.remove('active');
});
optionMenu_9.addEventListener("click", function() {
    document.querySelector('.optionMenu-8').classList.remove('active');
    document.querySelector('.optionMenu-9').classList.add('active');
});