setInterval(setClock, 1000)
//elements
const hour = document.querySelector('[data-hour]');
const minute = document.querySelector('[data-minute]');
const second = document.querySelector('[data-second]');


function setClock() {
    //time ratios
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

    setRotation(minute, minutesRatio);
    setRotation(hour, hoursRatio);
    setRotation(second,secondsRatio );
    
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}


//digital

function setDigitalclock(){
    const time= new Date()
    const hoursCount=time.getHours()
    const minutesCount=time.getMinutes()
    const secondsCount=time.getSeconds()

    hours = document.getElementById('hours').innerHTML=hoursCount
    minutes = document.getElementById('minutes').innerHTML=minutesCount
    seconds = document.getElementById('seconds').innerHTML=secondsCount
   

}



setInterval(setDigitalclock,1000)