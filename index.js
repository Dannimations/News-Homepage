const menu = document.querySelector('.menu')

menu.addEventListener('click', o => {
    document.querySelector('.overlay').classList.add('show');
    document.querySelector('.shadow').style.display = 'block'
    document.querySelector('body').style.overflow = 'hidden';
});
document.querySelector('#closeMenu').addEventListener('click', e => {
    document.querySelector('.overlay').classList.remove('show');
    document.querySelector('.shadow').style.display = 'none'
    document.querySelector('body').style.overflow = 'scroll';
});