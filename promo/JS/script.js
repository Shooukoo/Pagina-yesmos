// Función para generar un código aleatorio de 8 caracteres
function generarCodigo() {
    // Verificar si ya se ha generado un código
    if (localStorage.getItem('codigoGenerado')) {
        return; // Si ya hay un código almacenado, no genera otro
    }

    // Definir los caracteres permitidos
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let codigo = '';

    // Generar código aleatorio de 8 caracteres
    for (let i = 0; i < 8; i++) {
        codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    // Obtener la fecha y hora actual
    const fechaHora = new Date();
    const fechaFormateada = fechaHora.toLocaleString(); // Formato local de fecha y hora

    // Mostrar el código generado y la fecha en el HTML
    document.getElementById('codigoGenerado').textContent = codigo;
    document.getElementById('fechaGeneracion').textContent = `Generado el: ${fechaFormateada}`;

    // Crear el contenido para el QR (código + fecha)
    const qrData = `${codigo} - ${fechaFormateada}`;

    // Generar el código QR
    generarQR(qrData);

    // Guardar el código y la fecha en localStorage
    localStorage.setItem('codigoGenerado', codigo);
    localStorage.setItem('fechaGeneracion', fechaFormateada);
}

function irAlCarrusel() {
    const carruselSection = document.getElementById('carousel-section');
    if (carruselSection) {
        carruselSection.scrollIntoView({ behavior: 'smooth' });
    }
}


// Función para generar el código QR
function generarQR(texto) {
    const qrContainer = document.getElementById('qrCodeContainer');
    qrContainer.innerHTML = ''; // Limpiar QR anterior

    // Crear nuevo QR con el código y la fecha
    new QRCode(qrContainer, {
        text: texto,
        width: 128,
        height: 128
    });
}

// Verificar si ya hay un código almacenado al cargar la página
window.onload = function () {
    const codigoGuardado = localStorage.getItem('codigoGenerado');
    const fechaGuardada = localStorage.getItem('fechaGeneracion');

    if (codigoGuardado) {
        // Mostrar el código guardado
        document.getElementById('codigoGenerado').textContent = codigoGuardado;
        document.getElementById('fechaGeneracion').textContent = `Generado el: ${fechaGuardada}`;
        generarQR(`${codigoGuardado} - ${fechaGuardada}`);
    }
};
