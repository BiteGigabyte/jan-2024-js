// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
function User(id, name, surname, email, phone) {
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
}

//
let usersConstructor = [];
for (let i = 1; i < 11; i++) {
    usersConstructor.push(new User(i, 'name' + i, 'surname' + i, 'email' + i, 'phone' + i));
}
console.log(usersConstructor);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
console.log(usersConstructor = usersConstructor.filter(value => value.id % 2 === 0));


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
console.log(usersConstructor = usersConstructor.sort((a, b) => a.id - b.id));


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

//
let user = function (c) {
    //створив дані щоб не писати вручну.
    const names = ["John", "Jane", "Bob", "Mary", "Tom", "Kate"];
    const surnames = ["Smith", "Doe", "Johnson", "Lee", "Brown", "Davis"];
    const emails = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "icloud.com", "aol.com"];
    const orders = [["book"], ["phone"], ["laptop"], ["shoes"], ["shirt"], ["hat"], ["book", "phone"], ["phone", "laptop"], ["laptop", "shoes"],
        ["shoes", "shirt"], ["shirt", "hat"], ["book", "phone", "laptop"], ["phone", "laptop", "shoes"], ["laptop", "shoes", "shirt"],
        ["shoes", "shirt", "hat"]];
    //масив для заповнення через класс.
    let client = [];
    //цикл для авто заповнення 10 елементів.
    for (let i = 0; i < c; i++) {
        const name = names[Math.floor(Math.random() * names.length)];
        const surname = surnames[Math.floor(Math.random() * surnames.length)];
        const email = `${name.toLowerCase()}.${surname.toLowerCase()}@${emails[Math.floor(Math.random() * emails.length)]}`;
        const phone = `+380${Math.floor(Math.random() * 100000000 + 900000000)}`;
        const order = orders[Math.floor(Math.random() * orders.length)];
        client[i] = new Client(Math.floor(Math.random() * 9000000 + 1000000), name, surname, email, phone, order);
    }
    return client;
}
//
let users = user(10);
console.log(users);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
console.log(users.sort((a, b) => a.order.length - b.order.length));


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
function Car(model, manufacturer, yearOfManufacture, maximumSpeed, engineSize) {
    this.model = model
    this.manufacturer = manufacturer
    this.yearOfManufacture = yearOfManufacture
    this.maximumSpeed = maximumSpeed
    this.engineSize = engineSize

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину;`);
    }
    this.info = function () {
        console.log(`model: ${this.model}; manufacturer: ${this.manufacturer}; yearOfManufacture: ${this.yearOfManufacture}; maximumSpeed: ${this.maximumSpeed}; engineSize: ${this.engineSize};`)
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maximumSpeed = newSpeed;
    }
    this.changeYear = function (newValue) {
        this.yearOfManufacture = newValue;
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}
//
//
const car =  new Car('M3', 'BMW', 2021, 320, 3.2);
console.log(car);
// car.drive();
car.drive.call(car);
car.info.apply(car);
car.increaseMaxSpeed.call(car, 340);
console.log(car);
car.changeYear.apply(car, [2020]);
console.log(car);
const driver = { name: 'Vasya', age: 30, experience: '5 years' };
car.addDriver.call(car, driver);
// car.addDriver(driver);
console.log(car);
// console.log(car.driver);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
class Car2 {
    constructor (model, manufacturer, yearOfManufacture, maximumSpeed, engineSize) {
    this.model = model
    this.manufacturer = manufacturer
    this.yearOfManufacture = yearOfManufacture
    this.maximumSpeed = maximumSpeed
    this.engineSize = engineSize
}
    drive () {
        console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину;`);
    }

    info() {
        console.log(`model: ${this.model}; manufacturer: ${this.manufacturer}; yearOfManufacture: ${this.yearOfManufacture}; maximumSpeed: ${this.maximumSpeed}; engineSize: ${this.engineSize};`)
    }

    increaseMaxSpeed (newSpeed) {
        this.maximumSpeed = newSpeed;
    }
    changeYear  (newValue) {
        this.yearOfManufacture = newValue;
    }
    addDriver (driver) {
        this.driver = driver;
    }
}
//
//
const car2 =  new Car2('M3', 'BMW', 2021, 320, 3.2);
console.log(car2);
// car2.drive();
car2.drive.call(car2);
// car2.info.apply(car2);
car2.info.apply(car2);
car2.increaseMaxSpeed.call(car2, 340);
console.log(car2);
car2.changeYear.apply(car2, [2020]);
console.log(car2);
const driver2 = { name: 'Vasya', age: 30, experience: '5 years' };
car2.addDriver.call(car2, driver2);
// car.addDriver(driver);
console.log(car2);
// console.log(car.driver);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
//
