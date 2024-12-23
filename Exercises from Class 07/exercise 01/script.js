const firstDiv = document.getElementById("first");
console.log("First Div:", firstDiv);

const allParagraphs = document.getElementsByTagName("p");
console.log("All Paragraphs:", allParagraphs);

const lastDiv = document.getElementsByTagName("div");
console.log("Last Div:", lastDiv[lastDiv.length - 1]);

const headerThree = document.getElementsByTagName("h3");
console.log("h3:", headerThree);

const lastHeaderOne = document.getElementsByTagName("h1");
console.log("Last h1:", lastHeaderOne[lastHeaderOne.length - 1]);
//Tuka imav problem ne mozev da selektiram so next i previous element sibling i morase vaka da se snajdam

const secondParagraph = document.querySelector(".paragraph-second");
const textFromP = secondParagraph.nextElementSibling;

console.log(textFromP);

textFromP.innerHTML += "text.";

const headerTree = document.querySelector("h3");
const headerTwo = headerTree.previousElementSibling;

console.log(headerTree);
console.log(headerTwo);

headerTwo.innerHTML = "Now it's changed!";
headerTree.innerHTML = "This too!!!!";
