/*Задание: Работа с функциями в JavaScript
Задание 1: Определение функций (Function Declaration)
Напишите функцию greet , которая принимает имя пользователя и выводит сообщение в
формате: "Привет, [имя]!"*/
function greet(userName) {
    console.log("Привет, " + userName + "!");
}
// Пример вызова функции:
greet("Иван");

/*Задание 2: Function Expression
Создайте функцию multiply , которая принимает два числа и возвращает их произведение.
Используйте Function Expression.*/
let multiply = function (num1, num2) {
    return num1 * num2;
}

// Пример вызова функции:
let result = multiply(3, 4);
console.log(result);


/*Задание 3: Анонимные функции
Создайте анонимную функцию, которая выводит в консоль "Анонимная функция вызвана!" и
немедленно вызовите её.*/
// Вызов функции:
(function () {
    console.log("Это анонимная функция!");
})();


/*Задание 4: Самовызывающаяся функция (IIFE)
Создайте самовызывающуюся функцию, которая выводит в консоль "IIFE выполнена".*/
// Пример вызова IIFE:
(function () {
    console.log("IIFE выполнена");
})();


/*Задание 5: Вложенные функции
Создайте функцию outer , которая внутри содержит функцию inner . Функция inner
должна возвращать строку "Внутренняя функция". Функция outer должна вызывать функцию
inner и возвращать её результат.*/
function outer() {
    function inner() {
        console.log("Внутренняя функция");
    }
    inner();
}
// Пример вызова функции:
let message = outer();

/*Задание 6: Привязка функции к контексту (bind)
Создайте объект person с полем name . Добавьте функцию sayName , которая выводит имя
объекта. Привяжите функцию к объекту с помощью bind .*/

const person = {
    name: "Olga",
    sayName: function () {
        console.log(this.name);
    }
};
const sayNames = person.sayName.bind(person);
// Пример вызова:
sayNames();

/*Задание 7: Замыкания
Создайте функцию counter , которая возвращает другую функцию. Эта внутренняя функция
должна увеличивать счетчик на 1 при каждом вызове и выводить текущее значение.*/
// Пример использования:
//let count = counter();
//count(); // 1
//count(); // 2

function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}
const counter = createCounter();
console.log(counter());
console.log(counter());


/*Задание 8: Передача функции в качестве аргумента
Создайте функцию execute , которая принимает функцию и два числа в качестве
аргументов. Выполните переданную функцию с этими числами.*/

function execute(operation, num1, num2) {
    return operation(num1, num2);
}

function multiply2(num1, num2) {
    return num1 * num2;
}
// Пример использования:
console.log(execute(multiply2, 2, 5));