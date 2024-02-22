// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
//
const hello = 'hello';
const owu = 'owu';
const com = 'com';
const ua = 'ua';
const numberOne = 1;
const numberTen = 10;
const minus999 = -999;
const number123 = 123;
const number3_14 = 3.14;
const number2_7 = 2.7;
const number16 = 16;
const booleanTrue = true;
const booleanFalse = false;
//
console.log(hello, owu, com, ua, numberOne, numberTen, minus999, number123, number3_14, number2_7, number16, booleanTrue, booleanFalse);





// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//
const firstName = 'Yurii';
const middleName = 'Ruslanovich';
const lastname = 'Perun';
//
const person = `${firstName} ${middleName} ${lastname}`;
//
console.log(person);




// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
//
let a = 100; let b = '100'; let c = true;
//
console.log(typeof a, typeof b, typeof c);




// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Ім`ям, По-Батькові та роками. та вивести в консоль
//
let firstNamePrompt = prompt('Вкажіть ваше ім\'я:', 'Юрій');
let middleNamePrompt = prompt('Вкажіть ваше по-батькові:', 'Русланович');
let agePrompt = prompt('Вкажіть ваш вік:', '27');
//
let personPrompt = `${firstNamePrompt} ${middleNamePrompt}. ${agePrompt} років.`;
//
console.log(personPrompt);
