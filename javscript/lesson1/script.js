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
// console.log(result);

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
// console.log(people);
// console.log(people[2][0]);

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
    // document.write("Thats good");
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

// for ([მრიცხველის ინციალიაზაცია]: [პირობა]:[მრიცხველის შეცვლა]) {
// მოქმედებები
//}

var people = ["Tom", "Alice", "Sam"];
// For cycle
// for (var i = 0; i < people.length; i++) {
//   document.write(people[i] + "</br>");
// }

// Reversed array
for (var i = people.length - 1; i >= 0; i--) {
  // document.write(people[i] + "</br>");
}

// for in cycle

// for (ინდექსი in მასივი) {
//   მოქმედებები
// }

for (var index in people) {
  // document.write(people[index]);
}

// while

// while (პირობა){
//   მოქმედებები
// }

var people = ["Tom", "Alice", "Sam"];
var index = 0;

while (index < people.length) {
  // document.write(people[index]);
  index++;
}

// do while

var x = 1;

do {
  // document.write(x * x + "<br>");
  x++;
} while (x < 10);

// breake continue

var arr = [1, 2, 3, 4, 5, 16, 17, 18, 19, 20];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] < 10) continue;
  // document.write(arr[i]);
}

var fruits = ["Banan", "Orange", "Apple", "Kiwi"];
// console.log(fruits);
var arrToSTring = fruits.toString();

// console.log(arrToSTring);

// console.log(fruits.at(2));

// console.log(fruits.join(" * "));

// fruits.pop();

// console.log(fruits);

// fruits.push("Mango");
// console.log(fruits);

// fruits.shift();
// console.log(fruits);

// fruits.unshift("Lemon");
// console.log(fruits);

var boysNames = ["Giorgi", "Levani", "Tornike"];

var girlsNAmes = ["Lika", "Tatia", "Tekla"];

var people = boysNames.concat(girlsNAmes);

var people2 = [...boysNames, ...girlsNAmes];

// console.log(people2);

var testStr = "SomebigTextforTesting";

var slicedStr = testStr.slice(2);
// console.log(slicedStr);

const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

// console.log(found);

const map = array1.map((x) => {
  // console.log(x);
});
// array1.forEach((element) => console.log(element));

// functionions

// function ფუნქციის_სახელი([პარამენტრი]){
//   //ინსტრუქციები
// }

// function display() {
//   document.write("Javacript Functions");
// }
// display();

function goodMorning() {
  document.write("Good Morning");
}

function goodEvning() {
  document.write("Good evening");
}

// var message = goodEvning();

// message = goodMorning();

// message();

// function display(x) {
//   var z = x * x;
//   console.log(z);
// }

// display(5);

function display(x, y) {
  if (y === undefined) y = x;
  var z = x * y;
  // document.write(z);
}

// display(6, 4);
display(6);

var y = 5;
var z = square(y);

document.write(y + z);

function square(x) {
  return x * x;
}

function display2(x, welcomeMessage) {
  var message = welcomeMessage(x);
  document.write(message);
}

function welcomeMessage(time) {
  if (time < 12) {
    return "Good morning";
  } else {
    return "Good Evening";
  }
}

display2(13, welcomeMessage);

// console.log(greeter);

let greeter = "hey hi";

let times = 5;

if (times > 3) {
  let greeter = "say hello instead";
}

console.log(greeter);

let test;

const something = 5;

function print() {
  console.log(arguments);
}

const someting = function () {
  console.log(arguments);
};

// const print = () => {
//   console.log(arguments);
// };

print("Hello", 400, false);

function myFunction() {
  alert("ola");
}

let arrs = [1, 2, 3, 2, 4, 5, 1];
let uniqueArr = [...new Set(arrs)];
console.log(uniqueArr); // [1, 2, 3, 4, 5]
