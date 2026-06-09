// ===== MODAL IMAGEN =====
function abrirModal(src) {
    var modal = document.getElementById('modalImagen');
    var img = document.getElementById('modalImg');
    img.src = src;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function cerrarModal() {
    document.getElementById('modalImagen').style.display = 'none';
    document.getElementById('modalImg').src = '';
    document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('modalImagen');
    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === this) cerrarModal();
        });
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') cerrarModal();
    });
});
