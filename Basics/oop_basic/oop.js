"use strict";



let soldier = {
    health: 100,
    armor: 100
};


let doomSlayer = {
    health: 400
};

doomSlayer.__proto__ = soldier;


console.log(doomSlayer);