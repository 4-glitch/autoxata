// Коли користувач скролить сторінку, запускаємо функцію

window.addEventListener('scroll', function() {
        // Висота, на яку ми прокрутили сторінку
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        
        // Загальна висота сторінки мінус висота вікна браузера
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        
        // Захист: якщо сторінка не має скролу (height = 0), нічого не робимо
        if (height <= 0) return;
        
        // Вираховуємо відсоток
        let scrolled = (winScroll / height) * 100;
        
        // Застосовуємо ширину до нашої рижої смужки
        document.getElementById("myScrollbar").style.width = scrolled + "%";
    }
);