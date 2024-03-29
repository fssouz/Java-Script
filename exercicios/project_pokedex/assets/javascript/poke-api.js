const pokeApi = {}
//default (offset = 0, limit = 10)
pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
    .then(pokemon.url).then((response) => response.json())
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .catch(function (error){console.log(error)})
}

