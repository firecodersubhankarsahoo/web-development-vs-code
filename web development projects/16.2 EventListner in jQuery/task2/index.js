$("button").click(function() {
    $("h1").css("color", "purple");
})


//OR  for the best practice, use on() instead of click() for dynamic elements(it can take any event type)



/*
$("button").on("click", function() {
    $("h1").css("color", "purple");
})


*/