//// funcion para encrintar btoa() y desencriptar atob()
'use strict';

const encrintar = document.querySelector(".boton-1")
const descrintar = document.querySelector(".boton-2")
const texto = document.querySelector(".textarea-1")
const contenedor = document.querySelector(".contenedor-imagen")

encrintar.addEventListener("click", ()=>{
    let encri = btoa(quitarAcento(texto.value.toLowerCase()))
    contenedor.innerHTML = `
    
    <p>${encri}</p>
    
    `
    console.log(encri)
})
descrintar.addEventListener("click", ()=>{
    let encri = atob(texto.value)
    contenedor.innerHTML = `

    <p>${encri}</p>
    
    `
    console.log(encri)
    console.log(atob(texto.value))
})

const quitarAcento =(string)=>{
    string = string.normalize("NFD").replace(/[^a-zA-Z0-9]/g, " ");
    return string
}

console.log(contenedor)