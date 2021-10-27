let optActive = null;
let stateMenuMB = "closed";
let device = document.documentElement.clientWidth <= 650 ? "MB" : "DK";

let menuObject = {
    idSelected: null,
    options: [{
            id: "opt1",
            name: "Campeonato",
            ico: false,
            subOptions: [{
                    name: "Calendario",
                    url: "#"
                },
                {
                    name: "Participantes",
                    url: "#"
                },
                {
                    name: "Clasificación y Resultados",
                    url: "#"
                }
            ]
        },
        {
            id: "opt2",
            name: "Sobre Gazoo Racing Iberian Cup",
            ico: false,
            subOptions: [{
                    name: "Reglamento",
                    url: "#"
                },
                {
                    name: "Inscripción",
                    url: "#"
                },
                {
                    name: "Calendario",
                    url: "#"
                },
                {
                    name: "Noticias",
                    url: "#"
                },
                {
                    name: "Contacto",
                    url: "#"
                }
            ]
        },
        {
            id: "opt3",
            name: "Toyota Gazoo Racing",
            ico: false,
            subOptions: [{
                    name: "Gama GR",
                    url: "#"
                },
                {
                    name: "Gama GR Sport",
                    url: "#"
                },
                {
                    name: "Merchandising",
                    url: "#"
                },

            ]
        },
        {
            id: "opt4",
            name: "Español",
            ico: true,
            nameIco: "language.png",
            subOptions: [{
                    name: "Español",
                    url: "#"
                },
                {
                    name: "Inglés",
                    url: "#"
                },
                {
                    name: "Portugués",
                    url: "#"
                },

            ]
        },
    ]
}

function createMenu() {

    let htmlText = "";

    menuObject.options.forEach((option, index) => {
        htmlText += `
        <div class="header__option header__language" id="${option.id}" onclick="${device=='DK'?'setAllInactive()':''};setActive('opt${index+1}')" data-active="false">
        ${device=='MB'?'<div class="header__arrow-container-left"><img class="header__arrow-img" src="assets/images/arrow_left.png"></div>':""}
        ${option.ico?`<img class="header__language-img" src="assets/images/${option.nameIco}">`:""}
      
        <span class="header__text">${option.name}</span>${device=='MB'?'<div class="header__arrow-container-right"><img class="header__arrow-img" src="assets/images/arrow_right.png"></div>':""}
        <div class="header__submenu submenu--inactive">
        ${option.subOptions.map(subOption=>{
            return(`<a href="${subOption.url}"><div class="header__submenu-opt"><span class="header__submenu-text">${subOption.name}</span><div class="header__arrow-container-right"><img class="header__arrow-img" src="assets/images/arrow_right.png"></div></div></a>`)
        }).join("")}    
        </div>
    </div>
    `
        document.querySelector('.header__options').innerHTML = htmlText;
    });
}



function attachEvents() {
    if (device == "DK") {
        document.querySelector('#opt4').addEventListener('mouseenter', () => {

            document.querySelector('.header__language-img').src = "./assets/images/language-black.png";
        });

        document.querySelector('#opt4').addEventListener('mouseleave', () => {

            if (optActive != "opt4")
                document.querySelector('.header__language-img').src = "./assets/images/language.png";
        });

        menuObject.options.forEach(option => {
            document.querySelector(`#${option.id}`).addEventListener('mouseleave', () => {
                if (optActive != `${option.id}`) {
                    document.querySelector(`#${option.id}`).classList.remove('submenu--active');
                    document.querySelector(`#${option.id}`).classList.add('submenu--inactive');
                }
            });

            document.querySelector(`#${option.id}`).addEventListener('mouseenter', () => {
                document.querySelector(`#${option.id}`).classList.remove('submenu--inactive');
                document.querySelector(`#${option.id}`).classList.add('submenu--active');
            });
        });

        window.addEventListener('click', $ev => {

            let arrayNodes = document.querySelectorAll('.header__option');
            let contains = false;
            arrayNodes.forEach(node => {
                contains ||= node.contains($ev.target);
            })

            if (!contains)
                setAllInactive();

        });
    }
}

function setAllInactive() {
  
        menuObject.options.forEach(option => {

            setInactive(`${option.id}`);
        });
    
}

function setInactive(id) {


    document.querySelector(`#${id}`).dataset.active = false;
    document.querySelector(`#${id}`).querySelector('.header__submenu').style.display = "none";
    document.querySelector(`#${id}`).classList.remove('submenu--active');
    document.querySelector(`#${id}`).classList.add('submenu--inactive');

    if (device=="MB"){

        document.querySelector(`#${id}`).querySelector('.header__arrow-container-left').style.display="none";
        document.querySelector(`#${id}`).querySelector('.header__arrow-container-right').style.display="flex";
        menuObject.options.forEach(option=>{
           
             document.querySelector(`#${option.id}`).style.display="flex";
            
         })
        }
    

    if (id == 'opt4')
        document.querySelector('.header__language-img').src = "./assets/images/language.png";


    optActive = (optActive == id || !optActive) ? null : optActive;
}

function setActive(id) {

   
       
        if(device=="DK"){
            document.querySelector(`#${id}`).dataset.active = true;
            document.querySelector(`#${id}`).querySelector('.header__submenu').style.display = "block";
            document.querySelector(`#${id}`).classList.remove('submenu--inactive');
            document.querySelector(`#${id}`).classList.add('submenu--active');        
            if (id == 'opt4')
                document.querySelector('.header__language-img').src = "./assets/images/language-black.png";
            optActive = id;
        }
      
     
    

    if (device == "MB") {
        if(optActive==id){
           setInactive(id);
        }
        else{

            document.querySelector(`#${id}`).dataset.active = true;
            document.querySelector(`#${id}`).querySelector('.header__submenu').style.display = "block";
            document.querySelector(`#${id}`).querySelector('.header__arrow-container-left').style.display="block";
            document.querySelector(`#${id}`).querySelector('.header__arrow-container-right').style.display="none";
            menuObject.options.forEach(option=>{
                if (id !=option.id){
                 document.querySelector(`#${option.id}`).style.display="none";
                }
             })
            optActive = id;
        }
      
    
    }
   
}

function toggleMenuMB() {
    if (stateMenuMB == 'closed') {
        document.querySelector('.header__options').style.display = "flex";
        document.querySelector('.header__burger').src = "./assets/images/close.png"
        stateMenuMB = 'opened';
    } else if (stateMenuMB == 'opened') {
        document.querySelector('.header__options').style.display = "none";
        document.querySelector('.header__burger').src = "./assets/images/ico-menu-mobile.png"
        stateMenuMB = 'closed';
        setAllInactive();
        menuObject.options.forEach(option=>{
            
             document.querySelector(`#${option.id}`).style.display="flex";
            
         })
    }

}



createMenu();
attachEvents();