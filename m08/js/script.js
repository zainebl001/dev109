
function addItem() {
  var input = document.getElementById('newItem').value;
  if (input.trim() !== "") {
    
    var newEl = document.createElement('li');
    
    var newText = document.createTextNode(input);
    
    newEl.appendChild(newText);
    
    var position = document.getElementById('todo');
    
    position.appendChild(newEl);
    
    document.getElementById('newItem').value = "";
  }
}
