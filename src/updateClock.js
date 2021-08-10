const hour_hand = document.querySelector("#hour-hand");
const minute_hand = document.querySelector("#minute-hand");
const second_hand = document.querySelector("#second-hand");
setInterval(updateClock, 1000);
function updateClock(){
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;
    hour_hand.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    minute_hand.style.transform = `rotateZ(${mm}deg)`;
    second_hand.style.transform = `rotateZ(${ss}deg)`;
}