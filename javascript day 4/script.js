// exercise 1
let age = prompt("enter your age:");
const driveAge = 18;
if (age >= driveAge) {
  alert("You are old enough to drive.");
} else {
  alert(`You are left with ${driveAge - age} years to drive.`);
}

// Number 2
let yourAge = prompt("enter your age:");
const myAge = 20;
if (yourAge > myAge) {
    alert(`You are ${yourAge - myAge} years older than me.`);
  } else if (yourAge < myAge) {
    alert(`I am ${myAge - yourAge} years older than you.`);
  } else {
    alert("we are age mates");
  }

//   Number 3
let a = 4;
let b = 3;
if (a > b) {
    console.log ("a is greater than b");}
    else {
        console.log ("a is lesser than b")
    }

    // Number 4
    let num = prompt("Enter a number:");
if (num % 2 === 0) {
  alert(`${num} is an even number`);
} else {
  alert(`${num} is an odd number`);
}

// EXERCISE 2
let grade = prompt("enter score");
if (grade >= 80) {
  alert("A");
} else if (grade >= 70) {
  alert("B");
} else if (grade >= 60) {
  alert("C");
} else if (grade >= 50) {
  alert("D");
} else {
  alert("F");
}

// Number 2
let month = prompt("enter month:");
switch (month) {
  case "september":
  case "october":
  case "november":
    alert(`the season is Autumn.`);
    break;
  case "december":
  case "january":
  case "february":
    alert(`the season is Winter.`);
    break;
  case "march":
  case "april":
  case "may":
    alert("the season is spring");
    break;
  case "july":
  case "june":
  case "august":
    alert(`the season is summer`);
}

// Number 3
let day = prompt("what is the day today:");
if ((day.toLowerCase() == "saturday") | "sunday") {
  alert(`${day} is a weekend`);
} else {
  alert(`${day} is a working day`);
}

// EXERCISE 3
let daysNum = prompt("enter a month");
daysNum = daysNum.toLocaleLowerCase();
switch (daysNum) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "december":
    alert(`${daysNum} has 31 days`);
    break;
  case "april":
  case "june":
  case "september":
  case "november":
    alert(`${daysNum} has 30 days`);
    break;
  default:
    alert(`${daysNum} has 28days`);
}