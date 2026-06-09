// ===== CONTACTO =====

// Reglas por país: { digits: número de dígitos, starts: primer dígito requerido ('' = cualquiera) }
const reglasPhone = {
    PE:  { digits: 9,  starts: '9',  placeholder: '9XXXXXXXX' },
    US:  { digits: 10, starts: '',   placeholder: 'XXXXXXXXXX' },
    GB:  { digits: 10, starts: '',   placeholder: 'XXXXXXXXXX' },
    AU:  { digits: 9,  starts: '4',  placeholder: '4XXXXXXXX' },
    CA:  { digits: 10, starts: '',   placeholder: 'XXXXXXXXXX' },
    NZ:  { digits: 9,  starts: '2',  placeholder: '2XXXXXXXX' },
    ZA:  { digits: 9,  starts: '6',  placeholder: '6XXXXXXXX' },
    NG:  { digits: 10, starts: '7',  placeholder: '7XXXXXXXXX' },
    IN:  { digits: 10, starts: '6',  placeholder: '6XXXXXXXXX' },
    PH:  { digits: 10, starts: '9',  placeholder: '9XXXXXXXXX' },
};

function actualizarTelefono() {
    const select = document.getElementById('paisCodigo');
    const input  = document.getElementById('telefonoInput');
    const pais   = select.value;
    const regla  = reglasPhone[pais];

    input.maxLength  = regla.digits;
    input.placeholder = regla.placeholder;
    input.value = '';
    document.getElementById('telefonoError').textContent = '';
}

function validarTelefono(input) {
    // Solo números
    input.value = input.value.replace(/[^0-9]/g, '');

    const pais  = document.getElementById('paisCodigo').value;
    const regla = reglasPhone[pais];
    const error = document.getElementById('telefonoError');

    if (regla.starts && input.value.length > 0 && input.value[0] !== regla.starts) {
        error.textContent = `El número debe empezar con ${regla.starts}`;
        input.value = '';
    } else if (input.value.length > regla.digits) {
        input.value = input.value.slice(0, regla.digits);
        error.textContent = '';
    } else {
        error.textContent = '';
    }
}

function validarCorreo(input) {
    input.value = input.value.toLowerCase();
    const error = document.getElementById('correoError');
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (input.value.length > 0 && !regex.test(input.value)) {
        error.textContent = 'El correo debe contener @ y un dominio válido (ej: nombre@correo.com)';
    } else {
        error.textContent = '';
    }
}

function mostrarCampoPersonalizado(select) {
    const campo = document.getElementById('asuntoPersonalizado');
    if (select.value === 'otro') {
        campo.style.display = 'block';
        campo.required = true;
    } else {
        campo.style.display = 'none';
        campo.required = false;
        campo.value = '';
    }
}

function enviarFormulario(e) {
    e.preventDefault();

    const form    = e.target;
    const correo  = document.getElementById('correoInput').value.trim();
    const telefono = document.getElementById('telefonoInput').value.trim();
    const pais    = document.getElementById('paisCodigo');
    const codigo  = pais.options[pais.selectedIndex].getAttribute('data-code');
    const selectAsunto = document.getElementById('selectAsunto');
    const asuntoPersonalizado = document.getElementById('asuntoPersonalizado');

    // Validar correo
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexCorreo.test(correo)) {
        document.getElementById('correoError').textContent = 'Ingresa un correo válido con @';
        return;
    }

    // Validar teléfono
    const regla = reglasPhone[pais.value];
    if (telefono.length !== regla.digits) {
        document.getElementById('telefonoError').textContent =
            `El número debe tener exactamente ${regla.digits} dígitos`;
        return;
    }

    const asunto = selectAsunto.value === 'otro'
        ? asuntoPersonalizado.value.trim()
        : selectAsunto.value;

    const datos = {
        nombre:   form.querySelector('input[type="text"]').value.trim(),
        correo:   correo,
        telefono: codigo + telefono,
        asunto:   asunto,
        mensaje:  form.querySelector('textarea').value.trim()
    };

    fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
    })
    .then(res => res.json())
    .then(data => {
        const msg = document.getElementById('mensajeExito');
        if (data.success) {
            msg.style.display = 'block';
            msg.style.color = '#556B2F';
            msg.textContent = '✅ ¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.';
            form.reset();
            asuntoPersonalizado.style.display = 'none';
            document.getElementById('correoError').textContent = '';
            document.getElementById('telefonoError').textContent = '';
        } else {
            msg.style.display = 'block';
            msg.style.color = '#dc2626';
            msg.textContent = '❌ Error al enviar: ' + data.message;
        }
        setTimeout(() => { msg.style.display = 'none'; }, 5000);
    })
    .catch(() => {
        const msg = document.getElementById('mensajeExito');
        msg.style.display = 'block';
        msg.style.color = '#dc2626';
        msg.textContent = '❌ Error de conexión. Intenta nuevamente.';
        setTimeout(() => { msg.style.display = 'none'; }, 5000);
    });
}
