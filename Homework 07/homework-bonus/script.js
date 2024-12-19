const allHeaders = document.querySelector(".header-one");
const unorderedList = document.querySelector(".unordered-list");

function recipePage() {
    let recipeName = prompt("Enter the name of the recipe:");
    let numberOfIngredients = prompt("Enter how many ingredients do we need for the recipe:");
    
    let ingredients = [];
    
   
    for (let i = 0; i < numberOfIngredients; i++) {
        const ingredient = prompt(`Enter name of ingredient ${i + 1}:`);
        ingredients.push(ingredient);
    }

    let html = "<h1>" + recipeName + "</h1>";

    html += "<ul>";

    for (let i = 0; i < ingredients.length; i++){
        html += "<li>" + ingredients[i] + "</li>";
    }

    html += "</ul>"

    unorderedList.innerHTML = html;
}    

recipePage();