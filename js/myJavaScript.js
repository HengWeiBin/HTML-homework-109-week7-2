$(document).ready(function(){
    let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (width > 1000){
        Bounce($(".homeBtn"));
        Bounce($(".galleryBtn"));
        Bounce($(".serviceBtn"));
    }
});

function Bounce(button){
    button.mouseenter(function(){
        button.addClass("bounceIn");
    });
    button.mouseleave(function(){
        button.removeClass("bounceIn");
    });
};