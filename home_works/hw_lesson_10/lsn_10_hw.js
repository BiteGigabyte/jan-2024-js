// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та вивести об'єкт в документ. Іншими словами : заповнити форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом.
//
//
let userForm = document.forms['userForm'];
// console.log(userForm);
//
let userFormName = userForm['userFormName'];
let userFormSurname = userForm['userFormSurname'];
let userFormAge = userForm['userFormAge'];
//
// console.log(document.forms);
//
userForm.onsubmit = function (e) {
    e.preventDefault();
    //
    let userDivBlock = document.getElementById('userDivBlock');
    let userDivBlockName = document.createElement('h3');
    userDivBlockName.innerText = `name: ${userFormName.value}`;
    let userDivBlockSurname = document.createElement('h4');
    userDivBlockSurname.innerText = `surname: ${userFormSurname.value}`;
    let userDivBlockAge = document.createElement('p');
    userDivBlockAge.innerText = `age: ${userFormAge.value}`;
    userDivBlock.append(userDivBlockName, userDivBlockSurname, userDivBlockAge);
}
//
// ==========================


// є сторінка, на якій є блок, я кому знаходиться цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
//
//
let task2DivH3 = document.getElementById('task2DivH3');
//
let storageValue = localStorage.getItem('value');
//
if (storageValue) {
    storageValue = parseInt(storageValue) + 1;
    localStorage.setItem('value', storageValue);
} else {
    storageValue = task2DivH3.innerText;
    localStorage.setItem('value', storageValue);
}
//
task2DivH3.innerText = storageValue;
//
// ==========================


// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
//
//
let task3DivIndex = document.getElementById('task3DivIndex');
//
let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
//
task3DivIndex.onclick = function () {
    sessions.push({date: new Date()});
    localStorage.setItem('sessions', JSON.stringify(sessions));
};
//
// =========================


//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//
//
    let user = function (c) {
    //створив дані щоб не писати вручну.
    const names = ["John", "Jane", "Bob", "Mary", "Tom", "Kate"];
    const surnames = ["Smith", "Doe", "Johnson", "Lee", "Brown", "Davis"];
    const emails = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "icloud.com", "aol.com"];
    const orders = [["book"], ["phone"], ["laptop"], ["shoes"], ["shirt"], ["hat"], ["book", "phone"], ["phone", "laptop"], ["laptop", "shoes"],
        ["shoes", "shirt"], ["shirt", "hat"], ["book", "phone", "laptop"], ["phone", "laptop", "shoes"], ["laptop", "shoes", "shirt"],
        ["shoes", "shirt", "hat"]];
    //масив для заповнення.
    let client = [];
    //цикл для авто заповнення 10 елементів.
    for (let i = 0; i < c; i++) {
        const name = names[Math.floor(Math.random() * names.length)];
        const surname = surnames[Math.floor(Math.random() * surnames.length)];
        const email = `${name.toLowerCase()}.${surname.toLowerCase()}@${emails[Math.floor(Math.random() * emails.length)]}`;
        const phone = `+380-${Math.floor(Math.random() * 100000000 + 900000000)}`;
        const order = orders[Math.floor(Math.random() * orders.length)];
        client[i] = {id: Math.floor(Math.random() * 9000000 + 1000000), name: name, surname: surname, email: email, phone: phone, order: order};
    }
        return client;
    }
    let users = user(100); // створив масив на 100 об'єктів;
    //
console.log(users);
//
let task4BlockDiv = document.getElementById('task4BlockDiv');
let firstEl = 0;
let lastEl = 9;
function pagination (firstEl, lastEl)  {
        task4BlockDiv.innerText = '';
    let usersPicks = users.filter((value, index) => index >= firstEl && index <= lastEl);
    usersPicks.map(value => {
        let task4BlockDivH4 = document.createElement('h4');
        task4BlockDivH4.innerText = JSON.stringify(value);
        task4BlockDiv.appendChild(task4BlockDivH4);
    })
}
pagination(firstEl, lastEl);
//
    let task4BlockDivPrev = document.getElementById('task4BlockDivPrev');
    let task4BlockDivNext = document.getElementById('task4BlockDivNext');
    //
task4BlockDivPrev.onclick = function () {
    if (firstEl - 10 > 9) {
    firstEl -= 10;
    lastEl -= 10;
    pagination(firstEl, lastEl);
    }
}
//
task4BlockDivNext.onclick = function () {
    if (lastEl < users.length - 1) {
        firstEl += 10;
        lastEl += 10;
        pagination(firstEl, lastEl);
    }
}
//
// ==========================


// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
//
let task5BlockDiv = document.getElementById('text');
let task5BlockButton = document.getElementById('task5BlockButton');
//
task5BlockButton.onclick = function () {
    task5BlockDiv.style.display = 'none';
}
//
// ==========================


//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача
//
//
let task6BlockInput = document.getElementsByName('task6BlockInput');
let task6BlockButton = document.getElementById('task6BlockButton');
let task6BlockDiv = document.getElementById('task6BlockDiv');
//
task6BlockButton.onclick = function () {
    if (task6BlockInput[0].value >= 18) {
        let task6BlockH3 = document.createElement('h3');
        task6BlockDiv.innerText = '';
        task6BlockH3.innerText = 'Супер!';
        task6BlockDiv.appendChild(task6BlockH3);
    } else {
        let task6BlockH3 = document.createElement('h3');
        task6BlockDiv.innerText = '';
        task6BlockH3.innerText = 'Вік менше ніж 18!!!';
        task6BlockDiv.appendChild(task6BlockH3);
    }
}
//
// ==========================


// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)
//
//
let task7Block = document.getElementById('task7Block');
let task7lockInputRows = document.getElementsByName('task7lockInputRows');
let task7lockInputColumn = document.getElementsByName('task7lockInputColumn');
let task7lockInputData = document.getElementsByName('task7lockInputData');
let task7BlockInputButton = document.getElementById('task7BlockInputButton');
//
task7BlockInputButton.addEventListener('click', function () {
    let rows = task7lockInputRows[0].value;
    let columns = task7lockInputColumn[0].value;
    let content = task7lockInputData[0].value;
    //
    if (columns > 0 && rows > 0)
    {
        let table = document.createElement('table');
        for (let i = 0; i < rows; i++) {
            let tr = document.createElement('tr');
            tr.style.border = '1px solid black';
            tr.style.background = 'white';
            for (let j = 0; j < columns; j++) {
                let td = document.createElement('td');
                td.innerText = content;
                td.style.border = '1px solid black';
                tr.appendChild(td);
            }
            table.style.marginTop = '10px';
            table.style.border = '1px solid black';
            table.style.background = 'black';
            table.appendChild(tr);
        }
        task7Block.append(table, document.createElement('hr'));
    }
})
//
// ==========================


// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
//
//
let task8BlockH4 = document.getElementById('task8BlockH4');
//
    let summ = JSON.parse(localStorage.getItem('summ')) || 100;
    task8BlockH4.innerText = `${summ} грн.`;
// document.addEventListener('DOMContentLoaded', function () { // можна було через цей обробник
// document.addEventListener('beforeunload', function () { // цей не працює заблокований
// window.onbeforeunload = function () { // так працює але localStorage постійно оновлюється коли закриваєш а самого перезавантаження немає
window.onload = function () {
    let rebootDate = new Date(localStorage.getItem('rebootDate')) || new Date();
    //
    let currentTimestamp = new Date().getTime();
    let rebootTimestamp = rebootDate.getTime() + 10 * 1000;
    //
    if (rebootTimestamp < currentTimestamp) {
        if (localStorage.getItem('summ')) {
        task8BlockH4.innerText = `${summ + 10} грн.`;
        localStorage.setItem('summ', JSON.stringify(summ + 10));
        localStorage.setItem('rebootDate', new Date().toString());
        } else {
            localStorage.setItem('summ', JSON.stringify(summ));
            localStorage.setItem('rebootDate', new Date().toString());
        }
    }
}
// )
;
//
// ==========================

