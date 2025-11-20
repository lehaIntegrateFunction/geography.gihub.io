const sections = document.querySelectorAll('.section');
const navBtns = document.querySelectorAll('.nav-btn');

function showSection(index) {
    sections.forEach(section => section.classList.remove('active'));
    navBtns.forEach(btn => btn.classList.remove('active'));

    sections[index].classList.add('active');
    navBtns[index].classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}
