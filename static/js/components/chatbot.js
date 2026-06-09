// ===== CHATBOT AAPHAL =====

const BASE_DE_CONOCIMIENTO = [
    // GENERAL
    { palabras: ["qué es", "que es", "aaphal", "asociacion", "asociación", "quienes son", "quiénes son"],
      respuesta: "AAPHAL es la Asociación de Agricultores de Palta en Huamanpali - Alto Larán, ubicada en Chincha, Ica, Perú. Somos un grupo de agricultores dedicados al cultivo sostenible de palta Hass, comprometidos con la calidad y el desarrollo de nuestra comunidad." },

    // UBICACIÓN
    { palabras: ["donde", "dónde", "ubicacion", "ubicación", "direccion", "dirección", "lugar", "huamanpali", "chincha", "alto laran"],
      respuesta: "Estamos ubicados en Huamanpali, distrito de Alto Larán, provincia de Chincha, departamento de Ica, Perú. Puedes visitarnos de lunes a viernes desde las 8:00am hasta las 5:00pm." },

    // CONTACTO
    { palabras: ["contacto", "contactar", "correo", "email", "telefono", "teléfono", "comunicar", "escribir"],
      respuesta: "Puedes contactarnos por correo a aaphalperu@gmail.com. También puedes encontrarnos en nuestras redes sociales como AAPHALPERU en Instagram, TikTok, Facebook y YouTube. Nuestro RUC es 20605371869." },

    // PRODUCTOS
    { palabras: ["producto", "palta", "variedad", "hass", "fuerte", "zutano", "cultivo"],
      respuesta: "Producimos principalmente Palta Hass, la variedad más exportada del mundo, de piel rugosa y sabor intenso. También cultivamos Palta Fuerte, de piel verde y sabor delicado, y Palta Zutano, de gran tamaño y pulpa abundante." },

    // EXPORTACIÓN
    { palabras: ["exportacion", "exportación", "exportar", "mercado", "internacional", "paises", "países"],
      respuesta: "Exportamos palta Hass a 4 países. Nuestro proceso incluye cosecha, selección, empaque, certificación y envío con cadena de frío garantizada. Producimos más de 60 toneladas anuales con un rendimiento de 7,200 kg por hectárea." },

    // ESTADÍSTICAS
    { palabras: ["cuantos", "cuántos", "asociados", "miembros", "socios", "numero", "número"],
      respuesta: "AAPHAL cuenta con 27 asociados activos. Tenemos más de 10 años de experiencia en el cultivo de palta Hass y hemos realizado 10 exportaciones a mercados internacionales." },

    // ALIANZAS
    { palabras: ["alianza", "alianzas", "aliado", "partner", "agromercado", "senasa", "inia", "agroideas", "fondoperu", "valle grande"],
      respuesta: "Nuestras alianzas estratégicas incluyen: AGROMERCADO, FONDO PERÚ, INIA (Instituto Nacional de Innovación Agraria), SENASA (Servicio Nacional de Sanidad Agraria), AGROIDEAS y VALLE GRANDE. Estas instituciones nos apoyan con capacitación, certificación y acceso a mercados." },

    // BPA / CALIDAD
    { palabras: ["bpa", "buenas practicas", "buenas prácticas", "calidad", "certificacion", "certificación", "trazabilidad"],
      respuesta: "Implementamos Buenas Prácticas Agrícolas (BPA) que incluyen manejo sostenible del suelo y agua, control integrado de plagas, fertilización precisa y cosecha higiénica. También contamos con sistemas de trazabilidad y control de calidad para garantizar productos que cumplen estándares internacionales." },

    // SERVICIOS
    { palabras: ["servicio", "servicios", "asesoria", "asesoría", "capacitacion", "capacitación", "apoyo"],
      respuesta: "Ofrecemos asesoría técnica especializada en cultivo de palta Hass, capacitaciones agrícolas continuas con apoyo de SENASA, INIA y AGROIDEAS, y actividades de integración para nuestros asociados." },

    // MISIÓN
    { palabras: ["mision", "misión", "proposito", "propósito", "objetivo"],
      respuesta: "Nuestra misión es promover el cultivo sostenible de paltas, apoyando a nuestros agricultores con recursos, educación y acceso a mercados, para mejorar sus vidas y contribuir al desarrollo económico de nuestras comunidades." },

    // VISIÓN
    { palabras: ["vision", "visión", "futuro", "meta"],
      respuesta: "Nuestra visión es ser líderes en la producción de paltas de alta calidad, reconocidos por nuestras prácticas agrícolas sostenibles y nuestro compromiso con el bienestar de nuestros agricultores y el medio ambiente." },

    // VALORES
    { palabras: ["valor", "valores", "principio", "principios"],
      respuesta: "Nuestros valores son: Sostenibilidad (protegemos el medio ambiente), Calidad (producimos paltas de alta calidad), Integridad (actuamos con honestidad), Colaboración (trabajamos en equipo) e Innovación (mejoramos constantemente nuestras técnicas)." },

    // HISTORIA
    { palabras: ["historia", "origen", "fundacion", "fundación", "cuando", "cuándo", "inicio", "inicio"],
      respuesta: "AAPHAL nació hace más de 10 años cuando un grupo de agricultores visionarios de Chincha decidió unirse para enfrentar los desafíos del cultivo de paltas. Con esfuerzo y trabajo en equipo, construimos una asociación sólida que hoy es referente en la industria de la palta." },

    // FESTIVAL
    { palabras: ["festival", "evento", "feria", "actividad", "28 mayo", "mayo"],
      respuesta: "¡Próximo evento! III Festival de la Palta - Huamanpali 2026, el jueves 28 de mayo desde las 8:00am en la Plazuela Principal del Centro Poblado Huamanpali. Organizado por AAPHAL junto a DRA, Agencia Agraria Chincha y Dircetur." },

    // REDES SOCIALES
    { palabras: ["redes", "instagram", "facebook", "tiktok", "youtube", "social"],
      respuesta: "Síguenos en nuestras redes sociales como @AAPHALPERU: Instagram: instagram.com/aaphalperu, TikTok: tiktok.com/@aaphalperu, YouTube: youtube.com/@Asocia..." },

    // SALUDO
    { palabras: ["hola", "buenos", "buenas", "saludos", "hey", "hi", "hello"],
      respuesta: "¡Hola! Soy el asistente virtual de AAPHAL 🥑. Puedo ayudarte con información sobre nuestra asociación, productos, exportaciones, alianzas, servicios y más. ¿En qué puedo ayudarte?" },

    // GRACIAS
    { palabras: ["gracias", "thank", "perfecto", "excelente", "genial"],
      respuesta: "¡Con gusto! Si tienes más preguntas sobre AAPHAL, aquí estoy. 🥑" },
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
