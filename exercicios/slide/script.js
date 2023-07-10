function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}
async function mover(inicio, fim, passo){
        let num = 0
        lista=['https://img.icons8.com/?size=512&id=v8RpPQUwv0N8&format=png','https://img.icons8.com/?size=512&id=7gdY5qNXaKC0&format=png','https://img.icons8.com/?size=512&id=PXTY4q2Sq2lG&format=png']
        qnt = lista.length
        const elementos = document.getElementById('par')
        elementos.style.left = `${inicio}px`
        elementos.style.display = 'block'
        let novoInicio = inicio - passo
        while(novoInicio >=fim)
        {
            elementos.style.left = novoInicio + 'px'
            await delay(100);
            novoInicio -= passo
            if(novoInicio<(fim+200))
            {
                novoInicio = inicio
                num+=1
                elementos.src = `${lista[num]}`
                if(num==qnt-1)
                {
                    num=-1
                }
            }
        }
        
    }

    mover(1500,-400,150)