function weightInChickens(input) {
    let weight = prompt("Enter your weight in kg(kilograms)");
    chicken = weight / 0.5;
    document.querySelector(".result").textContent = `Your weight in chickens is ${chicken}.`;
}

weightInChickens();




