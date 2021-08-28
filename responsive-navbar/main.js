const toggleBtn = document.querySelector('.nav_hambuger');
const items = document.querySelector('.nav_items');

toggleBtn.addEventListener('click', () => {
    items.classList.toggle('active');
});
