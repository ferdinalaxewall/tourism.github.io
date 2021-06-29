
// Active and remove menu

const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active');

    const navCollapse = document.querySelector('.navbar-collapse');
    navCollapse.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));


// Typing Effect

const texts = ['Rafting', 'Outbound', 'Paintball', 'Camping', 'Offroad'];
let count = 0 ;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    
    if (count === texts.length) {
        count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    
    document.querySelector('.hero-subtitle').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 500);
}());

// Layanan Card Animation

$('.card-btn').click(function(){

    $(this).toggleClass('show');
    $(this).prev().toggle('.show');
});


// Parallax

$(window).scroll(function() {

     var wScroll = $(this).scrollTop();

     if (wScroll > 30) {
         $('.navbar').addClass('scroll');
     }else{
         $('.navbar').removeClass('scroll');
     }
});


