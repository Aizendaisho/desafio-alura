//// funcion para encrintar btoa() y desencriptar atob()
'use strict';

const encrintar = document.querySelector(".boton-1")
const descrintar = document.querySelector(".boton-2")
const texto = document.querySelector(".textarea-1")

encrintar.addEventListener("click", ()=>{
    let encri = btoa(quitarAcento(texto.value.toLowerCase()))
    console.log(encri)
})
descrintar.addEventListener("click", ()=>{
    console.log(atob(texto.value))
    let encri = atob(texto.value)
    console.log(encri)
})

const quitarAcento =(string)=>{
    string = string.normalize("NFD").replace(/[^a-zA-Z0-9]/g, " ");
    return string
}