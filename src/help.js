var inputDiv = document.querySelector('#input');
var input = document.querySelector('input');
// var body = document.querySelector('body');

input.onclick = function () {
   inputDiv.style.backgroundColor = '#f4f3f1';
   input.style.backgroundColor = '#f4f3f1';
}

window.onclick = function (event) {
   if (event.target != input) {
      input.style.backgroundColor = 'white';
      inputDiv.style.backgroundColor = 'white';
   }
}