const a = require("lodash");

console.log("-------------");
console.log("It's alive!!!");
console.log("-------------");

function getType(vrijednost) {
  console.log(`Ulazna vrijednost za provjeru je '${vrijednost}'`);
  if (a.isNumber(vrijednost)) {
    console.log(`>> Ulazna vrijednost je broj`);
  }

  if (a.isString(vrijednost)) {
    console.log(`>> Ulazna vrijednost je string`);
  }

  if (a.isArray(vrijednost)) {
    console.log(`>> Ulazna vrijednost je Array`);
  }

  if (a.isObject(vrijednost)) {
    console.log(`>> Ulazna vrijednost je Object`);
  }
}

const myNumbers = [1, 9, 4, 7, 3, 8];
const myObject = { ime: "Marko" };

getType(1);
getType("neka riječ");

getType(myNumbers); // ulazna vrijednost je array
getType(myObject); // ulazna vrijednost je objekt

const sortedNumbers = a.sortBy(myNumbers);
console.log(sortedNumbers);
