// https://www.youtube.com/watch?v=2IbRtjez6ag&t=50s
// alle article selecteren
const sections = document.querySelectorAll(".container-details section")
// console.log(sections)

sections.forEach(section => {
    section.classList.add("JS-hidden")
})

// intersection observer aanmaken
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // de class wordt aan de section toegevoegd, of weg gehaald, zodra het eerste gedeelte van de article op beeld komt.
        entry.target.classList.toggle("slide-animation", entry.isIntersecting)
        // nadat de article in beeld is gaat het niet meer weg
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
}, {
    // alleen als 80% van de section al op beeld is wordt de class aan de section toegevoegd
    threshold: 0.8,
}
);

// intersection observer toepassen op elke article
sections.forEach(section => {
    observer.observe(section)
})


// view transition
// https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Testing/Feature_detection
if ("fetch" in window && "DOMParser" in window) {
    document.addEventListener("submit", async function (event) {
        const form = event.target;
        console.log(form);

        if (!form.hasAttribute("data-enhanced")) {
            return;
        }

        event.preventDefault();
        form.classList.add('loading-state')

        const response = await fetch(form.action, {
            method: form.method,
            body: new URLSearchParams(new FormData(form)),
        });

        const responseText = await response.text();

        const parser = new DOMParser();
        const responseDOM = parser.parseFromString(responseText, "text/html");

        const newState = responseDOM.querySelector(
            '[data-enhanced="' + form.getAttribute("data-enhanced") + '"]'
        );

        form.classList.remove('loading-state');

        // Overschrijf ons formulier met de nieuwe HTML, met of zonder een View Transition, afhankelijk van de browser
        if (document.startViewTransition) {
            document.startViewTransition(function() {
                form.outerHTML = newState.outerHTML
            })
        } else {
            form.outerHTML = newState.outerHTML
        }
    });
}


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
