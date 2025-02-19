const knowledgeBase = {
    "¿qué servicios ofrecen?": "Ofrecemos desarrollo web, diseño gráfico y marketing digital.",
    "¿cómo contacto con ustedes?": "Puedes contactarnos a través del formulario en nuestra página o por email: contacto@starmarkagency.com",
    "¿qué tecnologías usan?": "Usamos Bootstrap, Iconify, HTML, CSS y JavaScript para el frontend.",
    "opciones": "Puedes: \n1. Ver nuestros servicios \n2. Contactarnos \n3. Ver proyectos previos",
};

function sendMessage() {
    let input = document.getElementById("userInput").value.toLowerCase();
    let chatbox = document.getElementById("chatbox");

    let response = knowledgeBase[input] || "No entiendo tu pregunta. Intenta con otra.";
    
    chatbox.innerHTML += `<p><strong>Tú:</strong> ${input}</p>`;
    chatbox.innerHTML += `<p><strong>Chatbot:</strong> ${response}</p>`;

    document.getElementById("userInput").value = ""; // Limpiar input
    chatbox.scrollTop = chatbox.scrollHeight; // Auto scroll
}