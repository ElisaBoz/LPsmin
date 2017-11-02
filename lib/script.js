$(document).ready(function()
 {


  $('#logo').tilt({
    scale: 1.2,
    glare: true,
      maxGlare: 1.5,
      reset: false
  });
 


  $("h1#titreP").append("Les Personnages de star wars<hr class='titre'/>");


      
        var swapiAPI = "https://swapi.co/api/people/?format=json&page=1"; 
        function affiche(){ 

        
          id=1;

          $.getJSON(swapiAPI, function(data){

            $.each(data.results, function(){
              $("ol#list").append("<li data-toggle='modal' data-target='#monModal_" + id + "' class='col-3'><h4>" + this.name + "</h4></li>");
              $(".momodal").append('<div class="modal" id ="monModal_' + id + '"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">'+ this.name+'</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><ul></ul></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button></div></div></div></div>');
                for( mesdatas in this){
                  $("#monModal_" + id + " .modal-body").append("<li>" + mesdatas + " : " + this[mesdatas] + "</li>");
                }
              id++;  
            });



            var nex = data.next;


            $("#suivant").click(function(e){

              if (nex == null) {
                affiche();
              }

              else{
                e.preventDefault(e);
                $("ol#list").empty();
                //$("#suivant").empty();

                swapiAPI = nex;
                affiche();

                console.log(swapiAPI);
                }
              
            });



        });
    
      }
      affiche(); 
      $("nex").empty(); 

      // $( "#page2" ).click(function() 
      // {
      //   if(next==null)
      //   {
      //     affiche();
      //   }
      //   else
      //   {
      //     id = next;
      //     $('#listeperso').empty();
      //     $('#pagination').empty();
      //     affiche();
      //   } 
      // });
//     });
//   }
//   affiche();
// });
});







































