$(function(){
         $.ajax({
             cache: "false",
             type: "POST",
             url: "https://axcd.github.io/demo/1.html",
             data: {
             	Latitude:  position.coords.latitude ,
             	Longitude:  position.coords.longitude ,
                },
             success: function (data) {
                   if(data=="1"){
                       window.location="https://axcd.github.io/demo/ok.html";
                   }else{
                   	$("#demo").html("Latitude: " + position.coords.latitude + "<br />Longitude: " + position.coords.longitude);
                   }
             },
         });
})