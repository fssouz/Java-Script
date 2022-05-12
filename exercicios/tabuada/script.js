function createTable() {
    const txtn = document.getElementById('num');
    const n = Number(txtn.value);
    const tb = document.getElementById('tabela');
    tb.innerHTML =`            
    <tr>
        <th>N</th>
        <th style="width:0.4rem">X</th>
        <th>N</th>
        <th>=</th>
    </tr>`;
    for(var i =1; i<=10; i++)
    {
        tb.innerHTML += `<tr> <td> ${n}</td> <td> X </td> <td> ${i}</td> <td> ${n*i}</td></tr>`
    }

}