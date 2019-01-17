$("#testjs").click(function(e) {
	$('.jumbotron h1').text("Javascript is connected");
});

$("a.thumbnail").click(projectClick);

function projectClick(e) { 
    // prevent the page from reloading      
    e.preventDefault();
    // In an event handler, $(this) refers to      
    // the object that triggered the event      
    $(this).css("background-color", "#ff69b4");
}
