// --- ЛОГІКА ДЛЯ СТРІЛОЧКИ ВГОРУ ---
let clickUpBtn = document.querySelector('.clickUp');
let processSection = document.getElementById('process');
let mapSection = document.getElementById('idMap');
window.addEventListener('scroll', function() {if (processSection && mapSection) {
    let processTop = processSection.offsetTop; let mapTop = mapSection.offsetTop; let hidePoint = mapTop - window.innerHeight + 50;
if (window.scrollY > processTop && window.scrollY < hidePoint) clickUpBtn.classList.add('show-btn');
else clickUpBtn.classList.remove('show-btn');}});