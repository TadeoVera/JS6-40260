/* Se quiere simular un Formulario, el cual pide al usuario ingresar sus datos.
El algoritmo filtrará los mismos para indicarle que sus datos corresponden o no con la petición.*/

let contenedor = document.getElementById("contenedor"); //utilizando el método dom y guardando variables para un posterior uso
let miFormulario = document.getElementById("formulario");

let funcionEnviado = function enviado() {               //Función para indicar que se enviaron los datos
    
contenedor.innerHTML = "";
let div = document.createElement("div");
div.innerHTML = "Enviado";
div.className = "verde";

contenedor.append(div);
    
}

miFormulario.addEventListener("submit", (e) => {        //Se añade un addEventListener para que al ser apretado el botón enviar,-
    e.preventDefault();                                 //-se ejecute una funcion que llama a todos los elementos ingresados en el formulario.-
                                                        //También se ejecutará una función para que no se recargue la página al enviar el formulario.
    let inputs = e.target.children
    if(inputs[0].value == ""){                          //Control de flujo para indicar si los datos ingresados son correctos o no.-
        contenedor.innerHTML = "";                      //En caso de serlos en la pagina se mostrara un Enviado.-
        let div = document.createElement("div");
        div.innerHTML = "Nombre Incorrecto";
        div.className = "rojo";
        
        contenedor.append(div);
        
        } 
    else if (!inputs[0].value == "") {
        contenedor.innerHTML = "";
        if (!inputs[1].value.includes("@")){
            contenedor.innerHTML = "";
            let div = document.createElement("div");
            div.innerHTML = "Correo Incorrecto";
            div.className = "rojo";
            
            contenedor.append(div);
    } else if (inputs[1].value.includes("@")) {
        contenedor.innerHTML = "";
        
        if (inputs[2].value == "") {
            contenedor.innerHTML = "";
            let div = document.createElement("div");
            div.innerHTML = "Edad Incorrecta";
            div.className = "rojo";

            contenedor.append(div);
    } else {
        funcionEnviado()
    }
    }
    }
})