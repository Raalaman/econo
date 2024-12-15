function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptButton = document.getElementById("accept-cookies");
    const rejectButton = document.getElementById("reject-cookies");

    // Verifica si ya se ha tomado una decisión
    if (!localStorage.getItem("cookies-consent")) {
        cookieBanner.classList.remove("hidden");
    }

    // Acción al aceptar las cookies
    acceptButton.addEventListener("click", function () {
        localStorage.setItem("cookies-consent", "accepted");
        cookieBanner.classList.add("hidden");
        console.log("Cookies aceptadas");
        // Aquí puedes activar herramientas de terceros como Google Analytics
    });

    // Acción al rechazar las cookies
    rejectButton.addEventListener("click", function () {
        localStorage.setItem("cookies-consent", "rejected");
        cookieBanner.classList.add("hidden");
        console.log("Cookies rechazadas");
        // Desactiva herramientas si fuera necesario
    });
});
