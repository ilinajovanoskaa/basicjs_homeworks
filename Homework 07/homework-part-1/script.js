// All paragraphs (and text)
const paragraphOne = document.querySelector(".paragraph");
const paragraphTwo = document.querySelector(".paragraph-second");
const textOne = paragraphTwo.nextElementSibling;


console.log(paragraphOne);
console.log(paragraphTwo);
console.log(textOne);

paragraphOne.textContent = "I figure it out!!";
paragraphTwo.textContent = "Yes,it's very easy!";
textOne.textContent = "I don't know if this should be changed.But let it be!"

// All headers
const headerOne = document.querySelector("#myTitle");
const headerThree = document.querySelector("h3");
const headerTwo = headerThree.previousElementSibling;


console.log(headerOne);
console.log(headerThree);
console.log(headerTwo);

headerOne.textContent = "Awesome Page!";
headerThree.textContent = "Yay!It's changed";
headerTwo.textContent = "This too!!!";

