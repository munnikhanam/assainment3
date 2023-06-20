// Question number no=1
const objToday = new Date(),
  weekday = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ),
  dayOfWeek = weekday[objToday.getDay()],
  domEnder = (function () {
    var a = objToday;
    if (/1/.test(parseInt((a + "").charAt(0)))) return "th";
    a = parseInt((a + "").charAt(1));
    return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th";
  })(),
  dayOfMonth =
    today + (objToday.getDate() < 10)
      ? "0" + objToday.getDate() + domEnder
      : objToday.getDate() + domEnder,
  months = new Array(
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ),
  curMonth = months[objToday.getMonth()],
  curYear = objToday.getFullYear();

var today = dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;

document.getElementsByTagName("h1")[0].textContent = today;

//  Question number no=2

const getSqure = (arr) => {
  let newArray = [];
  // for loop

  //   for (var i = 0, len = arr.length; i < len; i++) {
  //     const squre = Math.pow(arr[i], 2);
  //     newArray.push(squre);
  //   }

  arr.map((num) => {
    const newNum = Math.pow(num, 2);
    newArray.push(newNum);
  });
  return newArray;
};
const myArr = [2, 3, 4, 5];
console.log(getSqure(myArr));

// question Number: 3

const posiveNum = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};
console.log(posiveNum(5));

// Question number: 4

function newwindow() {
  window.open("https://ostad.app//index.htm", "", "width=800, height=600");
}
newwindow();
// Question number :5
function browsername() {
  var name = "Browser Name: " + navigator.appName;
  return name;
}
console.log(browsername());
function version() {
  var ver = "Browser Version : " + navigator.appVersion;
  return ver;
}
console.log(version());

// Question number :6
const findMe = () => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
};
console.log(findMe());
// Question number : 8
function changeText() {
  document.getElementById("para").innerHTML =
    "You clicked the button, I am new paragraph.";
}
// Question number: 10
function changeBg() {
  const colorProperty = document.getElementById("details");

  colorProperty.classList.add("highlight");
}
// Question number: 11
var arr = ["alpha", "bravo", "charlie", "delta", "echo"];
var cont = document.getElementById("container");

// create ul element and set the attributes.
var ul = document.createElement("ul");
ul.setAttribute("style", "padding: 0; margin: 0;");
ul.setAttribute("id", "theList");

for (i = 0; i <= arr.length; i++) {
  var li = document.createElement("li");
  li.innerHTML = arr[i];
  li.setAttribute("style", "display: block;");

  ul.appendChild(li);
}

cont.appendChild(ul);

// Question number: 12

function changeImage() {
  let img = document.getElementById("myImg");
  img.src = "../images/pic-2.jpg";
}
//
