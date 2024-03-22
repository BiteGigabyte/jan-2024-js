
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
//
//
let urlTask1 = new URL('https://dummyjson.com/carts');
urlTask1.searchParams.append('limit', 30);
urlTask1.searchParams.append('skip', 0);
//
fetch(urlTask1) //json
    .then(res => res.json()) // js
    .then(value => {
        let task1Div = document.getElementsByClassName('task1Div')[0];
        //
        let taskNumber1 = document.createElement('h2');
        taskNumber1.innerText = 'Task 1/3.';
        task1Div.appendChild(taskNumber1);
        // father.innerHTML = '';
        //
        let ol = document.createElement('ol');
        task1Div.appendChild(ol);
        //
        let {carts} = value;
        //
        for (const cart of carts) {
            let li = document.createElement('li');
            let span = document.createElement('span');
            span.innerText = `id: ${cart.id}; discountedTotal: ${cart.discountedTotal};`;
            let h4 = document.createElement('h4');
            h4.innerText = `total: ${cart.total}; totalProducts: ${cart.totalProducts};`;
            h4.style.fontWeight = 'normal';
            let p = document.createElement('p');
            p.innerText = `totalQuantity: ${cart.totalQuantity}; userId: ${cart.userId};`
            let button = document.createElement('button');
            button.innerText = 'Products';
            button.onclick = function () {
                if (document.getElementById('productDiv')) {
                    let productDiv = document.getElementById('productDiv');
                    productDiv.remove();
                }
                let productDiv = document.createElement('div');
                productDiv.id = 'productDiv';
                for (const productElement of cart.products) {
                    let productP = document.createElement('p');
                    productP.innerText = `id: ${productElement.id}; title: ${productElement.title};`;
                    let productImage = document.createElement('img');
                    productImage.alt = productElement.title;
                    productImage.src = productElement.thumbnail;
                    productImage.style.width = '50vw';
                    //
                    productDiv.append(productP, productImage);
                }
                li.appendChild(productDiv);
            }
            //
            li.append(span, h4, p, button);
            ol.appendChild(li);
        }
        let task1Hr = document.createElement('hr');
        task1Div.appendChild(task1Hr);
    });
//
//
// ================================================


//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
//
//
    let task2Div = document.getElementsByClassName('task2Div')[0];
    //
function showRecipes(limit, skip) {
let urlTask2 = new URL('https://dummyjson.com/recipes');
    urlTask2.searchParams.append('limit', limit);
    urlTask2.searchParams.append('skip', skip);
    //
    task2Div.innerText = '';
//
    //
    let taskNumber2 = document.createElement('h2');
    taskNumber2.innerText = 'Task 2/3.';
    task2Div.appendChild(taskNumber2);
    //
fetch(urlTask2).then(value => value.json()).then(value => {
    console.log(value);
    //
    for (const recipe of value.recipes) {
        let recipeDiv = document.createElement('div');
        //
        let task2h4 = document.createElement('h4');
        task2h4.innerText = `id: ${recipe.id}; name: ${recipe.name}`;
        let task2Img = document.createElement('img');
        task2Img.alt = recipe.name;
        task2Img.src = recipe.image;
        task2Img.style.width = '50vw';
        //
        recipeDiv.append(task2h4, task2Img);
        //
            let recipeUl = document.createElement('ul');
            for (const ingredient of recipe.ingredients) {
                let recipeUlLi = document.createElement('li');
                recipeUlLi.innerText = ingredient;
                recipeUl.appendChild(recipeUlLi);
            }
            //
        recipeDiv.appendChild(recipeUl);
        //
        task2Div.appendChild(recipeDiv);
    }
    //
    let nextButton = document.createElement('button');
    nextButton.innerText = 'Наступні 10 елементів.';
    nextButton.addEventListener('click', function () {
            skpRecipes += limRecipes;
            showRecipes(limRecipes, skpRecipes);
        }
    )
    //
    let task2Hr = document.createElement('hr');
    task2Div.append(nextButton, task2Hr);
})
}
//
let limRecipes = 10;
let skpRecipes = 0;
//
showRecipes(limRecipes, skpRecipes);
//
//
// ================================================


//     - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)
//
//
// створив окрему кнопку Яка переносить на завдання.
//
// ================================================
