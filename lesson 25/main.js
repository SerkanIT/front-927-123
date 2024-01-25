let burger = document.querySelector('.burger')
let burger_menu = document.querySelector('.burger_menu')
let button = document.querySelector('#buttonw');

burger.addEventListener('click', function () {
    burger_menu.classList.toggle('active')
    burger_menu.classList.remove('close')
})

button.addEventListener('click', function () {
    burger_menu.classList.remove('active')
    burger_menu.classList.toggle('close')
})
