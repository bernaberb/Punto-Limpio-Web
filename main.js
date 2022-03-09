//Que el header ocupe el ancho de la pantalla
$(document).ready(function(){
    $('.header').height($(window).height());
  })

//Que se deslice smooth al anchor
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});