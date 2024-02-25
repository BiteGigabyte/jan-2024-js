// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
const massive1 = [
    'Hello', 'Okten', 'School', 2, 3, 1, 'My', 'name', 'is', 'Yura'
];
//
console.log(massive1[0], massive1[1], massive1[2], massive1[3], massive1[4], massive1[5], massive1[6], massive1[7], massive1[8], massive1[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
//
const books_1_1 = {
    title: 'Book1',
    pageCount: 100,
    genre: 'Criminal'
}
//
const books_1_2 = {
    title: 'Book2',
    pageCount: 200,
    genre: 'Business'
}
//
const books_1_3 = {
    title: 'Book3',
    pageCount: 300,
    genre: 'Comedy'
}


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
//
const books_2_1 = {
    title: 'Book1',
    pageCount: 100,
    genre: 'Criminal',
    authors: [
        {
            name: 'Bill',
            age: 50
        }
    ]
}
//
const books_2_2 = {
    title: 'Book2',
    pageCount: 200,
    genre: 'Business',
    authors: [
        {
            name: 'Robert',
            age: 60
        }
    ]
}
//
const books_2_3 = {
    title: 'Book3',
    pageCount: 300,
    genre: 'Comedy',
    authors: [
        {
            name: 'Charles',
            age: 70
        }
    ]
}


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
//
const user_mass = [
    {name: 'Name1', username: 'username1', password: '0123456789'},
    {name: 'Name2', username: 'username2', password: '1234567890'},
    {name: 'Name3', username: 'username3', password: '2345678901'},
    {name: 'Name4', username: 'username4', password: '3456789012'},
    {name: 'Name5', username: 'username5', password: '4567890123'},
    {name: 'Name6', username: 'username6', password: '5678901234'},
    {name: 'Name7', username: 'username7', password: '6789012345'},
    {name: 'Name8', username: 'username8', password: '7890123456'},
    {name: 'Name9', username: 'username9', password: '8901234567'},
    {name: 'Name10', username: 'username10', password: '9012345678'},
]
//
console.log(user_mass[0].password, user_mass[1].password, user_mass[2].password, user_mass[3].password, user_mass[4].password, user_mass[5].password, user_mass[6].password, user_mass[7].password, user_mass[8].password, user_mass[9].password);


// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// const a = 1;
// const a = 0;
const a = -3;
//
if (a != 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
//
const time = 44;
//
if (time >= 0 && time <= 14) {
    console.log('Перша частина');
} else if (time >= 15 && time <= 29) {
    console.log('Друга частина');
} else if (time >= 30 && time <= 44) {
    console.log('Третя частина');
} else if (time >= 45 && time <= 59) {
    console.log('Четверта частина');
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
const day = 11;
//
if (day >= 1 && day <= 10) {
    console.log('1 декада.');
} else if (day >= 11 && day <= 20) {
    console.log('2 декада.');
} else if (day >= 21 && day <= 31) {
    console.log('3 декада.');
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
const day_number = prompt('Введіть номер дня: 1-7.', '5');
//
switch (day_number) {
    case '1':
        console.log('Monday');
        break;
    case '2':
        console.log('Tuesday');
        break;
    case '3':
        console.log('Wednesday');
        break;
    case '4':
        console.log('Thursday');
        break;
    case '5':
        console.log('Friday');
        break;
    case '6':
        console.log('Saturday');
        break;
    case '7':
        console.log('Sunday');
        break;
    default:
        console.log('Не вірні дані...');

}



//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох.
//         Також потрібно врахувати коли введені рівні числа.
//
const a_number = '4';
const b_number = 1;
//
if (a_number > b_number) {
    console.log('A number is biggest.');
} else if (a_number < b_number) {
    console.log('B number is biggest.');
} else if (a_number == b_number) {
    console.log('The numbers are equal.');
} else {
    console.log('Wrong data.');
}



//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//
// let x_variable = 4;
let x_variable = undefined;
//
x_variable = x_variable || "default";
//
console.log(x_variable);


//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
//
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер');
}