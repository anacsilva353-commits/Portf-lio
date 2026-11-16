document.querySelectorAll("[data-ano]").forEach(function (elemento) {
    elemento.textContent = new Date().getFullYear();
});
