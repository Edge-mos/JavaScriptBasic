"use strict";
let monthBudget;
let date;
const questionsNumber = 2;
const errorMessage = "Данные не могут быть пустыми!";
const repeatMessage = " Введите данные заново.";

let appData;

function start() {
    while (monthBudget == undefined || isNaN(monthBudget) || monthBudget == "" || monthBudget == null) {
        monthBudget = parseFloat(prompt("Ваш бюджет на месяц?", ""));
    }

    date = prompt("Введите дату в формате YYYY-MM-DD", "");

    appData = {
        budget: monthBudget,
        timeData: date,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };
}

function chooseExpenses() {
    for (let index = 0; index < questionsNumber;) {
        let mandatoryItem = prompt("Введите обязательную статью расходов в этом месяце", "");
        let mandatoryCost = parseFloat(prompt("Во сколько обойдется?", ""));

        if ((mandatoryItem != null && mandatoryItem != "" && mandatoryItem.length < 50) && (mandatoryCost != null && mandatoryCost != "")) {
            appData.expenses[mandatoryItem] = mandatoryCost;
            index++;
        } else {
            alert(mandatoryItem == null || mandatoryItem === "" ?
                errorMessage + " " + "Ошибка в статье расхода, Вы ввели: " + mandatoryItem + repeatMessage :
                mandatoryCost == null || mandatoryCost === "" || mandatoryCost == 0 ?
                errorMessage + " " + "Ошибка в стоимости, введённое значение: " + mandatoryCost + repeatMessage : "Непредвиденная ошибка");
        }
    }

}

function getWealthStatus() {
    appData.moneyPerDay = parseFloat((appData.budget / 30).toFixed(4));

    alert("Ежедневный бюджет: " + appData.moneyPerDay);

    if (appData.moneyPerDay < 100) {
        return "Минимальный уровень достатка";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        return "Средний уровень достатка";
    } else if (appData.moneyPerDay > 2000) {
        return "Высокий уровень достатка";
    } else {
        return "Произошла ошибка";
    }
}

start();
chooseExpenses();
console.log(getWealthStatus());