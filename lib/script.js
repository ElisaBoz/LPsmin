$(document).ready(function()
 {
  $('.flexslider').flexslider({
    animation: "slide"
  });






 // $( "img.mon_img" ).hover(
 //  function() {
 //   console.log("hover")	;
 //  });

 //  $("img.mon_img").hover(
 //  	function(){
 //  		var myVar = $(this).attr("src");
 //  		console.log(myVar);
 //  	});


  var swapiAPI = "https://swapi.co/api/people/1/?format=json";
    $.getJSON(swapiAPI, function(data){
      console.log(data.name);
      $("h2").html(data.name);
  })

});

