// Homework 01
class Animal {
  constructor(name, kind) {
    this.name = name;
    this.kind = kind;
  }

  speak(message) {
    console.log(`${this.name} says: '${message}'`);
  }
}

// BONUS: Getting input from the user for name, kind, and message
const animalName = prompt("Enter the animal's name:");
const animalKind = prompt("Enter the animal's kind:");
const message = prompt("Enter what the animal should say:");

const animal = new Animal("Dog", "Mammal");

animal.speak(message);

// Homework 02
class Book {
  constructor(title, author, readingStatus) {
    this.title = title;
    this.author = author;
    this.readingStatus = readingStatus;
  }

  displayStatus() {
    if (this.readingStatus) {
      console.log(`Already read '${this.title}' by ${this.author}.`);
    } else {
      console.log(`You still need to read '${this.title}' by ${this.author}.`);
    }
  }
}
const readingStatusInput = prompt("Have you read the book? (yes/no)");

let book;
if (readingStatusInput === "yes") {
  book = new Book("The Robots of Dawn", "Isaac Asimov", true);
} else {
  book = new Book(
    "Mockingjay: The Final Book of The Hunger Games",
    "Suzanne Collins",
    false
  );
}

book.displayStatus();
