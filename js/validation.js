const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");
const charCount = document.getElementById("charCount");

if (messageInput) {
    messageInput.addEventListener("input", () => {
        charCount.innerText = messageInput.value.length;
    });
}
const inputs = document.querySelectorAll("input, textarea");
inputs.forEach(input => {
    input.addEventListener("focus", () => {
        input.style.border = "2px solid #0d6efd";
    });
    input.addEventListener("blur", () => {
         input.style.border = "1px solid #ccc";
    });
});

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();
        const subject = subjectInput.value.trim();
        const message = messageInput.value.trim();
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern =
            /^[0-9]{10}$/;
        if (name === "") {
            alert("Please enter your name.");
            return;
        }

        if (!emailPattern.test(email)) {
            alert("Enter a valid email address.");
            return;
        }

        if (!phonePattern.test(phone)) {
            alert("Phone number must contain 10 digits.")
            return;
        }

        if (subject === "") {
            alert("Please enter subject.");
            return;
        }

        if (message.length < 10) {
            alert("Message should contain at least 10 characters.");
            return;
        }
        sessionStorage.setItem("username", name);
        sessionStorage.setItem("email", email);e
        alert("Message Sent Successfully!");
        form.reset();
        charCount.innerText = "0";
    });

}
if (form) {
    form.addEventListener("reset", () => {
        charCount.innerText = "0";
        console.log("Form Reset");
    });
}
inputs.forEach(input => {
    input.addEventListener("change", () => {
        console.log(input.id + " Changed")
    });
});

inputs.forEach(input => {
    input.addEventListener("keydown", (e) => {
        console.log("Key Down :", e.key);
    });

    input.addEventListener("keyup", (e) => {
        console.log("Key Up :", e.key);
    });

});