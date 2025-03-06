// Анимация смены текста
const phrases = [
    "Создавайте уникальные сервера с легкостью!",
    "Это не хостинг, это система сервисов",
    "Быстрое подключение к серверу",
    "Кодирование ",
    "Без знаний программирования"
];

const animatedText = document.getElementById('animatedText');
let phraseIndex = 0;

function changeText() {
    // Плавное исчезновение текста
    animatedText.style.opacity = 0;
    setTimeout(() => {
        // Меняем текст
        animatedText.textContent = phrases[phraseIndex];
        // Плавное появление текста
        animatedText.style.opacity = 1;
        // Переход к следующему тексту
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }, 1000); // Задержка для исчезновения текста
}

// Запускаем смену текста каждые 4 секунды
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

// Закрытие модалок при клике вне
window.onclick = function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        closeModal();
    }
}

// Обработка формы регистрации
document.getElementById('registrationForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    const password = e.target.querySelector('input[type="password"]').value;
    if (!validateEmail(email)) {
        alert('Введите корректный email');
        return;
    }
    if (password.length < 6) {
        alert('Пароль должен быть не менее 6 символов');
        return;
    }
    console.log('Регистрация:', { email, password });
    alert('Регистрация успешна!');
    closeModal();
});

// Обработка формы входа
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    const password = e.target.querySelector('input[type="password"]').value;
    console.log('Вход:', { email, password });
    alert('Вход выполнен!');
    closeModal();
});

// Валидация email
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}