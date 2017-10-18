$(document).ready(function()
 {
  $('.flexslider').flexslider({
    animation: "slide"
  });


  $("h1#titreP").append("Les Personnages de star wars<hr class='titre'/>");


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

  

 

    
//     var swapiAPI = "https://swapi.co/api/people/?format=json"; 
//     $.getJSON(swapiAPI, function(data){
//       console.log(data.results);
//       //$("h2").html(data);// ajouter le nom dans le h2
//       var ma_page = $(data.results);
//       console.log(ma_page)
// var id = 1;
   
//       var swapiAPI = "https://swapi.co/api/people/?format=json&page="; // 
//       $.getJSON(swapiAPI, function(data){
//         //console.log(data);
//         $.each(data.results, function(){
//           //console.log(this.name);
//           $("ul#list").append("<li data-toggle='modal' data-target='#monModal_" + id + "'><h4>" + this.name + "</h4></li>");

//           $(".momodal").append('<div class="modal" id ="monModal_' + id + '"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">'+ this.name+'</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><ul></ul></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button></div></div></div></div>');
//             for( mesdatas in this){
//               $("#monModal_" + id + " .modal-body").append("<li>" + mesdatas + " : " + this[mesdatas] + "</li>");
//             }
//         id = id+1;  
//         });

//       });

     

      //faire un nexpage


//});







        var swapiAPI = "https://swapi.co/api/people/?format=json&page=1"; 
        function affiche(){ 

        var id = 1;
        
        $.getJSON(swapiAPI, function(data){
          $.each(data.results, function(){
            $("ul#list").append("<li data-toggle='modal' data-target='#monModal_" + id + "' class='col-3'><h4>" + this.name + "</h4></li>");
            $(".momodal").append('<div class="modal" id ="monModal_' + id + '"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">'+ this.name+'</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><ul></ul></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button></div></div></div></div>');
              for( mesdatas in this){
                $("#monModal_" + id + " .modal-body").append("<li>" + mesdatas + " : " + this[mesdatas] + "</li>");
              }
          id = id+1;  
          });

          var nex = data.next;

          $("button#next").click(function(e){
            e.preventDefault(e);
            $("ul#list").empty();
            
            swapiAPI = nex;
            affiche();
          });

        //$("a#next").on('click');
          // dire que les valeurs vont aller dans le lien au click


        });
    
      }
      affiche();  

});







































