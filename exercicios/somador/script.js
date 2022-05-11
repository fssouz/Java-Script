function somarValores() 
{
var inpN1 = document.getElementById('num1')
var inpN2 = document.getElementById('num2')
var res = document.getElementById('result')
var n1 = Number(inpN1.value)
var n2 = Number(inpN2.value)
var soma = n1 + n2
res.innerHTML = `A soma entre ${n1} e ${n2} è <strong>${soma}</strong>`
}