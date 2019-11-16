
// This .on("click") function will trigger the AJAX Call
  $("#btn_findcity").on("click", function(event) {

    event.preventDefault();
    // alert("yes")

    var city = $("#desiredcity-input").val();
      console.log(city)
    // Here we construct our URL
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=imperial&appid=2037beb12c5ae83890a3ac50a7a50a6a"


 // Retrieved data will be dumped here 

    // make request
    $.get(queryURL).then(function(data){
      console.log(data);
      $(".city").html( `<h3> City: ${data.name} Weather</h3> `).css("color",);
      $(".wind").html( ` <h3> Wind Speed: ${data.wind.speed}</h3> `);
      $(".humidity").html(` <h3> Humidity: ${data.main.humidity}</h3> `);
      $(".temp").html(` <h3> Temperature: ${data.main.temp}</h3> `);

    })

  });
 