function toggleMostrar(id) {

    let node = document.querySelector(`#${id}`);
    if (node.dataset.state == "open") 
        ocultarDatos(id);
     else 
        mostrarDatos(id);
}

function mostrarDatos(id) {
        let node = document.querySelector(`#${id}`);

        node.querySelector('.listas-parejas').style.display = "block";
        node.querySelector('.ficha__mostrar-texto').style.display = "none";
        node.querySelector('.ficha__ocultar-texto').style.display = "initial";
        node.querySelector('.ficha__mostrar-arrow').style.transform = "rotate(270deg)";
        node.dataset.state = "open";

        if (id == "ficha-tecnica__especificaciones") {

            document.querySelector('.ficha-tecnica').style.backgroundImage = "url(./assets/images/Textura@2x.png)";
            document.querySelector('.ficha-tecnica').style.backgroundColor = "";
            document.querySelector('.ficha-tecnica__title').style.marginBottom="38px";
        }
    
}

function ocultarDatos(id) {
        let node = document.querySelector(`#${id}`);

        node.querySelector('.listas-parejas').style.display = "none";
        node.querySelector('.ficha__mostrar-texto').style.display = "initial";
        node.querySelector('.ficha__ocultar-texto').style.display = "none";
        node.querySelector('.ficha__mostrar-arrow').style.transform = "rotate(90deg)";
        node.dataset.state = "close";

        if (id == "ficha-tecnica__especificaciones") {
            
            document.querySelector('.ficha-tecnica').style.backgroundImage = "";
            document.querySelector('.ficha-tecnica').style.backgroundColor = "#F8F8F8";
            document.querySelector('.ficha-tecnica__title').style.marginBottom="0";
        }
    
}



function setHeights(){
    if (document.documentElement.clientWidth > 768) {
document.querySelectorAll('.componente__pareja').forEach(node =>{
    node.style.height = node.querySelector('.componente__img').height+ "px"; })
}
}

function addEvents(){
    document.querySelector('.galeria__grid-DK').querySelectorAll('div').forEach(node=>{
        node.addEventListener('click',($ev)=>{
            openImage($ev.target.src);
        })
    })
}

function openImage(src){
    document.querySelector(`.image-open`).src=src;
    
    document.querySelector(`.modal`).style.display="flex";
}

function closeImage(){
    document.querySelector(`.modal`).style.display="none";
}

function startImagesGaleria() {
    document.querySelectorAll('.image__galeria').forEach((node, index) => {
        if (index != 0)
            node.style.display = "none";
    })
}

function createSelectors() {
    let numSelectors = document.querySelectorAll('.image__galeria').length;
    content = "";
    if (numSelectors > 1) {
        for (let i = 0; i < numSelectors; i++) {
            content += `<span class="image__galeria-selector ${i==0?'image__galeria-selector-selected':''}" onclick="selectSelector(${i+1})" id="selector-${i+1}"></span>`
        }
        document.querySelector('.image__galeria-selectores').innerHTML = content;
    }
}

function selectSelector(number) {
    let nodesNoticia = document.querySelectorAll('.image__galeria');
    document.querySelectorAll(".image__galeria-selector").forEach((node, index) => {
        node.classList.remove('image__galeria-selector-selected')
        if (number == index + 1)
            nodesNoticia[index].style.display = "flex";
        else
            nodesNoticia[index].style.display = "none";
    })
    document.querySelector(`#selector-${number}`).classList.add('image__galeria-selector-selected');
}


if (document.documentElement.clientWidth <= 768) {

startImagesGaleria();
createSelectors();
}
mostrarDatos("ficha-tecnica__especificaciones");
mostrarDatos("ficha-tecnica__componentes");

window.onload=()=>{
    setHeights();
}



addEvents()