$(document).ready(function() {
  const headerClosed = document.querySelector('.header__closed');
  const headerList = document.querySelector('.header__list');
  const headerOpen = document.querySelector('.header__open');

  headerClosed.addEventListener('click', () => {
    headerList.classList.add('open');
    headerOpen.classList.add('open');
  });

  headerOpen.addEventListener('click', () => {
    headerList.classList.remove('open');
    headerOpen.classList.remove('open');
  });
});