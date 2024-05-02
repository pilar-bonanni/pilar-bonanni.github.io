document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Cambia la opacidad a 1 cuando el elemento es visible
                entry.target.style.opacity = 1;
                // Opcional: desvincula el observador una vez el elemento es visible
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1 // El elemento se considera visible cuando el 10% de él está en el viewport
    });

    // Observa cada elemento <main>
    document.querySelectorAll('.seccion main').forEach(main => {
        observer.observe(main);
    });
});
