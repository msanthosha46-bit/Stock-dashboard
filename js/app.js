
document.addEventListener("DOMContentLoaded", () => {
    console.log("StockAI Loaded Successfully");

    showLoader();
    scrollButton();
    toastMessage();
    faqAccordion();
    progressAnimation();
});

function showLoader() {
    const loader = document.getElementById("loader");
    if (loader) {

        setTimeout(() => {
            loader.style.display = "none";
        }, 2000);

    }

}

const topBtn = document.getElementById("topBtn");
function scrollButton() {

    window.addEventListener("scroll", () => {
        if (!topBtn) return;
        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    });
}

if (topBtn) {
    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.innerText = message;
    toast.style.display = "block";
    setTimeout(() => {
        toast.style.display = "none";
    }, 3000);

}

function toastMessage() {
    const watchButtons = document.querySelectorAll(".watchBtn");
    watchButtons.forEach(button => {
        button.addEventListener("click", () => {
            showToast("Stock Added Successfully");
        });
    });
}

function faqAccordion() {
    const questions = document.querySelectorAll(".question");
    questions.forEach(question => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
}

function progressAnimation() {
    const progress = document.getElementById("progressFill");
    if (!progress) return;
    let width = 0;
    const interval = setInterval(() => {
        if (width >= 80) {
            clearInterval(interval);
        } else {
            width++;
            progress.style.width = width + "%";
            progress.innerText = width + "%";
        }
    }, 20);
}


const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.05)";
    });

    button.addEventListener("mouseout", () => {
        button.style.transform = "scale(1)";
    });
});

document.addEventListener("dblclick", () => {
    console.log("Dashboard Double Clicked");
});

document.addEventListener("keydown", (event) => {
    console.log("Key Down :", event.key);
});

document.addEventListener("keyup", (event) => {
    console.log("Key Up :", event.key);

});

window.addEventListener("resize", () => {
    console.log("Window Width :", window.innerWidth);
});

document.addEventListener("mousemove", (event) => {
    
});


setTimeout(() => {
    console.log("Welcome to StockAI Dashboard");
}, 1000);