
let firstHero = document.getElementByClass("hero1-container");
let opacity = 0;

let fadeInFirstHero = setInterval(() => {
    if (opacity >= 1) {
        clearInterval(fadeInFirstHero);
    }
    firstHero.style.opacity = opacity;
    opacity += 0.01;
}, 5);

