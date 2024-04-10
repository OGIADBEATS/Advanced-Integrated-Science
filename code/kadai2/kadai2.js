function generateMultiplicationTable() {
    let tableBody = document.getElementById("multiplicationTableBody");
    let tableHTML = "";
  
    for (let i = 1; i <= 12; i++) {
      tableHTML += "<tr>";
      if (i === 1) {
        tableHTML += "<td>x</td>";
      } else {
        tableHTML += "<td>" + i + "</td>";
      }
      for (let j = 1; j <= 12; j++) {
        let result = i * j;
        tableHTML += "<td>" + result + "</td>";
      }
      tableHTML += "</tr>";
    }
  
    tableBody.innerHTML = tableHTML;
  }
  
  generateMultiplicationTable();
  