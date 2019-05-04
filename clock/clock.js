// alert("Enjoy the sunrise/sunset/anything else in this code"); 
// function time(){
//     var now = new Date();  
//     var h = now.getHours();  
//     var m = now.getMinutes(); 
//     var s = now.getSeconds(); 
//     if (s < 10){ 
//     s = '0' + s;
//     }
//     document.getElementById("clock").innerHTML = h + ":" + m + ":" + s; // same as printf("time is %d:%d:%d",h,m,s); 
//     var t = setInterval(time,1000);  
// }

// window.onload = function (){ 
//   time(); 
// }; 

var h = 0, t;


function ticking() {
     if (h >= 24) {
        clearInterval(t); 
        document.getElementById("clock").innerHTML = "Thanks for playing";
     }
     else {
     h += 2; 
     document.getElementById("clock").innerHTML = h + ":" + "00";     
     }
}

setTimeout(ticking,500); // makes sure that html is loaded 

var t = setInterval(ticking,1000); 

window.onload = function(){ticking()}; 


    
