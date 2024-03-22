
//     - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)
//
//
let usersUrl = new URL ('http://jsonplaceholder.typicode.com/users');
//
fetch(usersUrl).then(value => value.json()).then(value => {
    let task3Div = document.getElementById('task3Div');
    let task3Ol = document.createElement('ol');
    task3Div.appendChild(task3Ol);
    //
    for (const valueElement of value) {
        let task3Li = document.createElement('li');
        task3Li.innerText = `id: ${valueElement.id}; name: ${valueElement.name};`;
        //
        let userA = document.createElement('a');
        userA.style.display = 'block';
        userA.href = `user-details.html?id=${valueElement.id}`;
        userA.innerText = `Ссилка на сторінку з деталями про користувача ${valueElement.id}.`;
        task3Li.appendChild(userA);
        //
        task3Ol.appendChild(task3Li);

    }
})