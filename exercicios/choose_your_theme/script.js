var div = document.getElementById('divmain')
var body = document.getElementById('body')
 var txt = document.getElementById('txt')
 var q1 = document.getElementById('square1')
 var q2 = document.getElementById('square2')
 var q3 = document.getElementById('square3')
 function turnRed(){
     div.style.boxShadow = "6px 6px 2px rgb(211, 105, 108)"
     div.style.background = "rgb(168, 56, 59)"
     txt.style.color = "rgb(84, 0, 2)"
     body.style.background = "rgb(253, 168, 170)"
     q1.style.border = "4px solid rgb(211, 105, 108)"
     q1.style.opacity = "100%"
     q2.style.opacity = "35%"
     q3.style.opacity = "35%"
 }

 function turnGreen(){
     txt.style.color = "rgb(10, 70, 0)" 
     div.style.background = "rgb(30, 105, 18)"
     div.style.boxShadow = "6px 6px 2px rgb(100, 176, 88)"
     body.style.background = "rgb(151, 211, 141)"
     q2.style.border = "4px solid rgb(100, 176, 88)"
     q2.style.opacity = "100%"
     q1.style.opacity = "35%"
     q3.style.opacity = "35%"
 }

 function turnBlue(){
     txt.style.color = "rgb(4, 32, 55)"
     div.style.background = "rgb(18, 53, 82)"
     div.style.boxShadow = "6px 6px 2px rgb(73, 108, 137)"
     body.style.background = "rgb(113, 141, 165)"
     q3.style.border = "4px solid rgb(73, 108, 137)"
     q3.style.opacity = "100%"
     q1.style.opacity = "35%"
     q2.style.opacity = "35%"
 }
 function clearTheme(){
     txt.style.color = "black" 
     div.style.background = "white"
     div.style.boxShadow = "3px 3px 5px black"
     body.style.background = "white"
     q1.style.opacity = "100%"
     q2.style.opacity = "100%"
     q3.style.opacity = "100%"
     q1.style.border = "none"
     q2.style.border = "none"
     q3.style.border = "none"
 }