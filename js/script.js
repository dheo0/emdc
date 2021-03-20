$(function(){
    $(".ui-select2 > a").on("click", function(){
        var elem = $(this).siblings("ul");
        elem.stop().slideToggle();
    });

    $(".ui-select2 > a + ul li a").on("click", function(e){
        e.preventDefault();
        var selectedVal = $(this).html();
        $(this).parent().parent().siblings("a").find("span").html(selectedVal);
        $(this).parent().parent().slideUp();
    })
})