const navPanel = document.querySelector('.nav-panel');
const navInitial = document.querySelector('.nav-initial');
const navExpanded = document.querySelector('.nav-expanded');
const workBtn = document.getElementById('work');

navInitial.classList.add('active');

workBtn.addEventListener('click', () => {
    navPanel.classList.add('expanded');
    navExpanded.classList.add('active');
});