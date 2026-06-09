// ===== ANIMACIÓN DE CONTADORES =====
// Anima elementos con atributo data-target o data-target-exp
document.addEventListener('DOMContentLoaded', function () {

    function animarContador(selector) {
        const contadores = document.querySelectorAll(selector);
        contadores.forEach(function (contador) {
            const target = parseInt(contador.getAttribute(selector === '[data-target]' ? 'data-target' : 'data-target-exp'));
            let count = 0;
            const step = Math.ceil(target / 100);
            const interval = setInterval(function () {
                count += step;
                if (count >= target) {
                    contador.textContent = target;
                    clearInterval(interval);
                } else {
                    contador.textContent = count;
                }
            }, 20);
        });
    }

    animarContador('[data-target]');
    animarContador('[data-target-exp]');
});
