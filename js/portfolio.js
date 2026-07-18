const buyPrice = document.getElementById("buyPrice");
const currentPrice = document.getElementById("currentPrice");
const quantity = document.getElementById("quantity");
const calculateBtn = document.getElementById("calculateBtn");
const investment = document.getElementById("investment");
const currentValue = document.getElementById("currentValue");
const profitLoss = document.getElementById("profitLoss");

if (calculateBtn) {
    calculateBtn.addEventListener("click", calculatePortfolio);
}

function calculatePortfolio() {
    const buy = Number(buyPrice.value);
    const current = Number(currentPrice.value);
    const qty = Number(quantity.value);

    if (buy <= 0 || current <= 0 || qty <= 0) {
        alert("Please enter valid values.");
        return;
    }

    const totalInvestment = buy * qty;
    const totalCurrent = current * qty;
    const profit = totalCurrent - totalInvestment;

    investment.innerText =
        "Total Investment : ₹" + totalInvestment.toFixed(2);

    currentValue.innerText =
        "Current Value : ₹" + totalCurrent.toFixed(2);

    if (profit >= 0) {
        profitLoss.innerHTML =
            `<span style="color:green;">Profit : ₹${profit.toFixed(2)}</span>`;

    } else {

        profitLoss.innerHTML =
            `<span style="color:red;">Loss : ₹${Math.abs(profit).toFixed(2)}</span>`;

    }
    savePortfolio(totalInvestment, totalCurrent, profit);

}


function savePortfolio(investment, current, profit) {
    const data = {

        investment,
        current,
        profit

    };

    localStorage.setItem(
        "portfolio",
        JSON.stringify(data)

    );

}

window.addEventListener("DOMContentLoaded", () => {
    const data = JSON.parse(
        localStorage.getItem("portfolio")
    );

    if (!data) return;

    investment.innerText =
        "Total Investment : ₹" + data.investment;
    currentValue.innerText =
        "Current Value : ₹" + data.current;
    if (data.profit >= 0) {
        profitLoss.innerHTML =
            `<span style="color:green;">Profit : ₹${data.profit}</span>`;
    } else {
        profitLoss.innerHTML =
            `<span style="color:red;">Loss : ₹${Math.abs(data.profit)}</span>`;
    }
});


const saveBtn = document.getElementById("savePortfolio");
if (saveBtn) {
    saveBtn.addEventListener("click", () => {
        alert("Portfolio Saved Successfully!");
    });

}


function clearCalculator() {
    buyPrice.value = "";
    currentPrice.value = "";
    quantity.value = "";
}

const resetBtn = document.getElementById("resetCalculator");
if (resetBtn) {
    resetBtn.addEventListener("click", clearCalculator);

}

const inputs = document.querySelectorAll("input");
inputs.forEach(input => {

    input.addEventListener("focus", () => {
        input.style.border = "2px solid #0d6efd";
    });

    input.addEventListener("blur", () => {
        input.style.border = "1px solid #ccc";
    });

});


document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        calculatePortfolio();
    }

});

const progress = document.getElementById("progressFill");
if (progress) {
    let width = 0;
    const interval = setInterval(() => {
        if (width >= 75) {
            clearInterval(interval);
        } else {

            width++;
            progress.style.width = width + "%";
            progress.innerText = width + "%";
        }

    }, 20);

}