//menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu(){
    tombolMenu.click(function(){
        menu.toggle();
    });
    menu.click(function(){
        menu.toggle();
    });
}

$(document).ready(function (){
    var width = $(window).width();
    if (width < 990){
        klikMenu();
    }
})

// cek lebar
$(window).resize(function(){
    var width = $(window).width();
    if(width > 989){
        menu.css("display","block");
    }
    else{
        menu.css("display","none");
    }
    klikMenu();
});
//efek scroll
$(window).resize(function(){
    var scroll_pos = 0;
    $(document).scroll(function(){
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 0){
            $("nav").addClass("black");
            $("nav .logo img").show();
            $("nav .logo img").hide();
        }
        else {
            $("nav").removeClassz("black");
            $("nav .logo img").hide();
            $("nav .logo img").show();
        }

    })
})