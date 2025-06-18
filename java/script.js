
// Селектор для счетчика "избранное"
const heardCounter = document.querySelector('.heard span'); 
let heardCount = 0; // Начальное значение счетчика

// Обработка кликов на кнопках "избранное"
const heardButtons = document.querySelectorAll('.add-to-cart1'); // Выбор всех кнопок "избранное"

heardButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('active')) {
            // Если кнопка уже активна, уменьшаем счетчик и убираем класс
            heardCount--;
            button.classList.remove('active');
        } else {
            // Если кнопка не активна, увеличиваем счетчик и добавляем класс
            heardCount++;
            button.classList.add('active');
        }
        // Обновляем текст счетчика "избранное"
        heardCounter.textContent = heardCount;
    });
});

// Селектор для счетчика "корзина"
const cartCounter = document.querySelector('.cart span'); 
let cartCount = 0; // Начальное значение счетчика

// Обработка кликов на кнопках "корзина"
const cartButtons = document.querySelectorAll('.add-to-cart'); // Выбор всех кнопок "корзина"

cartButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('active')) {
            // Если кнопка уже активна, уменьшаем счетчик и убираем класс
            cartCount--;
            button.classList.remove('active');
        } else {
            // Если кнопка не активна, увеличиваем счетчик и добавляем класс
            cartCount++;
            button.classList.add('active');
        }
        // Обновляем текст счетчика "корзина"
        cartCounter.textContent = cartCount;
    });
});
const sliderContainer = document.querySelector('.slider .slides');
const sliderDots = document.querySelectorAll('.slider .dot');

let sliderIndex = 0;

function showSliderSlide(i) {
    sliderIndex = i;
    sliderContainer.style.transform = `translateX(-${sliderIndex * 100}%)`;
    updateSliderDots();
}

function updateSliderDots() {
    sliderDots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === sliderIndex);
    });
}

sliderDots.forEach((dot, idx) => {
    dot.addEventListener('click', () => showSliderSlide(idx));
});

// Инициализация активной точки
updateSliderDots();

// Автоматическое переключение
setInterval(() => {
    sliderIndex = (sliderIndex + 1) % sliderDots.length;
    showSliderSlide(sliderIndex);
}, 50000);



// Установите дату окончания
const countdownDate = new Date("2025-10-28T23:59:59").getTime();

// Функция для добавления ведущего нуля
function formatNumber(number) {
    return number < 10 ? `0${number}` : number;
}

// Обновление таймера каждую секунду
const timerInterval = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = countdownDate - now;

    if (timeLeft > 0) {
        // Вычисление дней, часов, минут и секунд
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Обновление значений на странице с ведущими нулями
        document.getElementById("days").textContent = formatNumber(days);
        document.getElementById("hours").textContent = formatNumber(hours);
        document.getElementById("minutes").textContent = formatNumber(minutes);
        document.getElementById("seconds").textContent = formatNumber(seconds);
    } else {
        // Остановка таймера, если время истекло
        clearInterval(timerInterval);
        document.querySelector(".countdown-timer").textContent = "Time's up!";
    }
}, 1000);


// Управление каруселью
const caruselContainer = document.querySelector('.carusel-conteiner');
const caruselItems = document.querySelectorAll('.carusel-item-conteiner');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

// Функция для показа слайда
function showSlide(index) {
    const offset = Math.max(0, index - 3); // Смещение начинается с 5-го слайда
    caruselContainer.style.transform = `translateX(-${offset * 25}%)`;

    caruselItems.forEach((item, i) => {
        item.classList.toggle('active', i === index); // Добавляем/удаляем класс active
    });
}

// Обработчики событий для карусели
prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = caruselItems.length - 1; // Возвращаемся к последнему слайду
    }
    showSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= caruselItems.length) {
        currentIndex = 0; // Возвращаемся к первому слайду
    }
    showSlide(currentIndex);
});

// Инициализация
showSlide(currentIndex);


const categoriesSlides = document.querySelector('.categories-slides');
const categoriesSlide = document.querySelectorAll('.categories-slide');
const prev2Button = document.querySelector('.prev2');
const next2Button = document.querySelector('.next2');

let currentSlideIndex = 0;

function showCategorySlide(index) {
  
  // Удаляем класс active у всех кнопок
  categoriesSlide.forEach(slide => slide.querySelector('.categories-item').classList.remove('active'));

  // Добавляем класс active текущему слайду
  const currentButton = categoriesSlide[index].querySelector('.categories-item');
  currentButton.classList.add('active');
}

// Обработчики событий для кнопок переключения
prev2Button.addEventListener('click', () => {
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = categoriesSlide.length - 1;
  }
  showCategorySlide(currentSlideIndex);
});

next2Button.addEventListener('click', () => {
  currentSlideIndex++;
  if (currentSlideIndex >= categoriesSlide.length) {
    currentSlideIndex = 0;
  }
  showCategorySlide(currentSlideIndex);
});

// Инициализация
showCategorySlide(currentSlideIndex);


function startTimer2() {
    const endTime2 = new Date("2025-11-28T23:59:59").getTime(); // Установите дату окончания второго таймера

    function updateTimer2() {
        const now = new Date().getTime();
        const timeLeft = endTime2 - now;

        if (timeLeft <= 0) {
            clearInterval(timerInterval2);
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days2").textContent = days.toString().padStart(2, "0");
        document.getElementById("hours2").textContent = hours.toString().padStart(2, "0");
        document.getElementById("minutes2").textContent = minutes.toString().padStart(2, "0");
        document.getElementById("seconds2").textContent = seconds.toString().padStart(2, "0");
    }

    const timerInterval2 = setInterval(updateTimer2, 1000);
    updateTimer2(); // Обновляем таймер сразу при загрузке
}

startTimer2();


const slideGroup = document.querySelector('.our-slides-conteiner.our-slides-conteiner2');
const OurSlides = document.querySelectorAll('.our-products-slides');
const prev3Button = document.querySelector('.prev3');
const next3Button = document.querySelector('.next3');

let currentOurSlideIndex = 0;

// Функция для показа текущего слайда
function showOurSlide(index) {
    OurSlides.forEach((item, i) => {
        if (i === index) {
            item.classList.add('active'); // Добавляем класс active для текущего слайда
        } else {
            item.classList.remove('active'); // Убираем класс active для остальных
        }
    });
}

// Обработчик для кнопки "Назад"
prev3Button.addEventListener('click', () => {
    currentOurSlideIndex--;
    if (currentOurSlideIndex < 0) {
        currentOurSlideIndex = OurSlides.length - 1; // Возвращаемся к последнему слайду
    }
    showOurSlide(currentOurSlideIndex);
});

// Обработчик для кнопки "Вперед"
next3Button.addEventListener('click', () => {
    currentOurSlideIndex++;
    if (currentOurSlideIndex >= OurSlides.length) {
        currentOurSlideIndex = 0; // Возвращаемся к первому слайду
    }
    showOurSlide(currentOurSlideIndex);
});

// Инициализация
showOurSlide(currentOurSlideIndex);