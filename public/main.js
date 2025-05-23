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