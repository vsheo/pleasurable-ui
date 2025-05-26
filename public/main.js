// scroll up => header weg
// scroll down => header terug
const header = document.querySelector("header");

let lastScroll = 0;
window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;
    // als de currentScroll een negatief getal is, dan was het een scroll naar beneden. Dus de header gaat uitbeeld
    if (currentScroll - lastScroll > 0) {
        header.classList.add("scroll-down");
        header.classList.remove("scroll-up");
    }
    // als het een positief getal is, dan komt de header terug in beeld
    else
    {
        header.classList.add("scroll-up");
        header.classList.remove("scroll-down");
    }
    lastScroll = currentScroll;
})
// Als JavaScript uit staat dan is de header altijd in beeld, omdat het position: sticky heeft.