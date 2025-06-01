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



document.addEventListener('DOMContentLoaded', () => {
    async function loadPage(url, addToHistory = true) {
      if (!document.startViewTransition) {
        if (addToHistory) {
          window.location.href = url;
        } else {
          window.location.replace(url);
        }
        return;
      }
  
      const response = await fetch(url);
      const html = await response.text();
      const parser = new DOMParser();
      const newDoc = parser.parseFromString(html, 'text/html');
  
      const newMain = newDoc.querySelector('main');
      const currentMain = document.querySelector('main');
  
      document.startViewTransition(() => {
        currentMain.replaceWith(newMain);
        window.scrollTo(0, 0);
        if (addToHistory) {
          window.history.pushState({}, '', url);
        }
      });
    }
  
    document.querySelectorAll('a.slug[href^="/cadeau/"]').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        loadPage(link.href, true);
      });
    });
  
    window.addEventListener('popstate', () => {
      loadPage(window.location.href, false);
    });
  });












