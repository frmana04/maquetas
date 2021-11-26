function toggleMostrar(id) {

    let node = document.querySelector(`#${id}`);
    if (node.dataset.state == "open") 
        ocultarDatos(id);
     else 
        mostrarDatos(id);
}

function mostrarDatos(id) {
        let node = document.querySelector(`#${id}`);

        node.querySelector('.ficha-tecnica__lista-parejas').style.display = "block";
        node.querySelector('.ficha__mostrar-texto').innerHTML = "Ocultar detalles";
        node.querySelector('.ficha__mostrar-arrow').style.transform = "rotate(270deg)";
        node.dataset.state = "open";

        if (id == "ficha-tecnica__especificaciones") {

            document.querySelector('.ficha-tecnica').style.backgroundImage = "url(./assets/images/Textura@2x.png)"
            document.querySelector('.ficha-tecnica').style.backgroundColor = ""
        }
    
}

function ocultarDatos(id) {
        let node = document.querySelector(`#${id}`);

        node.querySelector('.ficha-tecnica__lista-parejas').style.display = "none";
        node.querySelector('.ficha__mostrar-texto').innerHTML = "Mostrar detalles";
        node.querySelector('.ficha__mostrar-arrow').style.transform = "rotate(90deg)";
        node.dataset.state = "close";

        if (id == "ficha-tecnica__especificaciones") {
            
            document.querySelector('.ficha-tecnica').style.backgroundImage = ""
            document.querySelector('.ficha-tecnica').style.backgroundColor = "#F8F8F8"
        }
    
}

mostrarDatos("ficha-tecnica__especificaciones");
