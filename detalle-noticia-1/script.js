function addEvents(){
    document.querySelector('.galeria__grid').querySelectorAll('div').forEach(node=>{
        node.addEventListener('click',($ev)=>{
            openImage($ev.target);
        })
    })
}

function openImage(node){
    let video = node.parentNode.dataset.video; 
    let content = `
    <div class="modal-contenido">
      
    <img class="modal__close-img" src="./assets/images/close.png" onclick="closeImage()">
    <div id="openVideo">
    ${node.parentNode.innerHTML}
    </div>
 
</div>  `

    
    document.querySelector(`.modal`).innerHTML=content;
    document.querySelector(`.modal`).style.display="flex";
    addEventOpenVideo(video);
   
}

function addEventOpenVideo(video){

    if (video)
        document.querySelector('#openVideo').addEventListener('click',()=>{
            document.querySelector('#openVideo').innerHTML = `
            <iframe class="iframe-video" allow="autoplay"
            src="https://www.youtube.com/embed/${video}?rel=0&amp;autoplay=1&mute=0">
                </iframe>
            `
        })

  
}

function closeImage(){

    document.querySelector(`.modal`).innerHTML="";
    document.querySelector(`.modal`).style.display="none";
}



addEvents()