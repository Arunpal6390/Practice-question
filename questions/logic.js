// console.log("Hello");
// let number = 5;
// if (number == 1) {
//   console.log("A");
// } else if (number == 2) {
//   console.log("B");
// } else {
//   console.log("F");
// }

// let marks = 20;
// switch (marks) {
//   case 1:
//     console.log("A");
//     break;

//   case 2:
//     console.log("B");
//     break;
//   default:
//     console.log("F");
// }
// let n = prompt("Enter number how many times you want to print Good night:");
// let n = " ";
// for (let i = 1; i < 9; i++) {
//   n += i + " ";
// }
// console.log(n);

// for (let i = 0; i < 5; i++) {

// }

// function definition
// function printNumber(num) {
//   for (let i = 0; i < 10; i++) {
//     console.log(i + num);
//   }
// }
// printNumber(8);// function call,without function call we cant't execute the function

function printEvenNumber(given_number) {
  if (given_number % 2 == 0) {
    console.log("Even Number");
  } else {
    console.log("Odd Number");
  }
}

function checkVoter(age) {
  if (age >= 18) {
    console.log("eligible for voter");
  } else {
    console.log("Not eligible for vote");
  }
}

function check_given_number_multipleFive(num) {
  if (num % 5 == 0) {
    console.log(`${num} is multiple of five`);
  } else {
    console.log(`${num} is not multiple of five`);
  }
}

function printEvenNumbers() {
  let result = "";
  for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
      // console.log(`Even numbers: ${i}`); //templet literals used for print string as well as values.
      result = result + i + ",";
    }
  }
  console.log(result);
}

function printOddNumbers() {
  total = 0;
  cout = 0;
  for (let i = 0; i <= 5; i++) {
    if (i % 2 !== 0) {
      total = total + i;
      cout++;
    }
  }
  console.log("1 to 100 odd number sum:- " + total);
  console.log("1 to 100 between odd numbe :- " + cout);
}

printEvenNumber(7.5);
checkVoter(71);
check_given_number_multipleFive(5);
printEvenNumbers();
printOddNumbers();
