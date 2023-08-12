let cont = 1
function calcValores() 
{
/*var inpN1 = document.getElementById('num1')*/
var inpN1 = document.getElementById('num1')
var inpOption = document.getElementById('lista')
var inpN2 = document.getElementById('num2')
var res = document.getElementById('result')
var tableH = document.getElementById('tabela')
/*var n1 = Number(inpN1.value)*/
var n1 = Number(inpN1.value)
var n2 = Number(inpN2.value)
var nOption = Number(inpOption.value)

let resp
let opera
if(nOption==1){
    opera = 'Adição'
    resp= n1+ n2
}
else if(nOption==2){
    opera = 'Subtração'
    resp = n1 - n2
}
else if(nOption==3){
    opera = 'Divisão'
    resp = n1/n2
}
else if(nOption==4){
    opera = 'Multiplicação'
    resp = n1*n2
}

res.innerHTML = `O resultado da ${opera} é: <strong> ${resp}</strong>`

tableH.innerHTML += `<tr>
                    <td>${cont}</td>
                    <td>${opera}</td>
                    <td>${n1}</td>
                    <td>${n2}</td>
                    <td>${resp}</td>
                    </tr>`
cont+=1

}

function show(){
    var d = document.getElementById('content')
    if(d.style.display == 'flex'){
        d.style.display = 'none';
    }
    else{
        d.style.display = 'flex'
    }

}