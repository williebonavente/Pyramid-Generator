function padRow(rowNumber, rowCount, character) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

function generatePattern() {
    const character = document.getElementById('character').value;
    const count = parseInt(document.getElementById('count').value);
    const inverted = document.getElementById('inverted').checked;
    const rows = [];

    for (let i = 1; i <= count; i++) {
        if (inverted) {
            rows.unshift(padRow(i, count, character));
        } else {
            rows.push(padRow(i, count, character));
        }
    }

    let result = "";
    for (const row of rows) {
        result = result + "\n" + row;
    }

    document.getElementById('result').textContent = result;
}