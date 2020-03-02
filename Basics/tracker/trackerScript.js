"use strict";
let monthBudget = +prompt("Ваш бюджет на месяц?", "");
let date = prompt("Введите дату в формате YYYY-MM-DD", "");
const questionsNumber = 2;
const errorMessage = "Данные не могут быть пустыми!";
const repeatMessage = " Введите данные заново.";


let appData = {
    budget: monthBudget,
    timeData: date,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let index = 0; index < questionsNumber;) {
    let mandatoryItem = prompt("Введите обязательную статью расходов в этом месяце", "");
    let mandatoryCost = +prompt("Во сколько обойдется?", "");

    console.log("MandatoryItem:" + mandatoryItem);
    console.log("Cost: " + mandatoryCost);

    if ((mandatoryItem != null && mandatoryItem != "" && mandatoryItem.length < 50) && (mandatoryCost != null && mandatoryCost != "")) {
        appData.expenses[mandatoryItem] = mandatoryCost;
        console.log("Правильно");
        index++;
    } else {

        alert(mandatoryItem == null || mandatoryItem === "" ?
            errorMessage + " " + "Ошибка в статье расхода, Вы ввели: " + mandatoryItem.toString + repeatMessage :
            mandatoryCost == null || mandatoryCost === "" || mandatoryCost == 0 ?
            errorMessage + " " + "Ошибка в стоимости, введённое значение: " + mandatoryCost.toString + repeatMessage : "Непредвиденная ошибка");

        // if ((mandatoryItem == null || mandatoryItem === "")) {
        //     alert(errorMessage + " " + "Ошибка в статье расхода, Вы ввели: " + mandatoryItem.toString + repeatMessage);
        // }
        // if (mandatoryCost == null || mandatoryCost === "" || mandatoryCost == 0) {
        //     alert(errorMessage + " " + "Ошибка в стоимости, введённое значение: " + mandatoryCost.toString + repeatMessage);
        // }
    }
}

appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}

console.log(appData);