function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
    var rhombus = "";
    
    // Generate the upper half of the rhombus
    for (let i = 0; i < pHeight; i++) {
        // Generate spaces to align the rhombus properly
        for (let j = i; j < pHeight - 1; j++) {
            rhombus += "&nbsp;&nbsp;";
        }
        // Generate the symbols for the current row
        for (let k = 0; k <= 2 * i; k++) {
            if (k % 2 === 0) {
                rhombus += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            } else {
                rhombus += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
            }
        }
        rhombus += "<br>";
    }
    
    // Generate the lower half of the rhombus
    for (let i = pHeight - 2; i >= 0; i--) {
        // Generate spaces to align the rhombus properly
        for (let j = i; j < pHeight - 1; j++) {
            rhombus += "&nbsp;&nbsp;";
        }
        // Generate the symbols for the current row
        for (let k = 0; k <= 2 * i; k++) {
            if (k % 2 === 0) {
                rhombus += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            } else {
                rhombus += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
            }
        }
        rhombus += "<br>";
    }
    
    // Display the rhombus
    document.getElementById("rhombus").innerHTML = rhombus;
}
