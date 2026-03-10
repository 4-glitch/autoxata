// --- ЛОГІКА ДЛЯ ПРОГРЕС-БАРУ ТА GIF-ВОГНИКІВ ---
let scrollBar = document.getElementById('myScrollbar');
let fireRed = document.getElementById('fire-red');
let fireBlue = document.getElementById('fire-blue');
let lastScrollTop = 0; // Зберігаємо попередню позицію

window.addEventListener('scroll', function() {
    // Рахуємо відсоток прокрутки
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    let docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (scrollTop / docHeight) * 100;
    
    // Рухаємо смугу
    if (scrollBar) scrollBar.style.width = scrolled + '%';

    // Змінюємо гіфку залежно від напрямку гортання
    if (fireRed && fireBlue) {
        if (scrollTop > lastScrollTop) {
            // Гортаємо ВНИЗ -> Показуємо червоний, ховаємо синій
            fireRed.classList.remove('d-none');
            fireBlue.classList.add('d-none');
        } else if (scrollTop < lastScrollTop) {
            // Гортаємо ВГОРУ -> Показуємо синій, ховаємо червоний
            fireRed.classList.add('d-none');
            fireBlue.classList.remove('d-none');
        }
    }
    
    // Оновлюємо позицію (<= 0 для захисту від багів на мобільних браузерах)
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
});