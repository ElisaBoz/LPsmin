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

    // var swapiAPI = "https://swapi.co/api/people/13/?format=json"; // 
    // $.getJSON(swapiAPI, function(data){
    //   console.log(data);
    //   $("ol").append(data.name);
    //   $("h5.modal-title").append(data.name);

    //   for( mesdatas in data){
    //     console.log(mesdatas + " is " + data[mesdatas]);
    //     $(".modal-body").append("<li>" + mesdatas + " : " + data[mesdatas] + "</li>");
    //   }

    // });

  
    // var swapiAPI = "https://swapi.co/api/people/?format=json"; // 
    // $.getJSON(swapiAPI, function(data){
    //   console.log(data);
    //   var id = 1;
    //   $.each(data.results, function(){
    //     //console.log(this.name);
        
    //     $("ol").append("<li data-toggle='modal' data-target='#monModal_" + id + "'><h2>" + this.name + "</h2></li>");

    //     $(".momodal").append('<div class="modal" id ="monModal_' + id + '"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">'+ this.name+'</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><ul></ul></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button></div></div></div></div>');
    //       for( mesdatas in this){
    //         $("#monModal_" + id + " .modal-body").append("<li>" + mesdatas + " : " + this[mesdatas] + "</li>");
    //       }
    //   id = id+1;  
    //   })
      

    // })

    
    for(i=1; i<10; i++){
      var swapiAPI = "https://swapi.co/api/people/?format=json&page="+i; // 
      $.getJSON(swapiAPI, function(data){
        console.log(data);
        var id = 1;
        $.each(data.results, function(){
          //console.log(this.name);
          
          $("ol").append("<li data-toggle='modal' data-target='#monModal_" + id + "'><h2>" + this.name + "</h2></li>");

          $(".momodal").append('<div class="modal" id ="monModal_' + id + '"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">'+ this.name+'</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><ul></ul></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button></div></div></div></div>');
            for( mesdatas in this){
              $("#monModal_" + id + " .modal-body").append("<li>" + mesdatas + " : " + this[mesdatas] + "</li>");
            }
        id = id+1;  
        });

      });i=i+1
    }
   

    
    

});






