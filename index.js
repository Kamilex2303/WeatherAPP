$(document).ready(function getWeather(){
  $("#submit").click(function(){
    var city = $("#city").val();
    $.ajax({
      url:'https://api.openweathermap.org/data/2.5/weather?q='+city+"&units=metric"+"&APPID=8549ed9506b87ef822246d83ee470054",
      type:"GET",
      dataType:"jsonp",
      success:function(data){
      var widget = show(data);
        $("#show").html(widget);
        $("#city").val('');
        
    }
      
    });
  });
  
});

function show(data){
  return "<h3><strong>City : </strong>"+data.name+" "+data.sys.country+"</h3>"+
    "<h3> <strong>Weather : </strong> "+data.weather[0].main+"</h3>"+
  "<img src=http://openweathermap.org/img/w/"+ data.weather[0].icon+".png>"+
         "<h3> <strong> Temperature : </strong>" + data.main.temp + "&deg;C</h3>"  +
         "<h3> <strong> Pressure : </strong>" + data.main.pressure + "hPa</h3>" +
         "<h3> <strong> Humidity : </strong>" + data.main.humidity + "%</h3>" +
         "<h3> <strong> Wind speed : </strong>" + data.wind.speed + "m/s</h3>" ;
}