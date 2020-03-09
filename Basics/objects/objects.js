"use strict";

let options = {
    width: 1024,
    height: 1030,
    name: "test"
};

console.log(options.name);
console.log(options["height"]);

options.bool = false;

options.colors = {
    border: "black",
    background: "red"
};

// console.log(options);

// delete options.bool;
// console.log(options);

for (let key in options) {
    console.log("Property: " + key + " Value: " + options[key]);
}

for (const col in options.colors) { // цыкл for in выводит ключи массива
    console.log(col);
}

for (const key in options.colors) { // выводим значения вложенного объекта
    console.log(options.colors[key]);
}

console.log("\nAll Together:");
for (const key in options.colors) {
    console.log("Prop:" + key + " Val:" + options.colors[key]);
}

console.log(Object.keys(options).length); // количество ключей в объекте

Object.keys(options).forEach(val => console.log(options[val]));

console.log("\n for in object");


let objectInfo = {
    buffer: [],
    tab: "  ",

    infoAppend: function(val) {
        this.buffer.push(val.toString().concat("\n"));
    },

    objReader: function(obj) {
        for (const key in obj) {
            if (typeof (options[key]) == "object") {

                let inner = options[key];
                this.infoAppend(key.concat(":").concat(" {"));

                let innerKeys = Object.keys(inner);
                for (const innerKey of innerKeys) {
                    this.infoAppend(this.tab +  innerKey + ": " + inner[innerKey]);
                }
                this.infoAppend("}");
                
            } else {
                this.infoAppend(key + ": " + options[key]);
            }
        }
    },

    toString: function() {
        let result = "";
        this.buffer.forEach(val => result += val.toString().replace(",", ""));
        return result;
    }
};

objectInfo.objReader(options);
console.log(objectInfo.toString());
