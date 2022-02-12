$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function redirecionar() {
    return window.open('https://www.ironhack.com/br/desenvolvimento-web/front-end-x-back-end-qual-e-a-diferenca', '_blank');
}

$(function(){
    let paragrafo = document.getElementById('alertRedirecionamento');
    $(".botao").mouseenter(function(){
        paragrafo.style.display = 'block';
        paragrafo.style.color = 'green';
    });
    $(".botao").mouseout(function(){
        paragrafo.style.display = 'none';
    });
});
