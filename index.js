$(function(){
         $.ajax({
             cache: "false",
             type: "POST",
             url: "http://www.baidu.com",
             data: {
             	Latitude:  position.coords.latitude ,
             	Longitude:  position.coords.longitude ,
                },
             success: function (data) {
                   if(data=="1"){
                       window.location="http://www.baidu.com";
                   }else{
                   	$("#demo").html("Latitude: " + position.coords.latitude + "<br />Longitude: " + position.coords.longitude);
                   }
             },
         });
})