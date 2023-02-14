setInterval(setClock, 1000)
setInterval(setDigitalclock,1000)
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
    const  hoursCount = ('0'+time.getHours()).slice(-2);
    const minutesCount = ('0'+time.getMinutes()).slice(-2);
    const secondsCount = ('0'+time.getSeconds()).slice(-2);

    hrs = document.getElementById('hrs').innerHTML=hoursCount
    min = document.getElementById('min').innerHTML=minutesCount
    sec = document.getElementById('sec').innerHTML=secondsCount
  
}

