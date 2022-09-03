// declare menuToggle
const menuToggle = document.querySelector('#header .toggle-button');
// declare getNavigation
const getNavigation = document.querySelectorAll('#header .navigation');

menuToggle.addEventListener('click', function () {
  //   console.log('menuToggle');
  getNavigation.forEach((col) => col.classList.toggle('active'));
});

// gallery slide
var slideContainer = document.getElementById('slide');
var item = slideContainer.getElementsByClassName('slide-item');

function next() {
  slideContainer.append(item[0]);
}

function prev() {
  slideContainer.prepend(item[item.length - 1]);
}
