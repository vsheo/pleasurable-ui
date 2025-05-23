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