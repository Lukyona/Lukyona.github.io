$(document).ready(function() {

    $('.page__content img').wrap( function(){
		
        $(this).magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            showCloseBtn: true,
            items: {
              src: $(this).attr('src')
            },
        });
				
        $(this).parent('p').css('overflow', 'auto');
				
        return '<a href="' + $(this).attr('src') + '" style="width:' + $(this).attr('width') +'px; float: left;"><figure> </figure>' + '<figcaption style="text-align: center;" class="caption">' + $(this).attr('alt') + '</figcaption>' + '</a>';
    });
});
