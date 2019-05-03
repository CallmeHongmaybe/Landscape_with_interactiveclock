var i = 0;
function show_menu() { 
  if (i === 0) {    
    document.getElementById("menu").style.left = '-300px';
    document.getElementById("control-bar").style.left = '-300px';
    i = 1;
  }
  else {
    document.getElementById("menu").style.left = '0';
    document.getElementById("control-bar").style.left = '0';
    i = 0;
  }
}



window.onload = function() {
var humid_output = document.getElementById("humid_value"); 
var humid_input = document.getElementById("humid_slider"); 
humid_input.innerHTML = humid_output.value; 

humid_input.oninput = function() {
    humid_output.innerHTML = this.value + " %"; 
}; 

var temp_output = document.getElementById("temp_value"); 
var temp_input = document.getElementById("temp_slider"); 
temp_input.innerHTML = temp_output.value; 

temp_input.oninput = function() {
    temp_output.innerHTML = this.value + " °C"; 
};

var wind_output = document.getElementById("wind_value"); 
var wind_input = document.getElementById("wind_slider"); 
wind_input.innerHTML = wind_output.value; 

wind_input.oninput = function() {
    wind_output.innerHTML = this.value + " °km/h"; 
};


};
