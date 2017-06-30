(function(){

    var burger = document.querySelector('.burger-container'),
        header = document.querySelector('.the-header');

    burger.onclick = function() {
        header.classList.toggle('menu-opened');
    }
}());