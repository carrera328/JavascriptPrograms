$(document).ready(function(){
    

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
          
          
          
          
          
          
          
            var api = "https://fcc-weather-api.glitch.me/api/current?lat="+latitude+"&lon="+longitude;
        
            $.getJSON(api, function(data){
                $("h1").addClass("text-center");
                $("h1").text(data.weather[0].description);
                var conversion = (data.main.temp * 1.8 + 32);
                var celsius = (data.main.temp);
                $("#city").text(data.name);
                $("h2").text(Math.round(conversion)).append(String.fromCharCode(176) + " Fahrenheit");
                $("#target").append("<img src="+data.weather[0].icon +">");
                var i = 0;
                $("button").click(function(){
                    if (i === 0) {
                        $("h2").text(Math.round(celsius)).append(String.fromCharCode(176) + " Celsius");
                        i++;
                    } else {
                        if (i === 1) {
                            $("h2").text(Math.round(conversion)).append(String.fromCharCode(176) + " Fahrenheit");
                            i--;
                        }
                    }
                });
                
                
                
                
                
            });
            
        })
    }
   
});
