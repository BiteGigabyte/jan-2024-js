// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
//
const wordsArr = ['hello world', 'lorem ipsum', 'javascript is cool'];
//
//
//
console.log('Task 1:');
wordsArr.forEach((value) => {
    console.log(`${value}, is: ${value.length} length.`);
});
// ==========================


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
//
console.log('Task 2:');
wordsArr.forEach((word, index, array) => {
    array[index] = word.toUpperCase();
})
console.log(wordsArr);
// ==========================


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//
//
console.log('Task 3:');
wordsArr.forEach((word, index, array) => {
    array[index] = word.toLowerCase();
})
console.log(wordsArr);
// ==========================


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
//
let str = ' dirty string    ';
//
console.log('Task 4:');
str = str.trim();
console.log(str);
// ==========================


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
//
str = 'Ревуть воли як ясла повні';

//
function stringToarray(str) {
    return str.split(' ');
}

//
console.log('Task 5:');
str = stringToarray(str);
console.log(str);
// ==========================


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0]. за допомоги map перетворити всі об'єкти в масиві на стрінгові.
//
//
let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
//
console.log('Task 6:');
arr = arr.map(elem => elem.toString());
console.log(arr);
// ==========================


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
//
let nums = [11, 21, 3]

//
function sortNums(numbers, direction) {
    switch (direction) {
        case 'ascending':
            numbers.sort((a, b) => {
                return a - b;
            });
            break;
        case 'descending':
            numbers.sort((a, b) => {
                return b - a;
            })
            break;
    }
}

//
console.log('Task 7:');
sortNums(nums, 'ascending') // [3,11,21]
console.log(nums);
sortNums(nums, 'descending') // [21,11,3]
console.log(nums);
// ==========================


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
//
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
console.log('Task 8:');
//
coursesAndDurationArray.sort((a, b) => {
    return b.monthDuration - a.monthDuration;
});
console.log(coursesAndDurationArray);
//
coursesAndDurationArray = coursesAndDurationArray.filter(course => course.monthDuration > 5);
console.log(coursesAndDurationArray);
//
coursesAndDurationArray = coursesAndDurationArray.map((course, index) => ({
    id: index + 1,
    title: course.title,
    monthDuration: course.monthDuration
}))
console.log(coursesAndDurationArray);
// =========================


//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
const cardsObj = {
    cardSuit: ['spade', 'diamond', 'heart', 'clubs'],
    value: ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'],
    color: ['red', 'black']
}
//
const cards = [];
//
cardsObj.value.forEach(value => {
    cardsObj.cardSuit.forEach(cardSuit => {
        let color = (cardSuit === 'diamond' || cardSuit === 'heart') ? 'red' : 'black';
        cards.push({value: value, cardSuit: cardSuit, color: color});
    })
})
console.log('Task 9:');
console.log(cards);
//
console.log(cards.find((card) => card['value'] === 'ace' && card['cardSuit'] === 'spade'));
//
console.log(cards.filter(card => card.value == 6));
//
console.log(cards.filter(card => card.color == 'red'));
//
console.log(cards.filter(card => card.cardSuit == 'diamond'));
//
console.log(cards.filter(card => card.value != 8 && card.value != 7 && card.value != 6 && card.cardSuit === 'clubs'));
// =========================


//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
cardsObject = cards.reduce((accumulator, value) => {
    if (value['cardSuit'] === 'spade') {
        accumulator['spades'].push(value);
    } else if (value['cardSuit'] === 'diamond') {
        accumulator['diamonds'].push(value);
    } else if (value['cardSuit'] === 'heart') {
        accumulator['hearts'].push(value);
    } else if (value['cardSuit'] === 'clubs') {
        accumulator['clubs'].push(value);
    }
    return accumulator;
}, {spades: [], diamonds: [], hearts: [], clubs: []});
//
console.log('Task 10:');
console.log(cardsObject);
// =========================


//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
//
//
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
//
console.log('Task 11:');
//
console.log(coursesArray.filter((item) =>  item.modules.includes('sass')));
//
console.log(coursesArray.filter(item =>  item.modules.includes('docker')));
// =========================
