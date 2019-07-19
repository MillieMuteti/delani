$(document).ready(function(){
    $("#product-img, .product-p").click(function(){
        $(".product-description").fadeToggle();
        $(".product").fadeToggle();
    });
    $("#design-img,.design-p").click(function(){
        $(".design-description").fadeToggle();
        $(".design").fadeToggle();
    });
    $("#dev-img,.dev-p").click(function(){
        $(".dev-description").fadeToggle();
        $(".dev").fadeToggle();
    });
});