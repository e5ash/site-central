var Popup = {
    block: $('.popup'),
    callback: $('.popup.popup_callback'),
    write: $('.popup.popup_write'),
    window: $('.popup .window'),
    container: $('.popup .container'),
    title: $('.popup .title'),
    close: $('.popup .close'),
    bg: $('.popup .bg'),
    speed: 500,
    funShow: function (what) {
        var scrollTop = $(window).scrollTop(),
            height = $(window).height();
        what.css('padding-top', scrollTop + 20).fadeIn(this.speed).height(height - scrollTop - 20);
    },
    funHide: function () {
        this.block.fadeOut(this.speed);
    }
}

$('.fix-btns .chat').click(function() {
    Popup.funShow(Popup.write);
});

$('.fix-btns .phone').click(function() {
    Popup.funShow(Popup.callback);
});

Popup.close.click(function() {
    Popup.funHide();
});

Popup.bg.click(function() {
    Popup.funHide();
});
