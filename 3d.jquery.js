$(function(){
    var $middle = $('.middle').first(),
        $window = $('body'),
        $flipper = $('.flipper'),
        w = {width: $window.width(), height: $window.height()},
        $overlay = $('.overlay');
    $window.on('mousemove touchmove', function(e){
        var x = e.screenX,
            y = e.screenY,
            percent = x/w.width,
            percentY = y/w.height,
            angle = (1 - percent) * -180,
            diff_from_50_pct = 1 - Math.abs(percent - .5);

        $overlay.css('opacity', (diff_from_50_pct - .5) * .2);
        // $flipper.css('-webkit-perspective', percentY * w.width);
        $middle.css('-webkit-transform', 'rotateY('+angle+'deg)');
    });
    $(window).on('resize', function(){
        w.width = $window.width();
        w.height = $window.height();
        $flipper.css('-webkit-perspective', w.width * 1.25);
    });
    $(window).trigger('resize');
})