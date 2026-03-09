// --- FAQ PAGINATION (Пагінація популярних питань) ---
function initFaqPagination() {
    let page1 = document.getElementById('faq-page-1');
    let page2 = document.getElementById('faq-page-2');
    let btnNext = document.getElementById('btn-next-faq');
    let btnPrev = document.getElementById('btn-prev-faq');

    if (!page1 || !page2 || !btnNext || !btnPrev) return;

    btnNext.onclick = function() {
        page1.classList.add('d-none'); 
        page2.classList.remove('d-none'); 
        btnNext.classList.add('d-none'); 
        btnPrev.classList.remove('d-none'); 
    };

    btnPrev.onclick = function() {
        page2.classList.add('d-none'); 
        page1.classList.remove('d-none'); 
        btnPrev.classList.add('d-none'); 
        btnNext.classList.remove('d-none'); 
    };
}

initFaqPagination();