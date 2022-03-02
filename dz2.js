// 1. Дан код:
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 увеличит зачение а на 1 и запишит  (1+1) 
// alert(a);                    a = 2
d = b++; alert(d);           // 1 увеличит b, но покажит старое значение
// alert(b);                    b = 2
c = (2+ ++a); alert(c);      // 5 значение a еще раз увеличит (а=3 + 2)
d = (2+ b++); alert(d);      // 4 b=2 тк увеличилось в предыдущий раз (d = b++;) и это же значение используется и +2
alert(a);                    // 3 увеличили 2 раза
alert(b);                    // 3 увеличили 2 раза

// 2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);       
alert(x);                   // x=5, a*=2 работает как  2*2

// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

let a = +prompt('Введите первое число');
let b = +prompt('Введите второе число');
if (a >= 0 && b >= 0) {
    alert(`Разность чисел равна:`+ ' ' + (a - b));
} else if (a < 0 && b < 0) {
    alert(`Произведение чисел равно:` + ' ' + (a * b));
} else {
    alert(`Сумма чисел равна:` + ' ' + (a + b));
};


// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

let a = +prompt('Введите число от 1 до 15');
switch (a) {
    case 1:
        console.log(a++);
    case 2:
        console.log(a++);
    case 3:
        console.log(a++);
    case 4:
        console.log(a++);
    case 5:
        console.log(a++);
    case 6:
        console.log(a++);
    case 7:
        console.log(a++);
    case 8:
        console.log(a++);
    case 9:
        console.log(a++);
    case 10:
        console.log(a++);
    case 11:
        console.log(a++);
    case 12:
        console.log(a++);
    case 13:
        console.log(a++);
    case 14:
        console.log(a++);
    case 15:
        console.log(a++);
};


// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

let a;
let b;

function sum (a, b) {
    return a + b;
};
function subtraction (a, b) {
    return a - b;
};
function multiplication (a, b) {
    return a * b;
};
function division (a, b) {
    return a / b;
};

console.log(sum(10, 12));
console.log(subtraction(10, 12));
console.log(multiplication(10, 12));
console.log(division (10, 12));

// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation)
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических
// операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).

function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case '+': return sum(arg1, arg2);
        case '-': return subtraction(arg1, arg2);
        case '*': return multiplication(arg1, arg2);
        case '/': return division(arg1, arg2);
    }
};

console.log(mathOperation(2, 10, '+'));
console.log(mathOperation(2, 10, '-'));
console.log(mathOperation(2, 10, '*'));
console.log(mathOperation(2, 10, '/'));

// 7. *Сравнить null и 0. Попробуйте объяснить результат.
// Почитала, примерно поняла, но сложновато переварить))) 

// 8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.

let val, pow;
function power(val, pow) {
    if (pow == 0) return 1;
    else if (pow < 0) return power(1/val, -pow);
    else return val * power(val, pow - 1);
};

console.log(power(3, 3));
console.log(power(3, 0));
console.log(power(3, -2));
