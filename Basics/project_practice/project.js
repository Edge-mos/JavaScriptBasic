"use strict";
let monthBudget;
let date;
const questionsNumber = 2;
const errorMessage = "Данные не могут быть пустыми!";
const repeatMessage = " Введите данные заново.";

let appData = {
    budget: monthBudget,
    timeData: date,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,

    chooseExpenses: function () {
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
    },

    getWealthStatus: function () {
        appData.moneyPerDay = parseFloat((appData.budget / 30).toFixed(4)); //Добавляем поле в объект

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

    },

    checkSavings: function () {
        if (this.savings == true) {
            let save = parseFloat(prompt("Какова сумма накоплений?", ""));
            let percent = parseFloat(prompt("Под какой процент?", ""));
            appData.monthIncome = save / 100 / 12 * percent; //Добавляем поле в объект
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);

        }
    },

    chooseOptionalExpenses: function() {
        for (let index = 0; index < 3; index++) {
            let opt = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[index] = opt;
        }
    },

    chooseIncome: function() {
        let items = prompt("Что принесёт дополнительный доход? (Перечислите через запятую)");
        this.income = items.split(", ");
        this.income.push(prompt("Может что-то ещё?", ""));
        this.income.sort();
    }
};

function start() {
    while (monthBudget == undefined || isNaN(monthBudget) || monthBudget == "") {
        monthBudget = parseFloat(prompt("Ваш бюджет на месяц?", ""));
        appData.budget = monthBudget;
    }
    appData.timeData = prompt("Введите дату в формате YYYY-MM-DD", "");
}

// start();
// appData.chooseExpenses();
// appData.checkSavings();
// appData.chooseOptionalExpenses();
// appData.chooseIncome();
// console.log(appData.getWealthStatus());




