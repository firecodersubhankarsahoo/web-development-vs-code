$(document).keypress(function(event) {
    $("h1").text(event.key);
})


// OR  for the best practice, use on() instead of click() for dynamic elements(it can take any event type) 👇🏻👇🏻👇🏻

/*


$(document).on("keypress", function(event) {
    $("h1").text(event.key);
})


*/