alert("Enjoy the sunrise/sunset/anything else in this code"); 
function time(){
    var now = new Date(); // obtains the current date and assigns it to variable "now" 
    var h = now.getHours();  
    var m = now.getMinutes(); 
    var s = now.getSeconds(); 
    if (s < 10){ 
    s = '0' + s;
    }
    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s; // same as printf("time is %d:%d:%d",h,m,s); 
    var t = setInterval(time,1000);  
}

window.onload = function (){ 
  time(); 
};
