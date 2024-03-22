
let searchParams = new URLSearchParams(window.location.search); // Отримуємо значення параметра "id"
// Отримуємо значення параметра "id"
let id = +searchParams.get('id');
//
//
let userDetailsUrl = new URL (`http://jsonplaceholder.typicode.com/users/${id}`);
//
fetch(userDetailsUrl).then(value => value.json()).then(object => {
    let fatherDiv = document.getElementsByClassName('father')[0];
    //
    for (const objectKey in object) {
        if (objectKey !== 'address' && objectKey !== 'geo' && objectKey !== 'company') {
        let h4 = document.createElement('h4');
        h4.innerText = `${objectKey}: ${object[objectKey]}`;
        //
        fatherDiv.appendChild(h4);
        } else {
                let h4 = document.createElement('h4');
                h4.style.margin = '0';
                h4.innerText = `${objectKey}:`;
                let ul = document.createElement('ul');
                ul.style.margin = '0';
                // ul.innerText = `${objectKey}:`;
            for (const objectKeyName in object[objectKey]) {
                if (objectKeyName !== 'geo') {
                let li = document.createElement('li');
                li.innerText = object[objectKey][objectKeyName];
                //
                ul.appendChild(li);
                }
                else {
                    let li = document.createElement('li');
                    let liH4 = document.createElement('h4');
                    liH4.style.margin = '0';
                    liH4.innerText = `${objectKeyName}: `;
                    li.appendChild(liH4);
                    let liUl = document.createElement('ul');
                    for (const objectKeyNameKey in object[objectKey][objectKeyName]) {
                    let geoLi = document.createElement('li');
                    geoLi.style.listStyleType = 'none';
                    geoLi.innerText = `${objectKeyNameKey}: ${object[objectKey][objectKeyName][objectKeyNameKey]}`;
                    liUl.appendChild(geoLi);
                    li.appendChild(liUl);
                    ul.appendChild(li);
                    }
                }
            }
            fatherDiv.append(h4, ul);
        }
    }
})
