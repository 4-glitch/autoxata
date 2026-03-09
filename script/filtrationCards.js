// 1. DOM-методи: Знаходимо всі кнопки і всі картки на сторінці
// querySelectorAll - шукає всі елементи, що підходять під опис, і складає їх у список (схожий на масив)
let buttons = document.querySelectorAll('#service-filters button');
let cards = document.querySelectorAll('.service-item');
// 2. Знайомий вам цикл for: проходимося по кожній кнопці
for (let i = 0; i < buttons.length; i++) {
    
    // Вішаємо функцію на подію кліку (onclick) для кожної кнопки
    buttons[i].onclick = function() {
        
        // --- КРОК 1: ПРАЦЮЄМО З КНОПКАМИ ---
        
        // Знаходимо ту кнопку, яка зараз активна, і забираємо в неї клас 'active'
        document.querySelector('#service-filters .active').classList.remove('active');
        
        // this - це вбудоване слово, яке означає "саме ця кнопка, на яку зараз клікнули"
        // Додаємо їй клас 'active'
        this.classList.add('active');
        // --- КРОК 2: ПРАЦЮЄМО З КАРТКАМИ ---
        
        // Читаємо атрибут data-filter у кнопки, на яку клікнули (наприклад, 'engine')
        let filterValue = this.getAttribute('data-filter');
        // Знову цикл for: перевіряємо кожну картку послуг
        for (let j = 0; j < cards.length; j++) {
            
            // Читаємо атрибут data-category у поточної картки
            let cardCategory = cards[j].getAttribute('data-category');
            // Знайоме вам умовне розгалуження та логічний оператор АБО (||)
            if (filterValue === 'all' || filterValue === cardCategory) {
                // Якщо вибрано "Всі послуги" АБО категорія картки збігається з фільтром:
                // Показуємо картку (видаляємо клас, який її ховає)
                cards[j].classList.remove('hide-service');
            } else {
                // Інакше: додаємо клас, який ховає картку (в CSS ми прописали йому display: none)
                cards[j].classList.add('hide-service');
            }
        }
    };
}

