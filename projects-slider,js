const track = document.getElementById("sliderTrack");
const row = track.querySelector(".row");
const cards = Array.from(row.querySelectorAll(".col-md-4"));

const dotsContainer =
    document.getElementById("sliderDots");

let currentSlide = 0;
let autoSlideTimer;

function getVisibleCards() {
    return window.innerWidth < 768 ? 1 : 3;
}

function getTotalSlides() {
    const visible = getVisibleCards();
    return Math.max(
        1,
        cards.length - visible + 1
    );
}

function createDots() {
    dotsContainer.innerHTML = "";
    const total = getTotalSlides();
    for (let i = 0; i < total; i++) {
        const dot = document.createElement("div");
        dot.className = "slider-dot";
        if (i === currentSlide) {
            dot.classList.add("active");
        }
        dot.addEventListener(
            "click",
            function () {
                goToSlide(i);
                resetAutoSlide();
            }
        );
        dotsContainer.appendChild(dot);
    }
}

function getCardWidth() {
    return cards[0].getBoundingClientRect().width;
}

function goToSlide(index) {
    const total = getTotalSlides();
    if (index < 0) {
        currentSlide = total - 1;
    }
    else if (index >= total) {
        currentSlide = 0;
    }
    else {
        currentSlide = index;
    }

    const cardWidth = getCardWidth();
    const distance = currentSlide * cardWidth;

    row.style.transform = `translate3d(-${distance}px, 0, 0)`;

    const dots = dotsContainer.querySelectorAll(".slider-dot");

    dots.forEach((dot, index) => {
        dot.classList.toggle(
            "active",
            index === currentSlide
        );
    });
}

function changeSlide(direction) {
    goToSlide(currentSlide + direction);
    resetAutoSlide();
}

function startAutoSlide() {
    autoSlideTimer =setInterval(function () {
        goToSlide(currentSlide + 1);
    }, 2500);

}

function resetAutoSlide() {
    clearInterval(autoSlideTimer);
    startAutoSlide();
}

window.addEventListener("resize",
    function () {
        const total = getTotalSlides();
        if (currentSlide >= total) {
            currentSlide = 0;
        }
        createDots();
        goToSlide(currentSlide);
    }
);

createDots();
goToSlide(0);
startAutoSlide();