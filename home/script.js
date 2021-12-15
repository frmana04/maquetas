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

    let unitsNodes = document.querySelectorAll('.prox-carrera__numbers')
    unitsNodes[0].innerHTML = date.days.toString().padStart(2,'0');
    unitsNodes[1].innerHTML = date.hours.toString().padStart(2,'0');
    unitsNodes[2].innerHTML = date.minutes.toString().padStart(2,'0');
    unitsNodes[3].innerHTML = date.seconds.toString().padStart(2,'0');

       
    
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

