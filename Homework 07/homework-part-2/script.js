const numberContainer = document.getElementById("number-container");

const numbers = [
    1,
    5,
    7,
];

function printNumbers(numbers) {
    let html = "<ul>";
    let sum = 0;
    for (const number of numbers) {
        html += `<li>${number}</li>`;
        sum += number;
    }
    html += "</ul>";
    html += `<p>Sum: ${sum}</p>`

    numberContainer.innerHTML = html;
}

printNumbers(numbers);

