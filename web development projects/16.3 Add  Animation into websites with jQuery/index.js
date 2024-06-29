$(".hiding").on("click", function(){   // hide the element(h1) when click   
    $("h1").hide();
})


$(".reappear").on("click", function(){ //show the hided element
    $("h1").show();
})


$(".togg").on("click", function(){//toggle b/w hide and reappear when click one after another to this particular button
    $("h1").toggle();
})




$(".fadeo").on("click", function(){ // fade out the element when click on the button
    $("h1").fadeOut();
})



$(".fadeI").on("click", function(){ // fade in the element when click on the button
    $("h1").fadeIn();
})


$(".toggfade").on("click", function(){//toggle b/w fadeout and fadein when click one after another to this particular button
    $("h1").fadeToggle();
})



$(".slideu").on("click", function(){ // slide up when clicked
    $("h1").slideUp();
})

$(".slided").on("click", function(){ // slide down when clicked
    $("h1").slideDown();
})



$(".toggsl").on("click", function(){  //toggle b/w slide up and slide down when click one after another to this particular button
    $("h1").slideToggle();
})





$(".opacity").on("click", function(){ //change the opacity to 0.3 inside the animation you can add those css rules which has a numeric value inside a curly bracis
    $("h1").animate({opacity:0.3});
})


$(".mar").on("click", function(){
    $("h1").animate({margin:"20%"});
})

$(".multiple").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity:0.3}).animate({opacity:1}).animate({opacity:0.3}).animate({opacity:1}).animate({opacity:0.3}).animate({opacity:1}).animate({opacity:0.3}).animate({opacity:1}).animate({opacity:0.3}).animate({opacity:1}).animate({opacity:0.3}).animate({opacity:1});
})



/* you dont need to need to remember all these methods all the time go to the :--

1. https://www.w3schools.com/jquery/jquery_ref_effects.asp

2. https://api.jquery.com/slideDown/


*/