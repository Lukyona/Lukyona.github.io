$(document).ready(function() {

    $('.page__content img').wrap( function(){
		
        $(this).magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            showCloseBtn: close,
          items: {
              src: $(this).attr('src')
            },
        });
				
        $(this).parent('p').css('overflow', 'auto');
				
    });
});
