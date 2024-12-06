//HOMEWORK PART 1

function getType(param) {
    let type = typeof param; 
    console.log(`The type of the parameter is: ${type}`);
    return type; 
}

console.log(getType({}));          // Object
console.log(getType(true));        // Boolean
console.log(getType(42));          // Number
console.log(getType("Hello"));     // String
console.log(getType(undefined));   // Undefined


//HOMEWORK PART 2

function convertDogAge(age, toDogYears = true) {
    if (toDogYears) {
        // Convert human years to dog years
        return age * 7;
    } else {
        // Convert dog years to human years
        return age / 7;
    }
}

console.log(convertDogAge(3)); 
console.log(convertDogAge(21, false)); 


//HOMEWORK PART 3


let accountBalance = 500; // Your account balance


function withdrawCash(amount) {
    if (amount > accountBalance) {
        return "Not enough money"; 
    } else {
        accountBalance -= amount; 
        return `You withdrew $${amount}. Remaining balance: $${accountBalance}.`; 
    }
}


console.log(withdrawCash(200));
console.log(withdrawCash(400)); 

// Bonus: 
function atmWithPrompt() {
    let withdrawAmount = parseFloat(prompt("Enter the amount to withdraw:"));
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        alert("Invalid amount entered!");
    } else {
        let result = withdrawCash(withdrawAmount);
        alert(result); // Display the result in an alert
    }
}

