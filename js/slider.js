const sliderImage = document.getElementById("sliderImage");
const images = [
    "images/stock1.jpg",
    "images/stock2.jpg",
    "images/stock3.jpg",  
];

let currentImage = 0;
let sliderInterval;
function showImage() {
    if (!sliderImage) return;
    sliderImage.src = images[currentImage];
}

function nextImage() {
    currentImage++;
    if (currentImage >= images.length) {
        currentImage = 0;
    }
    showImage();
}

function previousImage() {
    currentImage--;
    if (currentImage < 0) {
        currentImage = images.length - 1;
    }
    showImage();
}

function startSlider() {
    sliderInterval = setInterval(nextImage, 3000);
}
function stopSlider() {
    clearInterval(sliderInterval);

}
if (sliderImage) {
    showImage();
    startSlider();
}
if (sliderImage) {
    sliderImage.addEventListener("mouseover", stopSlider);
    sliderImage.addEventListener("mouseout", startSlider);

}
if (sliderImage) {
    sliderImage.addEventListener("dblclick", () => {
        alert("Current Image : " + (currentImage + 1));
    });

}
const prevBtn = document.getElementById("prevBtn");
if (prevBtn) {
    prevBtn.addEventListener("click", previousImage);
}


const nextBtn = document.getElementById("nextBtn");
if (nextBtn) {
    nextBtn.addEventListener("click", nextImage);

}