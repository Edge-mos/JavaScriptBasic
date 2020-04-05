'use strict';


//Получить кнопку "Начать расчет" через id
let calculateButton = document.getElementById('start'); //YES

// Получить все блоки в правой части программы через классы 
//(которые имеют класс название-value)
let resulTableDiv = document.querySelector('.result .result-table').children;
let elementsWithValue = [];

for (const element of resulTableDiv) {
    if (element.className.includes('-value')) {
        elementsWithValue.push(element);
    }
}
//YES


//Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)
let expensesItemInputs = document.querySelectorAll('.expenses-item'); //YES
let expensesItemInputsVer2 = document.getElementsByClassName('expenses-item'); //YES

//Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной.
let buttonsCollection = document.getElementsByTagName('button');

let expensesItemButton = buttonsCollection[0];
let optionalexpensesButton = buttonsCollection[1];
let countBudgetButton = buttonsCollection[2];
//YES


// Получить поля для ввода необязательных расходов 
//(optionalexpenses-item) при помощи querySelectorAll
let optionalexpensesItemInputs = document.querySelectorAll('.optionalexpenses-item'); //YES

//Получить оставшиеся поля через querySelector 
//(статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
let chooseIncomeInput = document.querySelector('.choose-income');
let checkbox = document.querySelector('.checksavings').firstElementChild;
let chooseSumInput = document.querySelector('.choose-sum');
let choosePercentInput = document.querySelector('.choose-percent');
let yearValueInput = document.querySelector('.time-data .year .year-value');
let monthValueInput = document.querySelector('.time-data .month .month-value');
let dayValueInput = document.querySelector('.time-data .day .day-value');
//YES


// console.log(appObj);
