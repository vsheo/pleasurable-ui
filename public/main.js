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

        form.classList.remove('loading-state')

        form.outerHTML = newState.outerHTML;
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
