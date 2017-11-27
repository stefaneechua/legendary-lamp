// changes the text once button is clicked
function changeText() {
  document.getElementById("xmas").innerHTML = "Idk";
}

// changes the image depending on button pressed
var elem = document.getElementById("santa");


function toggleSanta() {
  document.getElementById("santa").src="http://piq.codeus.net/static/media/userpics/piq_155228_400x400.png";
  elem.style.backgroundColor = "green"; //adding css styles
}

function togglePizza() {
  document.getElementById("santa").src="https://www.spreadshirt.com/image-server/v1/mp/designs/1000500549,width=178,height=178/8bit-pizza.png";
}

// output
// window.alert("hello xmas");

// Booleans
var x = 10; y = "10"; z = "sandy claws";
  document.getElementById("demo").innerHTML = (x == y) + "<br>" + (y === z) + "<br>" + (x === y);
