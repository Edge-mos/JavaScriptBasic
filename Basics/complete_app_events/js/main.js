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


//------------------------------------------------------

let appData = {
    budget: null,
    timeData: null,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


function onCalculateButtonClick(event) {

    let promptDate;
    let promptBudget;

    do {
        promptDate = new Date(prompt('Введите дату в формате YYYY-MM-DD'));
        promptBudget = parseFloat(prompt('Введите бюджет', ''));
    } while (isNaN(promptBudget) || promptBudget <= 0 || promptDate.toString() === 'Invalid Date');

    appData.budget = promptBudget;
    appData.timeData = promptDate;
    elementsWithValue[0].textContent = appData.budget.toFixed();
    yearValueInput.value = appData.timeData.getFullYear();
    monthValueInput.value = appData.timeData.getMonth() + 1;
    dayValueInput.value = appData.timeData.getDate();

    activateCountBudgetButton();
}

function activateCountBudgetButton() {
    countBudgetButton.removeAttribute('disabled');
    countBudgetButton.className = countBudgetButton.className.split(' ').shift();
    countBudgetButton.innerHTML = 'Рассчитать';
}

function onExpensesItemButtonClick(event) {

    expensesItemInputs.forEach((value, element, arr) => {
        if (element % 2 === 0) {

            let textInp = value;
            let numberInp = arr[element + 1];

            isInputsValidate(textInp, numberInp);
        }
    });

    if (Object.keys(appData.expenses).length !== 0) {
        let sum = 0;

        for (const key in appData.expenses) {
            sum += appData.expenses[key];
        }

        elementsWithValue[3].textContent = sum;
    }
}

function isInputsValidate(textInput, numberInput) {

    let text = textInput.value;
    let number = parseFloat(numberInput.value);

    if (text.length == 0 || isNaN(number) || number <= 0) {
        textInput.value = numberInput.value = 'error!';
    } else {
        appData.expenses[text] = number;
    }
}

function onOptionalexpensesButtonClick(event) {
    optionalexpensesItemInputs.forEach(element => elementsWithValue[4].textContent += element.value.concat(' '));
}

function onCountBudgetButtonClick(event) {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    elementsWithValue[1].textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
        elementsWithValue[2].textContent = 'Минимальный уровень достатка';
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        elementsWithValue[2].textContent = 'Средний уровень достатка';
    } else if (appData.moneyPerDay > 2000) {
        elementsWithValue[2].textContent = 'Высокий уровень достатка';
    } else {
        elementsWithValue[2].textContent = 'Произошла ошибка';
    }
}

function onChooseIncomeInputInput(event) {
    appData.income = (chooseIncomeInput.value).split(',');
    elementsWithValue[5].textContent = appData.income;
}

function onCheckboxClick(event) {
    appData.savings = !appData.savings;
}

function onChooseSumInputInput(event) {
    calculateYearAndMonthIncome();
}

function onChoosePercentInputInput(event) {
    calculateYearAndMonthIncome();
}

function calculateYearAndMonthIncome() {
    let summ;
    let percent;
    if (appData.savings) {
        summ = parseFloat(chooseSumInput.value);
        percent = parseFloat(choosePercentInput.value);

        if (!isNaN(summ) && !isNaN(percent)) {
            appData.monthIncome = summ / 100 / 12 * percent;
            appData.yearIncome = appData.monthIncome * 12;

            elementsWithValue[6].textContent = appData.monthIncome.toFixed(2);
            elementsWithValue[7].textContent = appData.yearIncome.toFixed(2);
        }
    }
}

function addEventsFromDomLoaded(listOfNodes, button) {

    listOfNodes.forEach(input => input.addEventListener('input', function () {
        if (input.value != null) {
            button.removeAttribute('disabled');
            button.className = countBudgetButton.className.split(' ').shift();
        }
    }));
}

document.addEventListener('DOMContentLoaded', function () {
    calculateButton.addEventListener('click', onCalculateButtonClick);
    expensesItemButton.addEventListener('click', onExpensesItemButtonClick);
    optionalexpensesButton.addEventListener('click', onOptionalexpensesButtonClick);
    countBudgetButton.addEventListener('click', onCountBudgetButtonClick);
    chooseIncomeInput.addEventListener('input', onChooseIncomeInputInput);
    checkbox.addEventListener('click', onCheckboxClick);
    chooseSumInput.addEventListener('input', onChooseSumInputInput);
    choosePercentInput.addEventListener('input', onChoosePercentInputInput);

    addEventsFromDomLoaded(expensesItemInputs, buttonsCollection[0]);
    addEventsFromDomLoaded(optionalexpensesItemInputs, buttonsCollection[1]);
});