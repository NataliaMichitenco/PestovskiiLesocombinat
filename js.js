// Получаем необходимые элементы
const slides = document.querySelectorAll('.projects__slide');
const nextBtn = document.querySelector('.right');
const prevBtn = document.querySelector('.left');
const circlesContainer = document.querySelector('.projects__slider_circle');

let currentSlide = 0;

// Создаем кружочки для каждого слайда
slides.forEach((slide, index) => {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.addEventListener('click', () => {
        goToSlide(index);
    });
    circlesContainer.appendChild(circle);
});

// Функция для отображения текущего слайда
function showSlide() {
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });

    // Подсвечиваем соответствующий кружок
    const circles = circlesContainer.querySelectorAll('.circle');
    circles.forEach((circle, index) => {
        if (index === currentSlide) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });
}

// Функция для перехода к указанному слайду
function goToSlide(index) {
    currentSlide = index;
    showSlide();
}

// Обработчики событий для кнопок "вперед" и "назад"
nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide();
});

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide();
});

// Показываем первый слайд при загрузке страницы
showSlide();

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slider__wrapper');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentSlide = 0;

    function showSlide(n) {
        slides.forEach((slide, index) => {
            if (index === n) {
                slide.style.display = 'flex'; // Показываем текущий слайд
            } else {
                slide.style.display = 'none'; // Скрываем остальные слайды
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Добавляем прослушиватели событий на кнопки
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Показываем первый слайд при загрузке страницы
    showSlide(currentSlide);
});

// Получаем ссылку на кнопку
const button = document.querySelector('.banner__text_btn');

// Добавляем обработчик события на клик
button.addEventListener('click', function() {
    // Переходим на страницу questionnaire.html
    window.location.href = 'questionnaire.html'; // Замените на нужный URL
});

