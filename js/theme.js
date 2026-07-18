const themeBtn = document.getElementById("themeBtn");
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        if (themeBtn) {
            themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        }
    }
});

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
            showThemeToast("Dark Mode Enabled");
        }
         else {
            localStorage.setItem("theme", "light");
            themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
            showThemeToast("Light Mode Enabled");
        }
    });
}

function showThemeToast(message) {

    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.innerText = message;
    toast.style.display = "block";

    setTimeout(() => {
        toast.style.display = "none";
    }, 2500);
}

function updateHeader() {
    const header = document.querySelector("header");
    if (!header) return;
    if (document.body.classList.contains("dark")) {
        header.style.background = "#111827";
    } else {
        header.style.background = "#0d6efd";
    }
}
updateHeader();

if (themeBtn) {
    themeBtn.addEventListener("click", updateHeader);
}

document.addEventListener("keydown", function (e) {
    if (e.key === "t" || e.key === "T") {

        themeBtn.click();
    }
});