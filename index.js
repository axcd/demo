 var x = document.getElementById("demo");
function getLocation() {
   if (navigator.geolocation)
      {
      navigator.geolocation.watchPosition(showPosition);
     }
   
  else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
      x.innerHTML = "Latitude: " + position.coords.latitude +
     "<br />Longitude: " + position.coords.longitude;
  }
    <!--     $.ajax({
             cache: "false",
             type: "POST",
             url: "https://axcd.github.io/demo/1.html",
             data: {
                      Latitude:   position.coords.latitude+"" ,
                      Longitude:  position.coords.longitude+"",
                   },
             success: function (data) {
                   if(data=="0"){
                       window.location="https://axcd.github.io/demo/ok.html";
                   }else{
                       $("#demo").html("fail");
                   }
             },
         });
}-->