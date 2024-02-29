const pi = 3.14;


// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
function rectangleSquare(a, b) {
    return a * b;
}
console.log('Task 1: ' + rectangleSquare(2, 3));


// - створити функцію яка обчислює та повертає площу кола з радіусом r
//
function circleSquare(r) {
    return pi * (r * r);
}
console.log('Task 2: ' + circleSquare(4));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
function cylinderSquare(h, r) {
    return (2 * pi * r) * (r + h);
}
console.log('Task 3: ' + cylinderSquare(5, 2));


// - створити функцію яка приймає масив та виводить кожен його елемент
//
    console.log('Task 4: ');
function func1(massive) {
//
    for (const massiveElement of massive) {
        console.log(massiveElement);
    }
}
func1([1, 2, 3, 4, 5, 6, 0]);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
document.write(`<h2>Task 5: </h2>`)
let createParagraph = function (paragraph) {
    document.write(`<p>${paragraph}</p>`);
}
createParagraph(`abc bcd cde def efg fgh`);


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
document.write(`<h2>Task 6: </h2>`)
function createUlAndLi (text) {
    document.write(`<ul>`);
        document.write(`<li>${text}</li>`);
        document.write(`<li>${text}</li>`);
        document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}
createUlAndLi(`abc bcd cde def efg`);


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
document.write(`<h2>Task 7: </h2>`)
function createUlAndLiCyclically (text, quantity) {
    document.write(`<ul>`);
    for (let i = 0; i < quantity; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
createUlAndLiCyclically(`abc bcd cde def`, 2);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
let array1 = [1, "two", true, 4, "five", false];
document.write(`<h2>Task 8: </h2>`)
//
function liArrayFunction (arr) {
    document.write(`<ul>`);
    for (let i = 0; i < arr.length; i++) {
        const arrElement = arr[i];
        document.write(`<li>${arrElement}</li>`);
    }
    document.write(`</ul>`);
}
liArrayFunction(array1);


// - створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ. Для кожного об'єкту окремий блок.
//
document.write(`<h2>Task 9: </h2>`)
//
function arrayBlocksFunction (array) {
    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i];
        document.write(`<div class="flex">`);
            document.write(`<h4 class="padding-right">${arrayElement.id}</h4>`);
            document.write(`<h4 class="padding-right">${arrayElement.name}</h4>`);
            document.write(`<h4>${arrayElement.age}</h4>`);
        document.write(`</div>`);
    }
}
let objectsArray = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Alice", age: 25 },
    { id: 3, name: "Bob", age: 35 }
];
arrayBlocksFunction(objectsArray);


// - створити функцію яка повертає найменьше число з масиву
//
function lowerNumber (array) {
        let a = null;
    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i];
        if (a > arrayElement || a === null) {
            a = arrayElement;
        }
    }
    return a;
}
const array = [3, 4, 5, 6, 7, 8, 9, 1, 2];
console.log('Task 10: ' + lowerNumber(array) + ' lower number.');


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
//
function sum (arr) {
    let a = 0;
    for (let i = 0; i < arr.length; i++) {
        const arrElement = arr[i];
        a += arrElement;
    }
    return a;
}
console.log('Task 11: ' + sum([1, 2, 10]));


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
//



// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
//