// alert("ola1");
// document.write("first content");
// console.log("First console log");

// var someVariable = 2;

// someVariable = 200;

// data types

// 1) string (ტექსტი)
// 2) number  (რიცხვი)
// 3) boolean (true/false)
// 4) undefined (მიუთითებს რომ არ აქვს მინიჭებული მნიშვნელობა)
// 5) null (მიუთითებს რომ აქვს განუსაზღვრელი მნიშვნელობა)
// 6) Nan (not a number)
// 7) bigint (თითქმის მკვდარია)

// var x = 45;

// var y = 2.52;
// console.log(typeof x);
// var companyName = "Test Company Name";

// console.log(typeof companyName);

// console.log(isAlive); // undefined
// var isAlive = true;

// var isDead;

// console.log(isDead); // undefiend

var income = 100;
var percent = 20;

var result = !(income > 50);
console.log(result);

// var result = income == strIncome;
// console.log(result); //true

// var result2 = income === strIncome;
// console.log(result2); // false

// var sum = income + 20 + strIncome;
// console.log(sum); //

// var name = "Giorgi";
// var lastName = "apxadze";

// var fullName = name + " " + lastName;

// console.log(fullName);

// var number1 = "46hello";
// var number2 = "4";

// var result1 = parseInt(number1) + parseInt(number2);

// console.log(result1);

// var strSum = prompt("ჩაწერეთ ანაბრის თანხა", 1000);
// var strPercent = prompt("შეიყვანეთ საპროცენტო განაკვეთი", 10);

// var sum = parseInt(strSum);
// var percent = parseInt(strPercent);

// sum = sum + (sum * percent) / 100;

// alert("პროცენტის დარიცხვის შემდეგ ანარბის თანხა იქნება" + sum);

// var people = ["Tom", "Alice", " Sam"];

// console.log(people[0]);

// people[7] = "Bob";

// console.log(people[7]);

var numbers = [1, 2, 3, 4, 5];
var number2 = [
  [0, 1, 2],
  [3, 4, 5],
];

var people = [
  ["Tom", 25, false], //0
  ["Alice", 26, true], //1
  ["Bob", 27, false], //2
];
console.log(people);
console.log(people[2][0]);

var income = 500;
var age = 25;

if (income < 150 && age > 17) {
  var message = "Good job";
  document.write(message);
} else if (income < 250 && age > 24) {
  document.write("some text for old people");
} else {
  document.write("");
}

switch (income) {
  case 100:
    document.write("income is 100");
    break;
  case 200:
    document.write("income is 200");
    break;
  case 300:
    document.write("income is 300");
    break;
  default:
    document.write("Thats good");
    break;
}

var a = 1;
var b = 2;

if (a < b) {
  a + b;
} else {
  a - b;
}

var result = a < b ? a + b : a - b;
