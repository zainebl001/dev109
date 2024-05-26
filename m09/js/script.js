var mybutton = document.querySelector("#clear-button");

mybutton.addEventListener("click", function(event) {
  var elements = document.querySelectorAll(".dot");
  elements.forEach(function(element) {
    element.parentNode.removeChild(element);
  });

  event.stopPropagation();
});

document.body.addEventListener("click", function(event) {
  var dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = (event.pageX - 4) + "px";
  dot.style.top = (event.pageY - 4) + "px";
  document.body.appendChild(dot);
});
