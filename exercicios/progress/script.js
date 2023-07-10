let control = 0
let percent = 0
function iniciar(){
    control=1
}
function pausar(){
    control=2
}
function reniciar(){
    control=3
}

setInterval(() => {
    const barra = document.getElementById('second')
    barra.style.width = `${percent}%`
    if(control==1)
    {
        percent+=10
        barra.style.backgroundColor = "rgba(0, 255, 0, 0.704)"
        barra.innerHTML = "carregando..."
    }
    else if(control==2)
    {
        percent+=0
        barra.innerHTML = "pausado"
        barra.style.backgroundColor = "rgb(255, 165, 0)"
    }
    else{
        barra.innerHTML = "..."
        percent=0
    }
},500)