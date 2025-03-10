document.addEventListener("DOMContentLoaded", function () {
    const navbarHeight = document.querySelector(".fixed-top").offsetHeight; // Hauteur du header fixe

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault(); // Empêche le scroll natif

                // Calcul de la position ajustée avec un décalage supplémentaire
                const offset = navbarHeight + 20; // Hauteur du header + marge (ajuste selon ton besoin)
                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;

                window.scrollTo({
                    top: elementPosition - offset,
                    behavior: "smooth"
                });
            }
        });
    });
});