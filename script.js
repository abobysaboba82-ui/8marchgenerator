let compliments = [
    "Ты самая добрая!",
    "Ты самая лучшая!",
    "Ты самая красивая!",
    "Ты прекрасна как весенний цветок!",
    "Твоя улыбка освещает всё вокруг!",
    "Ты невероятная и неповторимая!",
    "Пусть каждый день приносит тебе радость!",
    "Ты заслуживаешь самого лучшего!",
    "Твоя красота затмевает солнце!",
    "Ты словно весна - нежная и прекрасная!",
    "С тобой мир становится ярче!",
    "Ты чудо, которое согревает сердца!",
    "Будь счастлива каждый день!",
    "Ты - источник вдохновения!",
    "С 8 Марта, самая чудесная!"
];

let images = [
    "8марта.jpg",
    "80323.jpg",
    "20210308.jpg",
    "images.jfif",
    "8-marta15.jpg",
    "flowers1.jpg",
    "spring.jpg",
    "tulips.jpg"
];

function generate() {
    let name = document.getElementById('name').value;
    let role = document.getElementById('role').value;

    // Если имя не введено, используем обращение по умолчанию
    let displayName = name.trim() ? name : 'дорогая';
    
    let randomText = compliments[Math.floor(Math.random() * compliments.length)];
    let randomImage = images[Math.floor(Math.random() * images.length)];

    let message = `<p>C 8 Марта, ${role} ${displayName}! 💐 ${randomText}</p>`;
    let imgTag = `<img src="images/${randomImage}" style="max-width: 100%; height: auto; border-radius: 10px;" onerror="this.src='https://via.placeholder.com/300x200?text=С+праздником!'">`;
    
    document.getElementById("output").innerHTML = imgTag + message;

    createConfetti();
}

function createConfetti() {
    // Удаляем существующие конфетти
    const existingConfetti = document.querySelector('.confetti');
    if (existingConfetti) {
        existingConfetti.remove();
    }

    // Создаем контейнер для конфетти
    const confettiContainer = document.createElement('div');
    confettiContainer.className = 'confetti';
    document.body.appendChild(confettiContainer);

    // Цвета для конфетти
    const colors = ['#ff6b8b', '#ffd700', '#ff4757', '#7bed9f', '#70a1ff', '#ff9ff3', '#feca57', '#ff6b6b'];

    // Создаем 100 частиц конфетти
    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.className = 'confetti-piece';
        
        // Случайные свойства
        const left = Math.random() * 100;
        const width = Math.random() * 10 + 5;
        const height = Math.random() * 20 + 10;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const delay = Math.random() * 2;
        const duration = Math.random() * 2 + 2; // от 2 до 4 секунд
        
        // Применяем стили
        confettiPiece.style.left = left + '%';
        confettiPiece.style.width = width + 'px';
        confettiPiece.style.height = height + 'px';
        confettiPiece.style.backgroundColor = color;
        confettiPiece.style.animationDelay = delay + 's';
        confettiPiece.style.animationDuration = duration + 's';
        
        // Добавляем небольшую вариацию в форме
        if (Math.random() > 0.5) {
            confettiPiece.style.borderRadius = '50%'; // круглые частицы
        } else {
            confettiPiece.style.borderRadius = '0'; // прямоугольные
        }
        
        confettiContainer.appendChild(confettiPiece);
    }

    // Удаляем конфетти через 5 секунд
    setTimeout(() => {
        if (confettiContainer && confettiContainer.parentNode) {
            confettiContainer.remove();
        }
    }, 5000);
}

// Добавляем обработчик для кнопки Enter в поле ввода
document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name');
    if (nameInput) {
        nameInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                generate();
            }
        });
    }
});









