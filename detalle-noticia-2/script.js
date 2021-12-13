function startNoticias() {
    document.querySelectorAll('.noticia__galeria').forEach((node, index) => {
        if (index != 0)
            node.style.display = "none";
    })
}

function createSelectors() {
    let numSelectors = document.querySelectorAll('.noticia__img-img').length;
    content = "";
    if (numSelectors > 1) {
        for (let i = 0; i < numSelectors; i++) {
            content += `<span class="noticia__galeria-selector ${i==0?'noticia__galeria-selector-selected':''}" onclick="selectSelector(${i+1})" id="selector-${i+1}"></span>`
        }
        document.querySelector('.noticia__galeria-selectores').innerHTML = content;
    }
}

function selectSelector(number) {
    let nodesNoticia = document.querySelectorAll('.noticia__galeria');
    document.querySelectorAll(".noticia__galeria-selector").forEach((node, index) => {
        node.classList.remove('noticia__galeria-selector-selected')
        if (number == index + 1)
            nodesNoticia[index].style.display = "flex";
        else
            nodesNoticia[index].style.display = "none";
    })
    document.querySelector(`#selector-${number}`).classList.add('noticia__galeria-selector-selected');
}



startNoticias();
createSelectors();