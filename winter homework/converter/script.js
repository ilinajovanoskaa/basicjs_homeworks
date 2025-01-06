const numberInput = document.querySelector(".numberInput");
const numberToWord = document.querySelector(".numberToWord");

function convertNumberToWords(number) {
  const ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  const teens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const thousands = ["", "thousand", "million", "billion"];

  if (number == 0) return "zero";
  if (number < 0) return "minus " + convertNumberToWords(Math.abs(number)); // Math.abs is a method that returns the absolute value of a number

  let words = "";
  for (let i = 0; i < thousands.length && number > 0; i++) {
    const segment = number % 1000; // segment refers to a portion of the number being processed, specifically a group of up to three digits (hundreds, tens, and ones) that is separated by a power of a thousand 
    if (segment > 0) {
      words =
        convertNumberToWordsInHundreds(segment) +
        (thousands[i] ? " " + thousands[i] : "") +
        " " +
        words;
    }
    number = Math.floor(number / 1000); // Math.floor is a method that rounds a number down to the nearest whole number
  }
  return words.trim();
}

function convertNumberToWordsInHundreds(number) {
  const ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  const teens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];

  let words = "";
  if (number >= 100) {
    words += ones[Math.floor(number / 100)] + " hundred";
    number %= 100;
  }
  if (number >= 10 && number < 20) {
    words += " " + teens[number - 10];
  } else {
    if (number >= 20) {
      words += " " + tens[Math.floor(number / 10)];
      number %= 10;
    }
    if (number > 0) {
      words += " " + ones[number];
    }
  }
  return words.trim();
}

numberInput.addEventListener("keyup", function () {
  const number = parseInt(numberInput.value, 10);
  if (!isNaN(number)) {
    numberToWord.innerHTML = convertNumberToWords(number);
  } else {
    numberToWord.innerHTML = "Please enter a valid number.";
  }
});
