// Assuming displayFlavorTable is defined in the HTML file, we do not redefine it here.

const froyoInput = prompt("Enter a list of comma-separated froyo flavors:");
if (froyoInput) {
    const froyoList = froyoInput.split(',').map(flavor => flavor.trim().toLowerCase());
    const tally = countFlavors(froyoList);
    // This will call the displayFlavorTable function defined in the HTML file
    displayFlavorTable(tally);
}

function countFlavors(arr) {
    const flavorCounts = {};
    for (const flavor of arr) {
        if (flavorCounts[flavor]) {
            flavorCounts[flavor]++;
        } else {
            flavorCounts[flavor] = 1;
        }
    }
    return flavorCounts;
}

function displayFlavorTable(tally) {
    let tableHTML = '<table><thead><tr><th>Flavor</th><th>Count</th></tr></thead><tbody>';
    for (const flavor in tally) {
        tableHTML += `<tr><td>${flavor}</td><td>${tally[flavor]}</td></tr>`;
    }
    tableHTML += '</tbody></table>';

    // Set the innerHTML of the div to the tableHTML
    document.getElementById('flavorTable').innerHTML = tableHTML;
}
