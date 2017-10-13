$(document).ready(function()
 {
  $('.flexslider').flexslider({
    animation: "slide"
  });





  // au hover  

 // $( "img.mon_img" ).hover(
 //  function() {
 //   console.log("hover")	;
 //  });

 //  $("img.mon_img").hover(
 //  	function(){
 //  		var myVar = $(this).attr("src");
 //  		console.log(myVar);
 //  	});


  // var swapiAPI = "https://swapi.co/api/people/1/?format=json"; // récupérer Skywalker
  //   $.getJSON(swapiAPI, function(data){
  //     console.log(data);
  //     $("h2").html(data.name);// ajouter le nom dans le h2


    // var swapiAPI = "https://swapi.co/api/people/?format=json"; // 
    // $.getJSON(swapiAPI, function(data){
    //   console.log(data);
      
    //   $.each(data.results, function(){
    //     console.log(this.name);
    //     $("ol").append("<li><h2>" + this.name + "</h2></li>");
    //     //$(this.name).( function(){

    //     //})
    //   })

    // })

    // recuperer les infos d'un perso et le mettre dans un modal

    var swapiAPI = "https://swapi.co/api/people/13/?format=json"; // 
    $.getJSON(swapiAPI, function(data){
      console.log(data);

      $("ol").append(data.name);
       $("h5.modal-title").append(data.name);


      for( mesdatas in data){

        console.log(mesdatas + " is " + data[mesdatas]);

        
        $(".modal-body").append("<li>" + mesdatas + " : " + data[mesdatas] + "</li>");
      }

    });

});

