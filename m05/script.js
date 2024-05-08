var number = prompt("Enter a number from 0 to 10:");

var msg = "<h2>Multiplication Table</h2>";
msg += "<table>";

for (var i = 1; i <= 10; i++) {
  msg +=
    "<tr><td>" +
    i +
    " x " +
    number +
    " = </td><td>" +
    number * i +
    "</td></tr>";
}

msg += "</table>";

document.getElementById("blackboard").innerHTML = msg;
