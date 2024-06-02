document.getElementById("doll-area").addEventListener("click", function() {
    foundItem("doll");
}, false);

document.getElementById("spade-area").addEventListener("click", function() {
    foundItem("spade");
}, false);

document.getElementById("dice-area").addEventListener("click", function() {
    foundItem("dice");
}, false);

let foundCount = 0;
const totalItems = 3;

function foundItem(item) {
    const itemElement = document.getElementById(item);
    if (itemElement.style.textDecoration !== "line-through") {
        itemElement.style.textDecoration = "line-through";
        foundCount++;
    }

    if (foundCount === totalItems) {
        document.getElementById("message").innerText = "Congratulations! You've found all the items. Do you want to play again?";
        setTimeout(function() {
            if (confirm("Do you want to play again?")) {
                location.reload();
            }
        }, 100);
    }
}
