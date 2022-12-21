//// funcion para encrintar btoa() y desencriptar atob()
'use strict';

const encrintar = document.querySelector(".boton-1")
const descrintar = document.querySelector(".boton-2")
const texto = document.querySelector(".textarea-1")
const contenedor = document.querySelector(".contenedor-imagen")

encrintar.addEventListener("click", ()=>{
    let encri = quitarAcento(texto.value.toLowerCase())
    encri = encri.replace(/e/img,"enter")
    encri = encri.replace(/i/img,"imes")
    encri = encri.replace(/a/img,"ai")
    encri = encri.replace(/o/img,"ober")
    encri = encri.replace(/u/img,"ufat")
    contenedor.innerHTML = `
    
    <p>${encri}</p>
    
    `;
    console.log(encri)
 
})
descrintar.addEventListener("click", ()=>{
    let encri =  quitarAcento(texto.value.toLowerCase())
    encri = encri.replace(/enter/img,"e")
    encri = encri.replace(/imes/img,"i")
    encri = encri.replace(/ai/img,"a")
    encri = encri.replace(/ober/img,"o")
    encri = encri.replace(/ufat/img,"u")
    contenedor.innerHTML = `

    <p>${encri}</p>
    
    `;

})

const quitarAcento =(string)=>{
    string = string.normalize("NFD").replace(/[^a-zA-Z0-9]/g, " ");
    return string
}

// const remplazo= (string, letra, frase) =>{
//     const vari = `/${letra}/img`
//     let encri = string
//     console.log(vari)
//     console.log(frase)
//     return encri = encri.replace(vari,`${frase}`)

// }

