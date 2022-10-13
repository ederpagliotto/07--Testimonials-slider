const slider = document.querySelector(".image-slider");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const heading = document.querySelector(".caption h1");
const description = document.querySelector(".caption p");

const images = ["img01.jpg", "img02.jpg", "img03.jpg"];
const headings = ["Photo by Joseph Gonzalez on Unsplash", "Photo by Michael Dam on Unsplash", "Photo by OSPAN ALI on Unsplash"];
const descriptions = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Ut eget ligula feugiat, feugiat urna id, eleifend purus.
    Aenean in semper erat. Sed eu elit dolor. Morbi ligula quam,
    convallis non nisi a, rhoncus ullamcorper libero. 
    Etiam ut suscipit purus. Morbi nec augue magna.
    Aenean fringilla quis lacus id bibendum.`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Ut eget ligula feugiat, feugiat urna id, eleifend purus.
    Aenean in semper erat. Sed eu elit dolor. Morbi ligula quam,
    convallis non nisi a, rhoncus ullamcorper libero. 
    Etiam ut suscipit purus. Morbi nec augue magna.
    Aenean fringilla quis lacus id bibendum.`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Ut eget ligula feugiat, feugiat urna id, eleifend purus.
    Aenean in semper erat. Sed eu elit dolor. Morbi ligula quam,
    convallis non nisi a, rhoncus ullamcorper libero. 
    Etiam ut suscipit purus. Morbi nec augue magna.
    Aenean fringilla quis lacus id bibendum.`
];

let counter = 0;

function slide(counter) {
    slider.getElementsByClassName.backgroundImage = `url(img/${images[counter]})`;
    slider.classList.add("img-fade");

    setTimeout(() => {
        slider.classList.remove("img-fade");
    }, 550);

    heading.innerText = headings[counter];
    description.innerText = descriptions[counter];
}

arrowLeft.addEventListener("click", () => {
    counter--;

    if (counter > 0) {
        id = 2;
    }

    slide(counter);
    slider.getElementsByClassName.backgroundImage = `url(img/${images[counter]})`;
});

arrowRight.addEventListener("click", () => {
    counter++;

    if (counter > images.length -1) {
        counter = 0;
    }

    slide(counter);
    slider.style.backgroundImage = `url(img/${images[counter]})`;
});
