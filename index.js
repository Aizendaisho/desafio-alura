// objetos de encriptado
const ENCRYPT_MAPPINGS = [
    { from: "e", to: "enter" },
    { from: "i", to: "imes" },
    { from: "a", to: "ai" },
    { from: "o", to: "ober" },
    { from: "u", to: "ufat" },
  ];
// objetos desencritados
  const DECRYPT_MAPPINGS = [
    { from: "enter", to: "e" },
    { from: "imes", to: "i" },
    { from: "ai", to: "a" },
    { from: "ober", to: "o" },
    { from: "ufat", to: "u" },
  ];
  
//funcion para remover acentos
  const removeAccents = (string) => {
        string = string.normalize("NFD").replace(/[^a-zA-Z0-9]/g, " ");
    return string
  };
//logica del boton copiar

  const copyText = (text) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Texto copiado al portapapeles");
  };
  
// logica del encriptado
  const encrypt = (text) => {
    let encrypted = removeAccents(text.toLowerCase());
    ENCRYPT_MAPPINGS.forEach((mapping) => {
      encrypted = encrypted.replace(new RegExp(mapping.from, "img"), mapping.to);
    });
    return encrypted;
  };
  
//logica del desencriptado
  const decrypt = (text) => {
    let decrypted = removeAccents(text.toLowerCase());
    DECRYPT_MAPPINGS.forEach((mapping) => {
      decrypted = decrypted.replace(new RegExp(mapping.from, "img"), mapping.to);
    });
    return decrypted;
  };
  
  //Creacion de las constantes
  const encrintar = document.querySelector(".boton-1");
  const descrintar = document.querySelector(".boton-2");
  const texto = document.querySelector(".textarea-1");
  const contenedor = document.querySelector(".contenedor-imagen");
  const textArea = document.createElement("textarea");
  const buttonCopiar = document.createElement("button");
  const contenedorEncriptado = document.createElement("div");
  
  //Modificacion de las constantes
  textArea.classList.add("textArea-generado");
  buttonCopiar.innerHTML = "Copiar";
  buttonCopiar.classList.add("boton-copia");
  contenedorEncriptado.classList.add("contenedor-encriptado");
  contenedorEncriptado.appendChild(textArea);
  contenedorEncriptado.appendChild(buttonCopiar);
  textArea.id = "texto";
  textArea.cols = 30;
  textArea.rows = 10;
  
  //Addevent del boton copiar
  buttonCopiar.addEventListener("click", () => {
    copyText(textArea.value);
  });
  
  //Addevent del encriptado 
  encrintar.addEventListener("click", () => {
    console.log(texto)
    const encrypted = encrypt(texto.value)
    console.log(encrypted);
    textArea.innerHTML = encrypted
    contenedor.innerHTML= ""
    contenedor.appendChild(contenedorEncriptado);
    
  
  })

  //Addevent del desencriptado
  descrintar.addEventListener("click", () => {
    console.log(texto)
    const encrypted = decrypt(texto.value)
    console.log(encrypted);
    textArea.innerHTML = encrypted
    contenedor.innerHTML= ""
    contenedor.appendChild(contenedorEncriptado);
    
  
  })

