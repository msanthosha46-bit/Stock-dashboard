const watchlist = document.getElementById("watchlist");
const watchButtons = document.querySelectorAll(".watchBtn");
window.addEventListener("DOMContentLoaded", loadWatchlist);

watchButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const stockCard = button.parentElement;
        const stockName =
            stockCard.querySelector("h3").textContent;
        addToWatchlist(stockName);
    });
});

function addToWatchlist(stockName) {
    if (!watchlist) return;
    const li = document.createElement("li");
    li.innerHTML = `
        ${stockName}
        <button class="removeBtn">Remove</button>
    `;
    watchlist.appendChild(li)
    saveStock(stockName);
    showWatchlistToast(`${stockName} Added`);
    const removeBtn = li.querySelector(".removeBtn");
    removeBtn.addEventListener("click", () => {
        li.remove();
        removeStock(stockName);
        showWatchlistToast(`${stockName} Removed`);
    });
}

function saveStock(stockName) {
    let stocks =
        JSON.parse(localStorage.getItem("watchlist")) || [];
    if (!stocks.includes(stockName)) {
        stocks.push(stockName);
    }

    localStorage.setItem(
        "watchlist",
        JSON.stringify(stocks)
    );

}

function loadWatchlist() {
    let stocks =
        JSON.parse(localStorage.getItem("watchlist")) || [];
    stocks.forEach((stock) => {
        if (!watchlist) return;
        const li = document.createElement("li");
        li.innerHTML = `
            ${stock}
            <button class="removeBtn">Remove</button>
        `;
        watchlist.appendChild(li);
        const removeBtn =
            li.querySelector(".removeBtn");
        removeBtn.addEventListener("click", () => {
            li.remove();
            removeStock(stock);
        });
    });
}

function removeStock(stockName) {
    let stocks =
        JSON.parse(localStorage.getItem("watchlist")) || [];
    stocks = stocks.filter(
        stock => stock !== stockName
    );
    localStorage.setItem(
        "watchlist",
        JSON.stringify(stocks)
    );
}

function showWatchlistToast(message) {
    const toast =
        document.getElementById("toast");
    if (!toast) return;
    toast.textContent = message;
    toast.style.display = "block";
    setTimeout(() => {
        toast.style.display = "none";
    }, 3000);
}

const clearBtn =
    document.getElementById("clearWatchlist");
if (clearBtn) {
    clearBtn.addEventListener("click", () => {
        localStorage.removeItem("watchlist");
        watchlist.innerHTML = "";
        showWatchlistToast(
            "Watchlist Cleared"
        );
    });
}