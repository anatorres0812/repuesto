// ===== CHATBOT AAPHAL =====

const BASE_DE_CONOCIMIENTO = [

    // ===== SALUDO =====
    {
        palabras: ["hola", "buenos dias", "buenas", "hey", "hi", "hello", "saludos"],
        respuesta: "¡Hola! Soy el asistente virtual de AAPHAL 🥑. Puedo ayudarte con información sobre la asociación, productos, exportaciones, ubicación, servicios y más. ¿Qué deseas saber?"
    },

    // ===== ¿QUÉ ES AAPHAL? =====
    {
        palabras: ["que es", "qué es", "aaphal", "asociacion", "asociación", "quienes son", "quiénes son", "de que trata", "de qué trata"],
        respuesta: "AAPHAL es la Asociación de Agricultores de Palta en Huamanpali - Alto Larán (Chincha, Ica - Perú). Nos dedicamos al cultivo sostenible de palta Hass y al fortalecimiento de nuestros agricultores."
    },

    // ===== UBICACIÓN =====
    {
        palabras: ["donde", "dónde", "ubicacion", "ubicación", "direccion", "dirección", "lugar", "mapa", "como llegar", "cómo llegar", "huamanpali", "alto laran", "chincha"],
        respuesta: "Nos encontramos en Huamanpali, distrito de Alto Larán, provincia de Chincha, región Ica - Perú. Atendemos de lunes a viernes de 8:00am a 5:00pm."
    },

    // ===== CONTACTO =====
    {
        palabras: ["contacto", "contactar", "correo", "email", "telefono", "teléfono", "whatsapp", "escribir", "comunicar"],
        respuesta: "Puedes contactarnos al correo aaphalperu@gmail.com. También estamos en redes sociales como @AAPHALPERU en Instagram, TikTok, Facebook y YouTube. Nuestro RUC es 20605371869."
    },

    // ===== PRODUCTOS =====
    {
        palabras: ["producto", "productos", "palta", "paltas", "variedad", "hass", "fuerte", "zutano", "cultivo"],
        respuesta: "Producimos Palta Hass (la más exportada), Palta Fuerte (sabor suave) y Palta Zutano (gran tamaño y alta producción)."
    },

    // ===== EXPORTACIÓN =====
    {
        palabras: ["exportacion", "exportación", "exportar", "mercado", "internacional", "paises", "países", "envio"],
        respuesta: "Exportamos palta Hass a 4 países. El proceso incluye cosecha, selección, empaque, certificación y envío con cadena de frío. Producción aproximada: 60 toneladas anuales."
    },

    // ===== ASOCIADOS =====
    {
        palabras: ["asociados", "socios", "miembros", "cuantos", "cuántos", "numero", "número"],
        respuesta: "AAPHAL cuenta con 27 asociados activos y más de 10 años de experiencia en el cultivo de palta."
    },

    // ===== ALIANZAS =====
    {
        palabras: ["alianza", "alianzas", "senasa", "inia", "agroideas", "valle grande", "agromercado", "fondo peru"],
        respuesta: "Trabajamos con SENASA, INIA, AGROIDEAS, AGROMERCADO, FONDO PERÚ y VALLE GRANDE para mejorar la producción, certificación y capacitación."
    },

    // ===== CALIDAD / BPA =====
    {
        palabras: ["bpa", "buenas practicas", "calidad", "certificacion", "certificación", "trazabilidad"],
        respuesta: "Aplicamos Buenas Prácticas Agrícolas (BPA), con control de plagas, manejo responsable del agua y suelo, y trazabilidad del producto desde el campo hasta la exportación."
    },

    // ===== SERVICIOS =====
    {
        palabras: ["servicio", "servicios", "asesoria", "asesoría", "capacitacion", "capacitación"],
        respuesta: "Brindamos asesoría técnica en cultivo de palta, capacitaciones constantes y apoyo de instituciones como SENASA e INIA."
    },

    // ===== MISIÓN =====
    {
        palabras: ["mision", "misión", "objetivo", "proposito", "propósito"],
        respuesta: "Nuestra misión es promover el cultivo sostenible de palta, apoyando a los agricultores con conocimiento, recursos y acceso a mercados."
    },

    // ===== VISIÓN =====
    {
        palabras: ["vision", "visión", "futuro", "meta"],
        respuesta: "Ser una asociación líder en producción de palta de alta calidad, reconocida por su sostenibilidad y compromiso con los agricultores."
    },

    // ===== VALORES =====
    {
        palabras: ["valores", "valor", "principios"],
        respuesta: "Nuestros valores son: sostenibilidad, calidad, integridad, colaboración e innovación."
    },

    // ===== HISTORIA =====
    {
        palabras: ["historia", "origen", "fundacion", "fundación", "inicio"],
        respuesta: "AAPHAL nació hace más de 10 años cuando agricultores de Chincha se unieron para mejorar el cultivo de palta Hass."
    },

    // ===== FESTIVAL =====
    {
        palabras: ["festival", "evento", "feria", "28 mayo", "mayo"],
        respuesta: "III Festival de la Palta Huamanpali 2026: 28 de mayo desde las 8:00am en la Plazuela Principal de Huamanpali."
    },

    // ===== REDES =====
    {
        palabras: ["redes", "instagram", "facebook", "tiktok", "youtube"],
        respuesta: "Síguenos como @AAPHALPERU en Instagram, TikTok, Facebook y YouTube."
    },

    // ===== GRACIAS =====
    {
        palabras: ["gracias", "thanks", "perfecto", "ok", "bien"],
        respuesta: "¡Con gusto! Si necesitas más información, aquí estoy 🥑"
    }
];

function obtenerRespuesta(mensaje) {
    const msg = mensaje.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    for (const item of BASE_DE_CONOCIMIENTO) {
        for (const palabra of item.palabras) {
            const p = palabra.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            if (msg.includes(p)) {
                return item.respuesta;
            }
        }
    }

    return "Lo siento, solo puedo responder preguntas relacionadas con AAPHAL. Puedes preguntarme sobre nuestros productos, exportaciones, alianzas, ubicación, contacto, servicios o historia. 🥑";
}

// ===== TOGGLE CHATBOT =====
function toggleChatbot() {
    const ventana = document.getElementById('chatbot-ventana');
    const abierto = ventana.style.display === 'flex';
    ventana.style.display = abierto ? 'none' : 'flex';
    if (!abierto) {
        document.getElementById('chatbot-input').focus();
    }
}

// ===== ENVIAR MENSAJE =====
function enviarMensajeChatbot() {
    const input = document.getElementById('chatbot-input');
    const msg = input.value.trim();
    if (!msg) return;

    agregarMensaje(msg, 'usuario');
    input.value = '';

    setTimeout(() => {
        const respuesta = obtenerRespuesta(msg);
        agregarMensaje(respuesta, 'bot');
    }, 400);
}

function agregarMensaje(texto, tipo) {
    const contenedor = document.getElementById('chatbot-mensajes');
    const div = document.createElement('div');
    div.className = tipo === 'usuario' ? 'msg-usuario' : 'msg-bot';
    div.textContent = texto;
    contenedor.appendChild(div);
    contenedor.scrollTop = contenedor.scrollHeight;
}

// ===== ENTER PARA ENVIAR =====
document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('chatbot-input');
    if (input) {
        input.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') enviarMensajeChatbot();
        });
    }
});
