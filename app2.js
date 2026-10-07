const form = document.querySelector('#form')
const pais = document.querySelector("#pais")
const boton = document.getElementById("buscar")

boton.addEventListener("click", buscarPaisesAsyncAwait)

function buscarPaisesPromesas(event) {
    event.preventDefault()
    const API = "https://api.restcountries.com/countries/v5/names.common/"
    const API_KEY = "rc_live_06be592cb7fa4f8db7e134e9c570001c"

    fetch(
        'https://api.restcountries.com/countries/v5?q=' + pais.value,
        { headers: { 'Authorization': 'Bearer rc_live_06be592cb7fa4f8db7e134e9c570001c' } }
    )
        .then(function (response) { return response.json(); })
        .then(info => {
            resultado.innerHTML = `
            <p>${info.data.objects[0].capitals[0].name}</p>
            <img src="${info.data.objects[0].flag.url_svg}"/>
        `
        })
        .catch(error => console.log("Error al consultar pais"));
}

async function buscarPaisesAsyncAwait(event) {
    event.preventDefault();
    const API = "https://api.restcountries.com/countries/v5/names.common/"
    const API_KEY = "rc_live_06be592cb7fa4f8db7e134e9c570001c"
    if (!pais.value) return;

    try {
        const response = await fetch(
            API + pais.value, {
            headers: { 'Authorization': 'Bearer ' + API_KEY }
        }
        );

        const info = await response.json()

        resultado.innerHTML = `
            <p>${info.data.objects[0].capitals[0].name}</p>
            <img src="${info.data.objects[0].flag.url_svg}"/>
        `
    } catch (error) {
        console.log(error.message)
    }
}