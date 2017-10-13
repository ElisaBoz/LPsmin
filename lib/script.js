$(document).ready(function()
 {
  $('.flexslider').flexslider({
    animation: "slide"
  });






 $( "img.mon_img" ).hover(
  function() {
   console.log("hover")	;
  });

  $("img.mon_img").hover(
  	function(){
  		var myVar = $(this).attr("src");
  		console.log(myVar);
  	});

});

