let getHour = document.querySelector('.hour');
let getMinute = document.querySelector('.minute');

let infoBox = document.querySelector('.info-box');
document.querySelector('.click').addEventListener('click', function() {
    infoBox.classList.toggle('h-40');
    document.querySelector('.quote-box').classList.toggle('disp');
});


//show date
let showDate = function() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    getHour.innerHTML = hour;
    getMinute.innerHTML = minute;
    console.log(hour, minute);
}

setInterval(showDate, 300);