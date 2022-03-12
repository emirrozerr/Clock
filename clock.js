let fullName = prompt("Adınız Nedir?");
let myName = document.querySelector("#myName")

myName.innerHTML = fullName


let currentDate = document.querySelector("#myClock")

var today = new Date();
let day = today.getDay()


switch(day){
    case 1:
        day="Pazartesi"
        break;
    case 2:
        day="Salı"
        break;
    case 3:
        day="Çarşamba"
        break;
    case 4:
        day="Perşembe"
        break;
    case 5:
        day="Cuma"
        break;
    case 6:
        day="Cumartesi"
        break;
    case 7:
        day="Pazar"
        break;
}

var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + " " + day;

currentDate.innerHTML = time