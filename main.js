// Анимация смены текста
const phrases = [
    "Создавайте уникальные сервера с легкостью!",
    "Это не хостинг, это система сервисов",
    "Быстрое подключение к серверу",
    "Без Кодирование ",
    "Без знаний программирования"
];

const animatedText = document.getElementById('animatedText');
let phraseIndex = 0;

function changeText() {
    animatedText.style.opacity = 0;
    setTimeout(() => {
        animatedText.textContent = phrases[phraseIndex];
        animatedText.style.opacity = 1;
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }, 1000);
}

setInterval(changeText, 4000);

// Управление модальными окнами
function showRegisterModal() {
    document.getElementById('registerModal').style.display = 'flex';
}

function showLoginModal() {
    document.getElementById('loginModal').style.display = 'flex';
}

function closeModal() {
    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.style.display = 'none';
    });
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        closeModal();
    }
}

// Обработка формы регистрации
document.getElementById('registrationForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        });

        const data = await response.json();
        if (response.ok) {
            alert(data.message);
            closeModal();
        } else {
            alert(data.error);
        }
    } catch (err) {
        alert('Ошибка при регистрации');
    }
});

// Обработка формы входа
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        if (response.ok) {
            alert(data.message);
            closeModal();
        } else {
            alert(data.error);
        }
    } catch (err) {
        alert('Ошибка при входе');
    }
});

// Валидация email
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Адаптация для мобильных устройств
document.getElementById('mobileMenu').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});