// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//
//
let bodyDiv = document.createElement('div');
bodyDiv.classList.add('wrap', 'collapse', 'alpha', 'beta');
bodyDiv.style.backgroundColor = 'rgb(31,143,31)';
bodyDiv.style.color = 'cornflowerblue';
bodyDiv.style.fontSize = '28px';
bodyDiv.innerText = 'Hi Okten!';
document.body.appendChild(bodyDiv);
let bodyDivClone = bodyDiv.cloneNode(true);
document.body.appendChild(bodyDivClone);
//
// ==========================


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
//
//
let array1 = ['Main', 'Products', 'About us', 'Contacts'];
//
let bodyUl = document.createElement('ul');
for (let i = 0; i < array1.length; i++) {
    const array1Element = array1[i];
    let bodyUlLi = document.createElement('li');
    bodyUlLi.innerText = array1Element;
    bodyUl.appendChild(bodyUlLi);
}
document.body.appendChild(bodyUl);
//
// ==========================


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
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
coursesAndDurationArray.forEach(value => {
    const courseAndDurationBlock = document.createElement('h3');
    courseAndDurationBlock.innerText = `title: ${value.title}; monthDuration: ${value.monthDuration}`;
    document.body.appendChild(courseAndDurationBlock);
})
//
// =========================


//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//
//
coursesAndDurationArray.forEach(value => {
    let coursesAndDurationDiv = document.createElement('div');
    coursesAndDurationDiv.classList.add('item');
    let coursesAndDurationDivH1 = document.createElement('h1');
    coursesAndDurationDivH1.classList.add('heading');
    coursesAndDurationDivH1.innerText = `${value.title};`
    let coursesAndDurationDivP = document.createElement('p');
    coursesAndDurationDivP.classList.add('description');
    coursesAndDurationDivP.innerText = `month duration: ${value.monthDuration}`;
    coursesAndDurationDiv.append(coursesAndDurationDivH1, coursesAndDurationDivP);
    document.body.appendChild(coursesAndDurationDiv);
})
//
// ==========================


// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
//
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
//
simpsons.forEach((value, index) => {
    let simpsonsDiv = document.createElement('div');
    simpsonsDiv.classList.add('member');
    let simpsonsDivH3 = document.createElement('h3');
    simpsonsDivH3.innerText = `name: ${value.name}; surname: ${value.surname}.`;
    let simpsonsDivH4 = document.createElement('h4');
    simpsonsDivH4.innerText = `age: ${value.age}`;
    let simpsonsDivP = document.createElement('p');
    simpsonsDivP.innerText = `info: ${value.info}`;
    let simpsonsDivImg = document.createElement('img');
    simpsonsDivImg.src = `${value.photo}`;
    simpsonsDivImg.alt = `${value.name}_${index}`;
    //
    simpsonsDiv.append(simpsonsDivH3, simpsonsDivH4, simpsonsDivP, simpsonsDivImg);
    document.body.appendChild(simpsonsDiv);
})
//
// =========================


//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
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
    let bodyMainDiv = document.createElement('div');
    bodyMainDiv.classList.add('bodyMainDiv');
coursesArray.forEach(value => {
    let bodyMainDivBlock = document.createElement('div');
    bodyMainDivBlock.classList.add('bodyMainDivBlock');
    let bodyMainDivBlockH3 = document.createElement('h3');
    bodyMainDivBlockH3.classList.add('bodyMainDivBlockH3');
    bodyMainDivBlockH3.innerText = `${value.title}`;
    let bodyMainDivBlockH4Month = document.createElement('h4');
    bodyMainDivBlockH4Month.classList.add('bodyMainDivBlockH4Month');
    bodyMainDivBlockH4Month.innerText = `${value.monthDuration}`;
    let bodyMainDivBlockH4Hour = document.createElement('h4');
    bodyMainDivBlockH4Hour.classList.add('bodyMainDivBlockH4Hour');
    bodyMainDivBlockH4Hour.innerText = `${value.hourDuration}`;
    let bodyMainDivBlockUl = document.createElement('ul');
    bodyMainDivBlockUl.classList.add('bodyMainDivBlockUl');
    value.modules.forEach(value => {
        let bodyMainDivBlockUlLi = document.createElement('li');
        bodyMainDivBlockUlLi.classList.add('bodyMainDivBlockUlLi');
        bodyMainDivBlockUlLi.innerText = `${value}`;
        bodyMainDivBlockUl.appendChild(bodyMainDivBlockUlLi);
    })
    bodyMainDivBlock.append(bodyMainDivBlockH3, bodyMainDivBlockH4Month, bodyMainDivBlockH4Hour, bodyMainDivBlockUl, bodyMainDivBlockUl)
    bodyMainDiv.appendChild(bodyMainDivBlock);
})
document.body.appendChild(bodyMainDiv);
//
// ------------------
// ==================
