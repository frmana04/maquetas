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
