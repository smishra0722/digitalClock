window.onload = function() {
    let getHour = document.querySelector('.hour');
    let getMinute = document.querySelector('.minute');
    let container = document.querySelector('.container');




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
        if (hour < 10) {
            getHour.innerHTML = '0' + hour;
        } else {
            getHour.innerHTML = hour;
        }
        if (minute < 10) {
            getMinute.innerHTML = '0' + minute;
        } else {
            getMinute.innerHTML = minute;
        }
        
        
        setGreetings(hour, minute);
    }

    let setGreetings = function(hour, minute) {
        let timeStamp = document.querySelector('.time-stamp');
        if(hour >=4 && hour < 12) {
            timeStamp.innerHTML = "Good Morning";
            container.style.backgroundImage = "url('images/morning.jpg')";
        } else if(hour >= 12 && hour < 17) {
            timeStamp.innerHTML = "Good Afternoon";
            container.style.backgroundImage = "url('images/afternoon.jpg')";
        } else if(hour >= 17 && hour < 20) {
            timeStamp.innerHTML = "Good Evening";
            container.style.backgroundImage = "url('images/evening.jpg')";

        } else {
            timeStamp.innerHTML = "Good Night";
            container.style.backgroundImage = "url('images/night.jpg')";
        }
    };
    setInterval(showDate, 300);
};

/* let setGreetings = function(hour, minute) {
    let timeStamp = document.querySelector('.time-stamp');
    if(hour >=4 && hour < 12) {
        console.log('HIi');
    } else if(hour >= 12 && hour < 17) {
        console.log('Hello');
    } else if(hour >= 17 && hour < 20) {
        console.log('Mello');

    } else {
        console.log('Jello');
    }
}; */

/* timeStamp.innerHTML = "Good Morning";
        container.style.backgroundImage = "url('../images/morning.jpg')";
*/

