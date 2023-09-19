
function convertPokemonTypesToLi(pokemonTypes){
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonToHtml(pokemon) {
    return `<li class="pokemon">
                <span class="number">${pokemon.order}</span>
                <span class="nome">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                    ${convertPokemonTypesToLi(pokemon.types).join('')}
                    </ol>

                    <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
                </div>
             </li>`
}


pokeApi.getPokemons().then((pokemons = []) => {
    /*const listItems = []
        for (i =0; i<pokemonList.length; i++){
            const pokemon = pokemonList[i];
            listItems.push(convertPokemonToHtml(pokemon))
        }
        $('#pokemonList').append(listItems)
        -this was replaced using map function below*/


        const newList = pokemons.map((pokemon) => {
            return convertPokemonToHtml(pokemon)
        })
        //transform list to string 
        //join('') without ,
        const newHtml = newList.join('')
        $('#pokemonList').append(newHtml)
    })
    .catch(function (error){console.log(error)})