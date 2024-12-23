const rowsInput = document.getElementById("row");
const colsInput = document.getElementById("col");
const tableContainer = document.getElementById("table-container");
const button = document.getElementById("generate-table");

function generateTables() {
  const rows = parseInt(rowsInput.value, 10);
  const cols = parseInt(colsInput.value, 10);

  let table = "<table border='1'>";

  for (let i = 0; i < rows; i++) {
    table += "<tr>";
    for (let j = 0; j < cols; j++) {
      table += `<td>Row ${i + 1}, Column ${j + 1}</td>`;
    }
    table += "</tr>";
  }

  table += "</table>";
  tableContainer.innerHTML = table;
}

button.addEventListener("click", generateTables);
