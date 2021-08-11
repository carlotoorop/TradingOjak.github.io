//open
$(window).on('load',function(){
    $('.open h1').addClass('pMuncul')
});


//scroll
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    $('h1').css({
        'transform' : 'translate(0px, '+ wScroll/6+'%)'
    });

    $('.fotoawal img').css({
        'transform' : 'translate(0px, '+ wScroll/3+'%)'
    });
    //about me
    if(wScroll > $('.container').offset().top - 100){
        $('.about').addClass('muncul');
    }
    if(wScroll > $('.container').offset().top){
        $('.halaman2').addClass('muncul');
    }
});