let cont=0
const questions = ["Qual Capital de Minas Gerais?", "Qual Capital da Bahia", "Qual Capital de Pernambuco?"]
const answers = [
    ['Uberlandia', 'Belo Horizonte', "Betim", 'Juiz de Fora'],
    ['Juazeiro', 'Feira de Santana', 'Barra', 'Salvador'],
    ['Recife','Jaboatão dos Guararapes', 'Olinda', 'Petrolina']
]
const right = [2,4,1]
const t = document.getElementById("titulo")
const des = document.getElementById("desc")
const a = document.getElementById("eA")
const b = document.getElementById("eB")
const c = document.getElementById("eC")
const d = document.getElementById("eD")

function load(cont){
    t.innerHTML=`Questão ${cont+1}`
    des.innerHTML=`${questions[cont]}`
    a.innerHTML=`${answers[cont][0]}`
    b.innerHTML=`${answers[cont][1]}`
    c.innerHTML=`${answers[cont][2]}`
    d.innerHTML=`${answers[cont][3]}`
}
load(0)

function next(){
    var radios = document.getElementsByTagName('input');
    var value;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            // get value, set checked flag or do whatever you need to
            value = radios[i].value;       
        }
    }
    const btn = document.getElementById("btn")
    if(cont<(questions.length - 1))
    {
        cont+=1
        load(cont)
    }
    else{
        btn.style.backgroundColor = "gray"
        btn.style.cursor = "not-allowed"
    }
    console.log(value)
    console.log('cont ',cont)
}