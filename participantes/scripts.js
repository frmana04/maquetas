

function toggleMostrar(id){

    let node = document.querySelector(`#${id}`);
    if (node.dataset.state=="open"){

        node.querySelector('.equipo__pilotos').style.display="none";

        if (document.documentElement.clientWidth > 768){
        node.querySelector('.equipo__mostrar-texto').style.display="block";
        node.querySelector('.equipo__ocultar-texto').style.display="none";
        }
        node.querySelector('.equipo__mostrar-arrow').style.transform = "rotate(90deg)";
        node.dataset.state="close";
    }
    else{
        node.querySelector('.equipo__pilotos').style.display="grid";
        
        if (document.documentElement.clientWidth > 768){
        node.querySelector('.equipo__mostrar-texto').style.display="none";
        node.querySelector('.equipo__ocultar-texto').style.display="block";
        }
        node.querySelector('.equipo__mostrar-arrow').style.transform = "rotate(270deg)";
        node.dataset.state="open";
    }
   

}
toggleMostrar('equipo-1');