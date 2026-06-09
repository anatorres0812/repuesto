// ===== VALIDACIONES =====
function soloLetras(input) {
    input.value = input.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
}

function soloNumeros(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
}

function forzarMinuscula(input) {
    input.value = input.value.toLowerCase();
}

// ===== TRADUCCIONES =====
const traducciones = {
    es: {
        inicio: "Inicio",
        nosotros: "Nosotros",
        produccion: "Producción Agrícola",
        servicios: "Servicios",
        alianzas: "Alianzas",
        noticias: "Noticias",

        bienvenido: "¡Bienvenido a AAPHAL!",
        subtitulo: "Asociación de Agricultores de Palto en Huamanpali - Alto Larán",

        quienes: "Quiénes Somos",
        quienes_texto: `Somos una asociación de agricultores dedicada al cultivo de palta, ubicada en Huamanpali, en el distrito de Alto Larán, provincia de Chincha.
        <br><br>
        Nuestra organización nace con el propósito de unir a los productores de la zona, permitiéndonos trabajar de manera conjunta para enfrentar los desafíos del sector agrícola, mejorar nuestras técnicas de cultivo y fortalecer nuestra presencia en el mercado. A lo largo de los años, hemos venido creciendo de forma constante, implementando prácticas sostenibles que cuidan el medio ambiente, optimizando nuestros procesos productivos y garantizando la calidad de nuestras paltas. Creemos firmemente en el trabajo en equipo, la innovación y el compromiso como pilares fundamentales para el desarrollo de nuestros agricultores y el bienestar de sus familias.
        <br><br>
        Hoy en día, seguimos avanzando con una visión clara: consolidarnos como una asociación competitiva, responsable y reconocida por la excelencia de nuestros productos, tanto a nivel nacional como internacional.`,

        historia: "Nuestra Historia",
        historia_texto: `Nuestra historia comienza hace más de una década, cuando un grupo de agricultores visionarios de Chincha, en Alto Larán, decidió unirse para enfrentar los desafíos del cultivo de paltas, como la falta de acceso a mercados, recursos limitados y técnicas tradicionales poco eficientes. Con esfuerzo, compromiso y trabajo en equipo, sentaron las bases de lo que hoy es una asociación sólida y organizada.
        <br><br>
        A lo largo de los años, hemos crecido de manera constante, incorporando prácticas agrícolas sostenibles que cuidan el suelo y el agua, así como tecnologías innovadoras que mejoran la producción y garantizan altos estándares de calidad. Este proceso no solo nos ha permitido aumentar nuestra competitividad, sino también abrirnos camino en mercados de exportación.
        <br><br>
        Hoy en día, nuestra asociación es un referente en la industria de la palta, reconocida por la excelencia de nuestros productos y por nuestro firme compromiso con el bienestar de nuestros agricultores, sus familias y el medio ambiente. Seguimos trabajando con la misma visión que nos unió desde el inicio: crecer juntos, de manera responsable y sostenible.`,

        asociados: "Nuestros Asociados",
        produccion_anual: "Producción de Palta Anual",
        produccion_ha: "Producción por Ha",
        paises: "Países Atendidos",
        exportacion: "Exportación",
        exportacion_num: "Número de Exportación",

        vermas: "VER MÁS",

        mision: "Misión",
        mision_texto: "Nuestra misión es promover el cultivo sostenible de paltas, apoyando a nuestros agricultores con recursos, educación y acceso a mercados, para mejorar sus vidas y contribuir al desarrollo económico de nuestras comunidades.",

        vision: "Visión",
        vision_texto: "Nuestra visión es ser líderes en la producción de paltas de alta calidad, reconocidos por nuestras prácticas agrícolas sostenibles y nuestro compromiso con el bienestar de nuestros agricultores y el medio ambiente.",

        valores: "NUESTROS VALORES",
        valor1_titulo: "• Sostenibilidad",
        valor1_texto: "Fomentamos prácticas agrícolas que protegen y preservan el medio ambiente.",

        valor2_titulo: "• Calidad",
        valor2_texto: "Nos comprometemos a producir paltas de la más alta calidad.",

        valor3_titulo: "• Integridad",
        valor3_texto: "Actuamos con honestidad y transparencia en todas nuestras actividades.",

        valor4_titulo: "• Colaboración",
        valor4_texto: "Trabajamos juntos para alcanzar objetivos comunes y apoyar a nuestros miembros.",

        valor5_titulo: "• Innovación",
        valor5_texto: "Buscamos constantemente nuevas formas de mejorar nuestras técnicas de cultivo y procesos.",
       
        contacto: "Contacto",
        contacto_titulo: "Estamos aqui para ayudarte",
        nombre: "Tu nombre",
        correo: "Tu correo electronico",
        telefono: "Tu telefono",
        asunto: "Asunto",
        enviar: "ENVIAR",

        ubicacion: "UBICACION",
        redes: "Nuestras redes sociales",

        footer_texto: "Nuestro propósito es unir a los agricultores de palta para compartir conocimientos, innovar en técnicas de cultivo y fortalecer nuestra presencia en el mercado global, asegurando un futuro próspero para todos nuestros miembros.",
        ruc: "RUC: 20605371869",
        correo_info: "aaphalperu@gmail.com",
        politicas: "Políticas",
        terminos: "Términos",
        libro: "Libro de reclamaciones",
        copyright: "© 2026 Asociación de Agricultores de Palta en Huampali - Alto Laran",
        derechos: "Todos los derechos reservados"
    },

    en: {
        inicio: "Home",
        nosotros: "About Us",
        produccion: "Agricultural Production",
        servicios: "Services",
        alianzas: "Partnerships",
        noticias: "News",

        bienvenido: "Welcome to AAPHAL!",
        subtitulo: "Association of Avocado Farmers of Huamanpali - Alto Larán",

        quienes: "Who We Are",
        quienes_texto: `We are an association of farmers dedicated to avocado cultivation, located in Huamanpali, in the district of Alto Larán, province of Chincha.
        <br><br>
        Our organization was created with the purpose of uniting producers in the area, allowing us to work together to face the challenges of the agricultural sector, improve our cultivation techniques, and strengthen our presence in the market. Over the years, we have been growing steadily, implementing sustainable practices that care for the environment, optimizing our production processes, and ensuring the quality of our avocados. We strongly believe in teamwork, innovation, and commitment as fundamental pillars for the development of our farmers and the well-being of their families.
        <br><br>
        Today, we continue moving forward with a clear vision: to consolidate ourselves as a competitive, responsible association recognized for the excellence of our products, both nationally and internationally.`,

        historia: "Our History",
        historia_texto: `Our history begins more than a decade ago, when a group of visionary farmers from Chincha, in Alto Larán, decided to unite to face the challenges of avocado cultivation, such as lack of market access, limited resources and inefficient traditional techniques. With effort, commitment and teamwork, they laid the foundations of what is now a solid and organized association.
        <br><br>
        Over the years, we have grown steadily, incorporating sustainable agricultural practices that care for soil and water, as well as innovative technologies that improve production and ensure high quality standards. This process has not only increased our competitiveness but also opened the way to export markets.
        <br><br>
        Today, our association is a benchmark in the avocado industry, recognized for the excellence of our products and our strong commitment to the well-being of our farmers, their families and the environment. We continue working with the same vision that united us from the beginning: to grow together responsibly and sustainably.`,

        asociados: "Our Members",
        produccion_anual: "Annual Avocado Production",
        produccion_ha: "Production per Ha",
        paises: "Served Countries",
        exportacion: "Export",
        exportacion_num: "Export Number",

        vermas: "SEE MORE",

        mision: "Mission",
        mision_texto: "Our mission is to promote sustainable avocado cultivation, supporting our farmers with resources, education and access to markets, to improve their lives and contribute to the economic development of our communities.",

        vision: "Vision",
        vision_texto: "Our vision is to be leaders in high-quality avocado production, recognized for our sustainable agricultural practices and our commitment to the well-being of our farmers and the environment.",

        valores: "OUR VALUES",
        valor1_titulo: "• Sustainability",
        valor1_texto: "We promote agricultural practices that protect and preserve the environment.",

        valor2_titulo: "• Quality",
        valor2_texto: "We are committed to producing avocados of the highest quality.",

        valor3_titulo: "• Integrity",
        valor3_texto: "We act with honesty and transparency in all our activities.",

        valor4_titulo: "• Collaboration",
        valor4_texto: "We work together to achieve common goals and support our members.",

        valor5_titulo: "• Innovation",
        valor5_texto: "We constantly seek new ways to improve our cultivation techniques and processes.",

        contacto: "Contact",
        contacto_titulo: "We are here to help you",
        nombre: "Your name",
        correo: "Your email",
        telefono: "Your phone",
        asunto: "Subject",
        enviar: "SEND",

        ubicacion: "LOCATION",
        redes: "Our social networks",

        footer_texto: "Our purpose is to unite avocado farmers to share knowledge, innovate cultivation techniques and strengthen our presence in the global market, ensuring a prosperous future for all our members.",
        ruc: "RUC: 20605371869",
        correo_info: "aaphalperu@gmail.com",
        politicas: "Policies",
        terminos: "Terms",
        libro: "Complaint book",
        copyright: "© 2026 Association of Avocado Farmers of Huampali - Alto Laran",
        derechos: "All rights reserved"
    }
};


// ===== CAMBIAR IDIOMA =====
function cambiarIdioma(idioma) {
    const t = traducciones[idioma];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');

        if (t[key]) {
            if (key.includes("texto")) {
                el.innerHTML = t[key]; // mantiene <br><br>
            } else {
                el.textContent = t[key];
            }
        }
    });
}