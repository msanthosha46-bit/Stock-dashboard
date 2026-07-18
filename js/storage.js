window.addEventListener("DOMContentLoaded", loadUserData);
function saveUser(name) {
    localStorage.setItem("username", name);
}
function loadUserData() {
    const user = localStorage.getItem("username");
    if (user) {
        const userName = document.getElementById("userName");
        if (userName) {
            userName.innerText = "Welcome, " + user;
        }
    }
}

function saveTheme(theme) {
    localStorage.setItem("theme", theme);
}

function getTheme() {
    return localStorage.getItem("theme");
}

function saveSession() {
    sessionStorage.setItem("loginStatus", "Logged In");
}

function loadSession() {

    const status = sessionStorage.getItem("loginStatus");
    console.log("Session Status :", status);
}

saveSession();
loadSession();

function savePortfolioData(data) {
    localStorage.setItem(
         "portfolio",
        JSON.stringify(data)
    );
}

function loadPortfolioData() {
    const data = JSON.parse(
        localStorage.getItem("portfolio")
    );
    return data;
}

function clearPortfolio() {
    localStorage.removeItem("portfolio");
}

function saveWatchlist(stocks) {
    localStorage.setItem(
        "watchlist",
        JSON.stringify(stocks)
    );
}

function getWatchlist() {
    return JSON.parse(
        localStorage.getItem("watchlist")
    ) || [];
}

function clearWatchlist() {
        localStorage.removeItem("watchlist");
}

const clearStorageBtn = document.getElementById("clearStorage");
if (clearStorageBtn) {
    clearStorageBtn.addEventListener("click", () => {
        const confirmDelete = confirm(
            "Do you want to clear all saved data?"
        );
        
        if (confirmDelete) {
            localStorage.clear();
            sessionStorage.clear();
            alert("Storage Cleared Successfully!");
            location.reload();
        }
    });
}

console.log("Local Storage");
console.log(localStorage);
console.log("Session Storage");
console.log(sessionStorage);