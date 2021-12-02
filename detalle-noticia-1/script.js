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
    if(document.querySelector('.modal').querySelector('.galeria__text-img'))
        document.querySelector('.modal').querySelector('.galeria__text-img').innerHTML="";
    
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

function setGalleryDisposition(){

    if(document.documentElement.clientWidth > 500 ){
    
    
    let numImages = document.querySelectorAll('.item-any').length;
    if (numImages!=9){
        document.querySelector('.galeria__grid').style.display="flex";
        document.querySelector('.galeria__grid').style.flexWrap="wrap";
        document.querySelector('.galeria__grid').style.columnGap="0";
        document.querySelector('.galeria__grid').style.justifyContent="space-evenly";
        document.querySelectorAll('.item-any').forEach(node=>{
            
            if (document.documentElement.clientWidth > 768)
            node.style.width="24.7%";
          
            else
            node.style.width="33.2%";
        })
    }
    }
    else {
        let numNodes=document.querySelectorAll('.item-any').length;
        document.querySelectorAll('.item-any').forEach((node,index)=>{
           
            node.style.gridArea="item"+(index+1);
            if ((index+1)%3-1==0 || (numNodes%3>0&&numNodes-index<2 )){
                    node.querySelector('.display--DK').classList.remove('display--DK');
                    node.querySelector('.display--MB').style.display="none";
            }
        })
    }
}

function createSelectors(){
    let numSelectors = Math.ceil(document.querySelectorAll('.item-any').length/3);
    content="";
    if(numSelectors>1)
    for(let i=0;i<numSelectors;i++){
        content+=`<span class="galeria__selector ${i==0?'selector-selected':''}" onclick="selectSelector(${i+1})" id="selector-${i+1}"></span>`
    }

    document.querySelector('.galeria__selectores').innerHTML=content;
}

function selectSelector(group){
    document.querySelectorAll(".galeria__selector").forEach(node=>{
        node.classList.remove('selector-selected')
    })
    document.querySelector(`#selector-${group}`).classList.add('selector-selected');
    generateGridTemplate(group);
}

function generateGridTemplate(group){
    if(document.documentElement.clientWidth <= 500 ){
    let numNodes=document.querySelectorAll('.item-any').length;
    let numSelectors = Math.ceil(document.querySelectorAll('.item-any').length/3);
    id1=group*3-2;
    id2=group*3-1;
    id3=group*3;
    if(numNodes%3==2 && numSelectors==group )
        id3=id2;
    if(numNodes%3==1 && numSelectors==group ){
        id3=id1;
        id2=id1;
    }
    document.querySelector('.galeria__grid').style.gridTemplateAreas=' "  item'+id1+' item'+id1+'   " "   item'+id2+' item'+id3+'  " ';
}}

addEvents();
setGalleryDisposition();
createSelectors();
generateGridTemplate(1);