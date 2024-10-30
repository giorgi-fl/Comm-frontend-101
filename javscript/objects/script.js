const currentDate = new Date();
// console.log(currentDate);

const data = {
  name: "product",
  price: 100,
  publish_date: 1500000000000,
};

const productDate = new Date(data?.publish_date);

// console.log(productDate);

/// Welcome to our website
// const myDate = new Date();
// //აბრუნებს თვის რიცხვს
// const day = myDate.getDate();
// console.log("day", day);
// // აბრუნებს კვირის დღეს ათვლა 0 დან კვირის დაწყებით
// const weekDay = myDate.getDay();
// console.log("weekDay", weekDay);
// // აბრუნებს თვეს ათვლა 0 დან
// const month = myDate.getMonth();
// console.log(month);

// // აბრუნებს წელს
// const year = myDate.getFullYear();
// console.log("year", year);

// const toSTring = myDate.toDateString();
// console.log(toSTring);

// const hour = myDate.getHours();
// console.log("hour", hour);

// const minutes = myDate.getMinutes();
// console.log("minutes", minutes);

// const seconds = myDate.getSeconds();
// console.log("seconds", seconds);

// const milliseconds = myDate.getMilliseconds();
// console.log("milliseconds", milliseconds);

let span = document.getElementById("output");

function time() {
  let welcome;
  const newDate = new Date();

  let hours = newDate.getHours();
  let minutes = newDate.getMinutes();
  let seconds = newDate.getSeconds();

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (hours < 12) {
    welcome = "Good Morning";
  } else if (hours < 18) {
    welcome = "Good Afternoon";
  } else {
    welcome = "Good Evening";
  }

  span.textContent = welcome + " " + hours + ":" + minutes + ":" + seconds;
}
setInterval(time, 1000);
