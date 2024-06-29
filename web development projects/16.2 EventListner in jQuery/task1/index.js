$("h1").click(function() {
    $("h1").css("color", "red");
})


//OR  for the best practice, use on() instead of click() for dynamic elements(it can take any event type)

/*


$("h1").on("click", function() {
    $("h1").css("color", "red");
})


*/