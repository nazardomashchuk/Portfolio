'use strict';

let enterBill = document.querySelector('.enter_bill'),
    numberPeople = document.querySelector('.number_input'),
    customTip = document.querySelector('.custom_placeholder'),
    amount = document.querySelector('.tip_result'),
    tipButton = document.querySelectorAll('.btn'),
    total = document.querySelector('.total_result'),
    resetButton = document.querySelector('.reset'),
    res,
    resultTotal,
    tipButtonVal = 1;

    


function enterData() {
    enterBill.addEventListener('keyup', () => {
        if(enterBill.value == '') {
            enterBill.placeholder = 'Enter data';
        } else {
            totalResult();
        }
    });

    numberPeople.addEventListener('keyup', () => {
        if(numberPeople.value == '') {
            numberPeople.placeholder = 'Enter data';
        } else {
            totalResult();
        }
    });
}

function totalResult() {
    if (enterBill.value == '' || numberPeople.value == '') {
        total.innerHTML = '$0.00';
    } else {
        total.innerHTML = '$' + (enterBill.value * tipButtonVal) / numberPeople.value;
        res = (enterBill.value * tipButtonVal - enterBill.value) / numberPeople.value;
        amount.innerHTML = '$' + res;
    }
}

function tips() {
    tipButton.forEach((item, i) => {
        item.addEventListener('click', () => {
            switch(tipButton[i].value) {
                case '5%': tipButtonVal = 1.05;
                break;
                case '10%': tipButtonVal = 1.1;
                break;
                case '15%': tipButtonVal = 1.15;
                break;
                case '25%': tipButtonVal = 1.25;
                break;
                case '50%': tipButtonVal = 1.5;
            }
            totalResult();
        });
    });
}

function customTips() {
    customTip.addEventListener('keyup', () => {
        tipButtonVal = customTip.value / 100 + 1;
        totalResult();
    });
}

function eventReset() {
    resetButton.addEventListener('click', () => {
        total.innerHTML = '$0.00';
        amount.innerHTML = '$0.00';
        enterBill.value = '';
        numberPeople.value = '';
        customTip.value = '';
        tipButtonVal = 1;
    });
}

tips();
enterData();
eventReset();
customTips();