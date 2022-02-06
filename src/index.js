
//import logger,{message} from './tools.js';
//logger("Welcome! The application name is " + appName +" . There is a function that returns that returns " + dummyFunction() );



import log, { Person } from './tools.js ';
let person1 = new Person("Pius", "Onobhayedo", "Male", 1.7);
let person2 = new Person("Mary", "Joseph", "Female", undefined);
log(`Person 1 is ${person1.firstName} whose height is ${person1.height}. Person 2 is ${person2.firstName} whose height is ${person2.height}`);
const x = 10;
const y = 20;

//console.log(x*y)

/*spread operators and destrcuturing assignment */

import {multiplier, lineGraphFunction} from './tools.js';
const languages = ["Pythonn", "HTML", "Java", "Javascript"]
const [flang, sLang] = languages;
console.log (flang, languages[3]);
//Template Literals: back tick and dollar sign to refernce a variable in console .log
console.log(`This first language is ${flang} and the second is ${sLang}`);
const[firstlang, secondLang,...therest] = languages;
console.log(therest);
console.log(therest[0]);

try{
    console.log(multiplier(2,3,4,5));
}catch(error){
    console.log(error.message)
}
console.log(lineGraphFunction(3,4, 2,3,4,5,6))
//Assigning values to two new variables.

const addressees = ['Ire Belles', 'Morola Solar', 'Wesley Took']

addressees.map((addressee) => {
    let message = `Dear ${addressee},
    It is my pleasure to inform you that your admission letter is ready for collection
    x`
    console.log (message);
})