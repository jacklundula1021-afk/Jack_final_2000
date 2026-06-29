function toggleMenu() {
    const menu = document.getElementById("links");
    menu.classList.toggle("active");
}

/* reset when switching to desktop */
window.addEventListener("resize", () => {
    const menu = document.getElementById("links");

    if (window.innerWidth > 768) {
        menu.classList.remove("active");
    }
});



//Show/hide content on button click


const buttons = document.querySelectorAll(".about-content-btn");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        const content = btn.nextElementSibling;

        // close all
        document.querySelectorAll(".about-hidden-content").forEach(c => {
            if (c !== content) c.style.display = "none";
        });

        // toggle current
        content.style.display =
            content.style.display === "block" ? "none" : "block";

    });
});