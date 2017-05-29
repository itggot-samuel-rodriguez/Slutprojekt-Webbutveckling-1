function showMenu() {
    var menuPage = document.querySelector(".meny_page");
    menuPage.classList.remove('hidden');
    menuPage.classList.add('visible');
    document.querySelector(".scrim").classList.add("scrim_show");
}

function hideMenu() {
    var menuPage = document.querySelector(".meny_page");
    console.log(menuPage.classList);
    menuPage.classList.add("hidden");
    
    console.log(menuPage.classList)
    document.querySelector(".scrim").classList.remove("scrim_show");
}
$(function() {
    new WOW().init();
    
    $("a.scroll").click(function(event){
        event.preventDefault();
        $("html,body").animate({scrollTop:$(this.hash).offset().top}, 500);
    });
});

$(window).scroll(function(){
    console.log('hi');
    var wScroll = $(this).scrollTop();

    $('.forground').css({
        'transform' : 'translate(0px, -'+ wScroll /10 +'%)'
    });
    
    $('.mellanground').css({
        'transform' : 'translate(0px, '+ wScroll /3 +'%)'
    });
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("sprite");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 9000);    
}