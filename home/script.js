let date = calculateDate([2022, 9, 29, 19, 16, 40]);
    
setTimeText(date);
date.seconds--;
if (date.seconds!=-1 || date.minutes!=0 || date.days!=0 || date.hours!=0)
startTime();

function chronometer() {

    if (date.seconds!=0 || date.minutes!=0 || date.days!=0 || date.hours!=0){
    
    

    if (date.seconds < 0) {
        date.seconds = '59';
        date.minutes--;
    }
    if (date.minutes < 0) {
        date.minutes = '59';
        date.hours--;
    }
    if (date.hours < 0) {
        date.hours = '23';
        date.days--;
    }
    

    setTimeText(date);
    date.seconds--;
}
    else{
         date.seconds=0;
        
         setTimeText(date);
    }
}
function startTime() {
    setInterval(chronometer, 1000)

}

function setTimeText(date){
    chronometerDisplay = document.querySelector(`[data-chronometer]`);
chronometerDisplay.innerHTML =
        `<div class="prox-carrera__unit-container">
            <span class="prox-carrera__numbers">${date.days.toString().padStart(2,'0')}</span>
            <span class="prox-carrera__units">Días</span>
         </div>
         <div class="separator">|</div>
         <div class="prox-carrera__unit-container">
            <span class="prox-carrera__numbers">${date.hours.toString().padStart(2,'0')}</span>
            <span class="prox-carrera__units">Horas</span>
        </div>
        <div class="separator">|</div>
        <div class="prox-carrera__unit-container">
            <span class="prox-carrera__numbers">${date.minutes.toString().padStart(2,'0')}</span>
            <span class="prox-carrera__units">Minutos</span>
        </div>
        <div class="separator">|</div>
        <div class="prox-carrera__unit-container">
            <span class="prox-carrera__numbers">${date.seconds.toString().padStart(2,'0')}</span>
            <span class="prox-carrera__units">Segundos</span>
        </div>`
}
function calculateDate(dateRoad) {
    let today = new Date();
    dateRoad = new Date(dateRoad[0], dateRoad[1], dateRoad[2], dateRoad[3], dateRoad[4], dateRoad[5])
    let seconds = dateRoad.getTime() - today.getTime();


    return {

        days: seconds>=0?parseInt(seconds / (1000 * 3600 * 24)):0,
        hours: seconds>=0?parseInt((seconds / (1000 * 3600)) % 60):0,
        minutes: seconds>=0?parseInt((seconds / (1000 * 60)) % 60):0,
        seconds: seconds>=0?parseInt((seconds / 1000) % 60):0,
    }
}


// [
//     {     // noticia 1
//         imagen:'imagen1',
//         titulo:'titulo1',
//         texto:'texto1',
//         fecha:'fecha1',
//         descr:'descr1',
//         tags:["tag1","tag2","tag3"]
//     },
//     {     // noticia 2

//         imagen:'imagen2',
//         titulo:'titulo2',
//         texto:'texto2',
//         fecha:'fecha2',
//         descr:'descr2',
//         tags:["tag4","tag5","tag6"]
//     },
//     {      // noticia 3
//         imagen:'imagen3',
//         titulo:'titulo3',
//         texto:'texto3',
//         fecha:'fecha3',
//         descr:'descr3',
//         tags:["tag7","tag8","tag9"]
//     }


// ]

// {
//     imagen:['imagen1','imagen2','imagen3'],
//     titulo:['titulo1','titulo2','titulo3'],
//     texto:['texto1','texto2','texto3'],
//     fecha:['fechao1','fechao2','fechao3'],
//     descr:['descr1','descr2','descr3'],
//     tags:[["tag1","tag2","tag3"],["tag4","tag5","tag6"],["tag7","tag8","tag9"]],
    
// }

// let array =[
//     {     // noticia 1
//         imagen:'imagen1',
//         titulo:'titulo1',
//         texto:'texto1',
//         fecha:'fecha1',
//         descr:'descr1',
//         tags:["tag1","tag2","tag3"]
//     },
//     {     // noticia 2

//         imagen:'imagen2',
//         titulo:'titulo2',
//         texto:'texto2',
//         fecha:'fecha2',
//         descr:'descr2',
//         tags:["tag4","tag5","tag6"]
//     },
//     {      // noticia 3
//         imagen:'imagen3',
//         titulo:'titulo3',
//         texto:'texto3',
//         fecha:'fecha3',
//         descr:'descr3',
//         tags:["tag7","tag8","tag9"]
//     }
// ];

// let obj = {}

// array.forEach(el1=>{
// Object.keys(el1).forEach(el2=>{

// if (obj[el2])
// 	obj[el2].push(el1[el2])

// else {
// obj[el2]=[]
// obj[el2].push(el1[el2])
// }

// })
// })

// console.log(obj)