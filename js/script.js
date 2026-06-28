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