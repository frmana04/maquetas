let optActive = null;
let idSubmenu = ['opt1','opt2','opt3','opt4'];


function attachEvents(){
    document.querySelector('.header__language').addEventListener('mouseenter',($ev)=>{
        console.log($ev);
        document.querySelector('.header__language-img').src="./assets/images/language-black.png";
    })
    
    document.querySelector('.header__language').addEventListener('mouseleave',()=>{
        if(optActive!='opt4')
        document.querySelector('.header__language-img').src="./assets/images/language.png";
    })

    idSubmenu.forEach(id=>{
        document.querySelector(`#${id}`).addEventListener('mouseleave',()=>{
            if (optActive!=id){
               document.querySelector(`#${id}`).classList.remove('submenu--active');
               document.querySelector(`#${id}`).classList.add('submenu--inactive');
            }
        })

        document.querySelector(`#${id}`).addEventListener('mouseenter',()=>{
            document.querySelector(`#${id}`).classList.remove('submenu--inactive');
            document.querySelector(`#${id}`).classList.add('submenu--active');
        })
    })

}

function setAllInactive(){
    idSubmenu.forEach(id=>{
        
        setInactive(id);
    })
}

function setInactive(id){
    document.querySelector(`#${id}`).dataset.active=false;
    document.querySelector(`#${id}`).querySelector('.header__submenu').style.display="none";
    document.querySelector(`#${id}`).classList.remove('submenu--active');
    document.querySelector(`#${id}`).classList.add('submenu--inactive');
   
    if(id=='opt4')
        document.querySelector('.header__language-img').src="./assets/images/language.png";

  
    optActive=(optActive==id||!optActive)?null:optActive;
}

function setActive(id){
    
    document.querySelector(`#${id}`).dataset.active=true;
    document.querySelector(`#${id}`).querySelector('.header__submenu').style.display="block";
    document.querySelector(`#${id}`).classList.remove('submenu--inactive');
    document.querySelector(`#${id}`).classList.add('submenu--active');
    if(id=='opt4')
    document.querySelector('.header__language-img').src="./assets/images/language-black.png";
    optActive=id;
}



window.addEventListener('click', $ev=>{
    
    let arrayNodes = document.querySelectorAll('.header__option');
    let contains=false;
    arrayNodes.forEach(node=>{
        contains||=node.contains($ev.target);
    })
    
    if (!contains)
        setAllInactive();    
           
  });
  attachEvents()
