const chatContainer = document.getElementById('chat-container');
const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const toggleButton = document.getElementById('toggle-chat');
const closeButton = document.getElementById('close-chat');

// Historial de mensajes para contexto y memoria a corto plazo
let chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [
    { role: "system", content: "Eres un asistente experto en desarrollo web, diseño y marketing digital. Responde de manera profesional y amigable, representando a Star Mark Agency." }
];

// Agregar mensajes al chat
function addMessage(text, isBot) {
    const messageDiv = document.createElement('div');
    messageDiv.className = isBot ? 'bot-message' : 'user-message';
    messageDiv.textContent = text;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Simulación de respuesta automática
function getBotResponse(userInput) {
    const responses = {
        "hola": "¡Hola! ¿Cómo estás? 😊",
        "como estas": "¡Muy bien, gracias por preguntar! ¿En qué puedo ayudarte?",
        "que haces": "Estoy aquí para responder cualquier pregunta sobre nuestra agencia.",
        "adios": "¡Hasta luego! Que tengas un excelente día.",
        "gracias": "¡De nada! Estoy aquí para ayudar.",
        "ayuda": "Puedes preguntarme sobre nuestros servicios, contacto o tecnologías.",
        "¿qué servicios ofrecen?": "Ofrecemos desarrollo web, diseño gráfico y marketing digital. 🚀",
        "¿cómo contacto con ustedes?": "Puedes contactarnos a través del formulario en nuestra página o por email: contacto@starmarkagency.com",
        "¿qué tecnologías usan?": "Usamos Bootstrap, Iconify, HTML, CSS y JavaScript para el frontend.",
        "opciones": "Puedes: \n1️⃣ Ver nuestros servicios \n2️⃣ Contactarnos \n3️⃣ Ver proyectos previos",
        "default": "Lo siento, no entiendo tu pregunta. ¿Podrías reformularla?"
    };
    return responses[userInput.toLowerCase()] || "Lo siento, no entiendo la pregunta. ¿Puedes reformularla?";
}

// Manejo del envío de mensajes
function handleSend() {
    const message = messageInput.value.trim();
    if (!message) return;

    addMessage(message, false);
    messageInput.value = '';

    setTimeout(() => {
        const botResponse = getBotResponse(message);
        addMessage(botResponse, true);
    }, 500);
}

// Mostrar/ocultar chat
function toggleChat() {
    chatContainer.style.display = chatContainer.style.display === 'none' || chatContainer.style.display === '' ? 'flex' : 'none';

    if (chatContainer.style.display === 'flex') {
        messageInput.focus();
        if (chatMessages.children.length === 0) {
            setTimeout(() => {
                addMessage("¡Hola! ¿En qué puedo ayudarte hoy?", true);
            }, 500);
        }
    }
}

// Agregar botones interactivos a respuestas
function addInteractiveMessage(text, options) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'bot-message';
    messageDiv.textContent = text;
    chatMessages.appendChild(messageDiv);

    options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'chat-button';
        button.textContent = option.text;
        button.onclick = () => handleSend(option.value);
        messageDiv.appendChild(button);
    });

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Event listeners
sendButton.addEventListener('click', handleSend);
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSend();
    }
});
toggleButton.addEventListener('click', toggleChat);
closeButton.addEventListener('click', toggleChat);
