console.log("Hola mundo...");

// Continuar codigo javascript desde aqui ...
function confirmarBorrar() {
    var overlay = document.querySelector('.overlay');
    overlay.style.display = 'flex';
}

function cerrarOverlay() {
    var overlay = document.querySelector('.overlay');
    overlay.style.display = 'none';
}

function borrarEntrada() {
    window.location.href = "index.html"
}

function mantenerEntrada() {
    window.location.href = "index.html"
}

function mostrarModal() {
    var modalOverlay = document.querySelector('.modal-overlay');
    modalOverlay.style.display = 'flex';
}

function cerrarModal() {
    var modalOverlay = document.querySelector('.modal-overlay');
    modalOverlay.style.display = 'none';
}

function insertarEntrada() {
    var camposLlenos = verificarCamposLlenos();

    if (camposLlenos) {
        cerrarModal();
        window.location.href = 'index.html';
    } else {
        alert('Por favor, complete todos los campos.');
    }
}

function cancelarInsercion() {
    
    cerrarModal();
}

function verificarCamposLlenos() {
    var campos = document.querySelectorAll('.modal-content input');

    for (var i = 0; i < campos.length; i++) {
        if (!campos[i].value) {
            return false; 
        }
    }

    return true; 
}
