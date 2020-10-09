$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('nav').addClass('black-background');
    }
    else{
        $('nav').removeClass('black-background');
    }
});

