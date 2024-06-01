const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
    const priceCells = document.querySelectorAll(".prices"); // Select all price cells
    let totalPrice = 0;

    priceCells.forEach((cell) => {
        const price = parseFloat(cell.textContent);
        totalPrice += price;
    });

    // Create a new row for the total price
    const totalRow = document.createElement("tr");
    const totalCell = document.createElement("td");
    totalCell.colSpan = 3; // Span all columns
    totalCell.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
    totalRow.appendChild(totalCell);

    // Append the total row to your table (assuming you have a reference to the table)
    const table = document.querySelector(".groceryTable");
    table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);