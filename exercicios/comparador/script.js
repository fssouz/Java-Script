var nreg=0;
function createInputs() {
    const txtn = document.getElementById('inp');
    const n = Number(txtn.value);
    const dv = document.getElementById('quest');
    dv.innerHTML=``
    for(var i =1; i<=n; i++)
    {
        dv.innerHTML += `<div class="input-group mb-3">
  <span class="input-group-text">${i}</span><input type="text" id="inpa${i}" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
  <span class="input-group-text">${i}</span><input type="text" id="inpb${i}" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
</div>`
    }
    dv.innerHTML+=`<button class="btn btn-primary" id="comp" type="button" onclick="compare(${n})">Comparar</button>`

}


function compare(n) {
    var quest = [];
    var resp = [];
    const dv = document.getElementById('resq');
    var acertos = 0;
    dv.innerHTML = ``;
    nreg++; // Variável nreg deve estar definida anteriormente

    for (var i = 1; i <= n; i++) {
        const txti1 = document.getElementById(`inpa${i}`);
        const txti2 = document.getElementById(`inpb${i}`);
        const txt1 = txti1.value;
        const txt2 = txti2.value;
        
        quest.push(txt1);
        resp.push(txt2);
        
        if (txt1 == txt2) {
            acertos++;
        }
    }

    if (acertos > 0) {
        dv.innerHTML += `<p>Parabéns você acertou ${acertos} questões</p>`;
    } else {
        dv.innerHTML += `<p>Você acertou nenhuma questão</p>`;
    }

    console.log('quest:', quest);
    console.log('resp:', resp);

}