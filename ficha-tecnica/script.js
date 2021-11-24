function toggleMostrar(id){

    let node = document.querySelector(`#${id}`);
    if (node.dataset.state=="open"){

        node.querySelector('.equipo__pilotos').style.display="none";
        node.querySelector('.equipo__mostrar-texto').innerHTML="Mostrar detalles";
        node.querySelector('.equipo__mostrar-arrow').style.transform = "rotate(90deg)";
        node.dataset.state="close";
    }
    else{
        node.querySelector('.equipo__pilotos').style.display="grid";
        node.querySelector('.equipo__mostrar-texto').innerHTML="Ocultar detalles";
        node.querySelector('.equipo__mostrar-arrow').style.transform = "rotate(270deg)";
        node.dataset.state="open";
    }
   

}