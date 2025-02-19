// Utilidades reutilizables
export const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const showAlert = (message, type = 'success') => {
    const alertContainer = document.createElement('div');
    alertContainer.className = `alert alert-${type}`;
    alertContainer.innerHTML = `
        <div class="alert-content">
            <p>${message}</p>
            <button class="alert-close">&times;</button>
        </div>
    `;
    document.body.appendChild(alertContainer);

    setTimeout(() => alertContainer.classList.add('show'), 10);
    setTimeout(() => {
        alertContainer.classList.remove('show');
        setTimeout(() => alertContainer.remove(), 300);
    }, 5000);

    alertContainer.querySelector('.alert-close').addEventListener('click', () => {
        alertContainer.classList.remove('show');
        setTimeout(() => alertContainer.remove(), 300);
    });
};

export const animateValue = (element, start, end, duration) => {
    let current = start;
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    
    const timer = setInterval(() => {
        current += increment;
        element.textContent = current;
        if (current === end) clearInterval(timer);
    }, stepTime);
};