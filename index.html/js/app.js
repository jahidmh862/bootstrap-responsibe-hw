var modeIcon = document.getElementById('mode')

modeIcon.addEventListener('click',function(){
    document.body.classList.toggle('darkmode');

    if(modeIcon.classList.contains('fa-moon')){
        modeIcon.classList.add('fa-sun')
        modeIcon.classList.remove('fa-moon')
    }
    else{
        modeIcon.classList.remove('fa-sun')
        modeIcon.classList.add('fa-moon')
    }
})

$(function() {
    $(window).on('scroll', function(){
        let scrollsize = $(window).scrollTop();
    // menu fixed
        if(scrollsize > 60){
            $('#nav').addClass('active');
        }
        else{
            $('#nav').removeClass('active');
        }
        
    // back to top
        if(scrollsize >500){
            $('#for_top').show(400);
        }
        else{
            $('#for_top').hide(300);
        }
     
    })


    // back to top
    $('#for_top').on('click', function(){
        $('html,body').animate({
        scrollTop:0
    })
    })

    
    // Preloader
    $(window).on('load', function() {
        $('#preloader').fadeOut(1500);
    })

})

