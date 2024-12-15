//Write a JavaScript program that will read in a number and write out its digits
let num = 1;

for (let num = 1; num <= 9; num++) {
  console.log(`Digit: ${num}`);
}

//Homework #1

function tellStory(args) {
  let [name, mood, activity] = args;

  return `This is ${name}. ${name} is a nice person. Today he is ${mood}. He is ${activity} all day. The end.`;
}

let storyData = ["Damjan", "exciting", "reading"];

let story = tellStory(storyData);
console.log(story);

// Homework #2

function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log("The sum of the array is:", sum);
}

sumArray([10, 20, 30, 40, 50]);

//Homework #3

function concatenateStrings(stringsArray) {
  let bigString = "";
  for (let i = 0; i < stringsArray.length; i++) {
    bigString += stringsArray[i] + (i < stringsArray.length - 1 ? " " : "");
  }
  console.log(bigString);

  return bigString;
}

concatenateStrings(["Hello", "there", "students", "of", "SEDC", "!"]);

//Homework #4
function printNumbers() {
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      // If the number is even, add a new line after it
      console.log(i + "\n");
    } else {
      // If the number is odd, add a space after it
      process.stdout.write(i + " ");
    }
  }
}

printNumbers();

// Homework #5

function sumMaxMin(numbers) {
  let max = numbers[0];
  let min = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
      continue;
    }
    if (numbers[i] < min) {
      min = numbers[i];
      continue;
    }
  }

  let sum = max + min;
  console.log(`Max: ${max}, Min: ${min}, Sum: ${sum}`);
  return sum;
}

sumMaxMin([3, 5, 6, 8, 11]);

// Homework #6

let first = ["Bob", "Jill"];
let last = ["Gregory", "Wurtz"];
createFullNames(first, last);

function createFullNames(firstNames, lastNames) {
  let fullNames = [];

  for (let i = 0; i < firstNames.length; i++) {
    let fullName = `${i + 1}. ${firstNames[i]} ${lastNames[i]}`;
    fullNames.push(fullName);
  }

  console.log(fullNames);
  return fullNames;
}
