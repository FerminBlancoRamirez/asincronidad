//callbacks(x), promesas(then), async/await


//console.log("inicio")

//setTimeout(() => console.log("Ejecute la accion"), 2000); //callbacks

//console.log("otras acciones")

//console.log("fin")

//inicio -> otras acciones -> fin            --> Ejecuta la accion

const input = document.getElementById("nombre")
const boton = document.getElementById("buscar")
const resultado = document.getElementById("resultado")

boton.addEventListener("click", buscarPokemonPromesas)

async function buscarPokemonAsyncAwait() {
    const nombre = input.value.toLowerCase()
    if (!nombre) return
    const url = "https://pokeapi.co/api/v2/pokemon/"
    const response = await fetch(url + nombre)
    const pokemon = await response.json()
    resultado.innerHTML = `
                <h2>${pokemon.name}</h2>
                <h3>${pokemon.weight/10} kg</h3>
                <img src="${pokemon.sprites.front_default}" />
            `
}

//callbacks, promesas(then), async/await
function buscarPokemonPromesas() {
    //nombre vacio = fallo SOLUCIONAR
    const nombre = input.value.toLowerCase()
    if (!nombre) return
    const url = "https://pokeapi.co/api/v2/pokemon/"
    //const datosPokemon=fetch(url+nombre)
    //pintoDatos_web(datosPokemon)

    fetch(url + nombre)
        .then((response) => response.json())
        .then(pokemon => {
            resultado.innerHTML = `
                <h2>${pokemon.name}</h2>
                <h3>${pokemon.weight/10} kg</h3>
                <img src="${pokemon.sprites.front_default}" />
            `})
}