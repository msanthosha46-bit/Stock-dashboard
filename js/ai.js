
const aiSuggestions = [
    "📈 BUY - Strong upward trend detected.",
    "📊 HOLD - Market is stable, wait for confirmation.",
    "📉 SELL - Risk level is increasing.",
    "💰 BUY - Good long-term investment opportunity.",
    "⚠️ HOLD - Wait for the next trading session.",
    "🚀 BUY - Positive market momentum."
];

const quotes = [
    "Invest for the long term.",
    "Risk comes from not knowing what you're doing.",
    "Never invest emotionally.",
    "Diversify your investments.",
    "Patience is the key to successful investing.",
    "Buy low and sell high."
];

const sentiments = [
    "📈 Bullish",
    "📉 Bearish",
    "⚖️ Neutral"
];
const askAI = document.getElementById("askAI");
const aiResult = document.getElementById("aiResult");
const quoteBtn = document.getElementById("quoteBtn");
const quoteText = document.getElementById("quoteText");
const sentimentText = document.getElementById("sentimentText");

if (askAI) {

    askAI.addEventListener("click", () => {
        const random =
            Math.floor(Math.random() * aiSuggestions.length);

        aiResult.innerText =
            aiSuggestions[random];

        localStorage.setItem(
            "lastSuggestion",
            aiSuggestions[random]
        );

        showToast("AI Recommendation Generated");
    });

}

window.addEventListener("DOMContentLoaded", () => {
    const last =
        localStorage.getItem("lastSuggestion");
    if (last && aiResult) {

        aiResult.innerText = last;
    }
});


if (quoteBtn) {

    quoteBtn.addEventListener("click", () => {
        const random =
            Math.floor(Math.random() * quotes.length);
        quoteText.innerText =
            quotes[random];
    });
}

function marketSentiment() {
    if (!sentimentText) return;
    const random =
        Math.floor(Math.random() * sentiments.length);
        sentimentText.innerText =
        sentiments[random];
}

marketSentiment();
setInterval(marketSentiment, 10000);

function showToast(message) {
    const toast =
        document.getElementById("toast");
    if (!toast) return;
    toast.innerText = message;
    toast.style.display = "block";
    setTimeout(() => {
        toast.style.display = "none";
    }, 3000);

}

const userPrompt =
    document.getElementById("userPrompt");
if (userPrompt) {
    userPrompt.addEventListener("focus", () => {
        userPrompt.style.border =
            "2px solid #0d6efd";

    });

    userPrompt.addEventListener("blur", () => {
          userPrompt.style.border =
            "1px solid #ccc";
    });

    userPrompt.addEventListener("input", () => {
        console.log(
            "Prompt:",
            userPrompt.value
        );
    });
}

if (aiResult) {
    aiResult.addEventListener("dblclick", () => {
        alert("AI Recommendation Copied!");
    });
}

if (aiResult) {
    aiResult.addEventListener("mouseover", () => {
        aiResult.style.color = "#0d6efd";
    });
    aiResult.addEventListener("mouseout", () => {
        aiResult.style.color = "";
    });
}

document.addEventListener("keydown", (event) => {
    if (event.key === "g" || event.key === "G") {
        if (askAI) {
            askAI.click();
        }
    }
});