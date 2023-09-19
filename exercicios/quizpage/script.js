let cont=0
const questions = ["Qual Capital de Minas Gerais?", "Qual Capital da Bahia", "Qual Capital de Pernambuco?"]
const answers = [
    ['Uberlandia', 'Belo Horizonte', "Betim", 'Juiz de Fora'],
    ['Juazeiro', 'Feira de Santana', 'Barra', 'Salvador'],
    ['Recife','Jaboatão dos Guararapes', 'Olinda', 'Petrolina']
]
const rightAns = ['Belo Horizonte','Salvador','Recife']
let resp = []


const t = document.getElementById("titulo")
const des = document.getElementById("desc")
const a = document.getElementById("eA")
const b = document.getElementById("eB")
const c = document.getElementById("eC")
const d = document.getElementById("eD")
const r = document.getElementById("resultado")
const h = document.getElementById("home")
const i= document.getElementById("inf")

function load(cont){
    t.innerHTML=`Questão ${cont+1}`
    des.innerHTML=`${questions[cont]}`
    a.innerHTML=`${answers[cont][0]}`
    b.innerHTML=`${answers[cont][1]}`
    c.innerHTML=`${answers[cont][2]}`
    d.innerHTML=`${answers[cont][3]}`
}

function checkAns(A, B){
    let i = (A.length - 1)
    let acertos=0
    for(i;i>=0;i--){
        if(A[i]==B[i])
        {
            acertos+=1
        }
    }
    return acertos
}

load(0)

function next(){
    var radios = document.getElementsByTagName('input');
    var value;
    let qnt=0;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            // get value, set checked flag or do whatever you need to
            value = radios[i].value;     
            resp[cont]= answers[cont][value-1]; 
        }
    }
    const btn = document.getElementById("btn")
    if(cont<(questions.length - 1))
    {
        cont+=1
        load(cont)
    }
    else{
        const rp = document.getElementById("resp")
        const rh = document.getElementById("resh")
        qnt = checkAns(resp, rightAns)
        rh.innerHTML = "Finalizado!"
        rp.innerHTML = `Você acertou ${qnt} questões`
        //btn.style.backgroundColor = "gray"
        //btn.style.cursor = "not-allowed"
        //h.style.display = "none"
		$('#resultado').fadeIn(750)
        r.style.display = "block"
        $('#home').fadeOut(250)
    }
}


function fundoSun(){
    $('body').css('background-color', 'white')
    $('#home').css('color','black')
    $('#home').css('border','0.1em solid black')
    $('#resultado').css('color','black')
    $('#resultado').css('border','0.1em solid black')
    $('#titulo').css('background-color', 'white')
}


function fundoMoon(){
    $('body').css('background-color', 'rgb(32, 32, 32)')
    $('#titulo').css('background-color', 'black')
    $('#home').css('color','white')
    $('#home').css('border','0.1em solid white')
    $('#resultado').css('color','white')
    $('#resultado').css('border','0.1em solid white')
}