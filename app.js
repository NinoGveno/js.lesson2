"use strict";
// 1
for (let i = 5; i <= 100; i++) {
  console.log(i);
}
// 2
let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
for (let a = 0; a < array1.length; a++) {
  let number = array1[a];
  if (number > 0 && number < 10) {
    console.log(number);
  }
}
// 3
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let b = 0; b < array2.length; b++) {
  if (array2[b] === 5) {
    console.log("არის");
    break;
  }
}
// 4
let array3 = [1, 2, 3, 4, 5];
let sum = 0;

for (let c = 0; c < array3.length; c++) {
  sum += array3[c];
}

console.log("The sum is:", sum);

// 5
let array4 = [1, 2, 3, 7, 6, 9];
let sum1 = 0;

for (let d = 0; d < array4.length; d++) {
  sum1 += array4[d];
}

let mean = sum1 / array4.length;

console.log("The arithmetic mean is:", mean);

// 6
let array5 = [1, 2, 3, 7, 6, 9];

for (let f = 0; f < array5.length; f++) {
  if (array5[f] === 7) {
    continue;
  }
  console.log(array5[f]);
}

// 7
let user = {
  firstname: "giorgi",
  lastname: "smith",
  age: 25,
  studentstatus: "active",
};

delete user.studentstatus;

//   8
let user1 = {
  name: "giorgi",
  age: 20,
  studentstatus: "active",
};

if (user1.age < 18 && user1.studentstatus === "active") {
  console.log("hello");
} else if (user1.name === "levani") {
  console.log("hello levani");
} else if (user1.studentstatus === "active" || user1.age < 25) {
  console.log("hello world");
} else {
  console.log("error");
}

//   9
let array = [
  [2, -3, 5, 10],
  [25, -24, -11, 100],
  [-6, -7, 10],
];

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    if (array[i][j] > 0) {
      console.log(array[i][j]);
    }
  }
}

//   10

let array6 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];
// 1
let result = array.filter(number => number % 2 !== 0);
console.log(result);
// 2
let result1 = array.filter(number => number % 2 === 0);
console.log(result1);

// 11
let users = [
  { username: "giorgi", status: false },
  { username: "levani", status: false },
  { username: "anna", status: true },
];

let filteredUsers = users.filter((user) => user.status === true);
console.log(filteredUsers);
