function updateClock() {
    const clock = document.getElementById("clock");
    if (!clock) return;
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    clock.innerText = `${hours}:${minutes}:${seconds}`;

}

setInterval(updateClock, 1000);
updateClock();

function updateCountdown() {

    const countdown = document.getElementById("countdown");
    if (!countdown) return;
    const now = new Date();
    const closingTime = new Date();

    closingTime.setHours(15);
    closingTime.setMinutes(30);
    closingTime.setSeconds(0);
    let difference = closingTime - now;
    if (difference <= 0) {
        countdown.innerText = "Market Closed";
        return;

    }

    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    countdown.innerText =
        `${String(hours).padStart(2, "0")}:` +
        `${String(minutes).padStart(2, "0")}:` +
        `${String(seconds).padStart(2, "0")}`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

function greeting() {

    const hero = document.querySelector(".hero h1");
    if (!hero) return;
    const hour = new Date().getHours();
    if (hour < 12) {
        hero.innerText = "🌞 Good Morning Investor";
    }
    else if (hour < 17) {
        hero.innerText = "☀️ Good Afternoon Investor";
    }
    else {
        hero.innerText = "🌙 Good Evening Investor";
    }
}

greeting();

function marketStatus() {

    const status = document.getElementById("marketStatus");
    if (!status) return;
    const hour = new Date().getHours();
    if (hour >= 9 && hour < 15) {
        status.innerText = "🟢 MARKET OPEN";
        status.style.color = "green";
    }

    else {
        status.innerText = "🔴 MARKET CLOSED";
        status.style.color = "red";
    }
}

marketStatus();
function showDate() {
    const dateBox = document.getElementById("todayDate");
    if (!dateBox) return;
    const today = new Date();
    dateBox.innerText = today.toDateString();
}
showDate();