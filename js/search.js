// ===============================
// search.js
// Live Stock Search
// ===============================

// Get Search Input
const searchInput = document.getElementById("searchInput");

// Get All Stock Cards
const stockCards = document.querySelectorAll(".stock-card");

// Live Search
if (searchInput) {

    searchInput.addEventListener("input", function () {

        const value = searchInput.value.toLowerCase();

        stockCards.forEach((card) => {

            const company = card.querySelector("h3").textContent.toLowerCase();

            if (company.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}

// ===============================
// Search Box Focus
// ===============================

if (searchInput) {

    searchInput.addEventListener("focus", () => {

        searchInput.style.border = "2px solid #0d6efd";
        searchInput.style.background = "#eef5ff";

    });

}

// ===============================
// Search Box Blur
// ===============================

if (searchInput) {

    searchInput.addEventListener("blur", () => {

        searchInput.style.border = "1px solid #ccc";
        searchInput.style.background = "#ffffff";

    });

}

// ===============================
// Keyboard Events
// ===============================

if (searchInput) {

    searchInput.addEventListener("keydown", (event) => {

        console.log("Key Down :", event.key);

    });

    searchInput.addEventListener("keyup", (event) => {

        console.log("Key Up :", event.key);

    });

    searchInput.addEventListener("keypress", (event) => {

        console.log("Key Press :", event.key);

    });

}

// ===============================
// Double Click Clears Search
// ===============================

if (searchInput) {

    searchInput.addEventListener("dblclick", () => {

        searchInput.value = "";

        stockCards.forEach((card) => {

            card.style.display = "block";

        });

    });

}

// ===============================
// Search Counter
// ===============================

const resultCount = document.getElementById("resultCount");

function updateResultCount() {

    if (!resultCount) return;

    let visible = 0;

    stockCards.forEach((card) => {

        if (card.style.display !== "none") {

            visible++;

        }

    });

    resultCount.innerText = visible + " Stocks Found";

}

if (searchInput) {

    searchInput.addEventListener("input", updateResultCount);

}

// Initial Count
updateResultCount();