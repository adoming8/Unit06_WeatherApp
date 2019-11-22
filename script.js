
 // moment.js to set the current date

 let dateNo = moment();
 let currentTime = dateNo.format("Hr")
 currentTime = parseInt(currentTime)
 $("#currentDay").text(dateNo.format("dddd, MMMM DD"));

 // on.click AP request & local storage
  $("#btn_findcity").on("click", function(event) {  
    event.preventDefault();
    var city = $("#desiredcity-input").val();
      console.log(city)
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=imperial&appid=2037beb12c5ae83890a3ac50a7a50a6a"

    $.get(queryURL).then(function(data){      // API request 
      $(".city").text(data.name).css("color",);
      $(".temp").text(data.main.temp+ " °F");
      $(".humidity").text(data.main.humidity);
      $(".wind").text(data.wind.speed);   


      // Local storage on the search bar 

      var toDo_obj = {      // obj with user hourly input values
        key_9AM: firstuserinput_9AM.value,
        }
   localStorage.setItem("toDo_9AM", toDo_obj.key_9AM);
    })


    var city2 =$("#desiredcity-input").val();
    var forecastqueryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city2 + "&units=imperial&appid=2037beb12c5ae83890a3ac50a7a50a6a"
    // console.log(forecastqueryURL)

    $.get(forecastqueryURL).then(function(data){    //API request 
      console.log(data)
      $("#max_temp1").text(data.list[4].main.temp_max);
      $("#min_temp1").text(data.list[0].main.temp_min);

      $("#max_temp2").text(data.list[12].main.temp_max);
      $("#min_temp2").text(data.list[8].main.temp_min);

      $("#max_temp3").text(data.list[20].main.temp_max);
      $("#min_temp3").text(data.list[16].main.temp_min);

      $("#max_temp4").text(data.list[28].main.temp_max);
      $("#min_temp4").text(data.list[24].main.temp_min);

      $("#max_temp5").text(data.list[36].main.temp_max);
      $("#min_temp5").text(data.list[32].main.temp_min);
    })
    
  });

  // Local storage
  var firstuserinput_9AM = document.getElementById("desiredcity-input");
  var toDo_9amlocalstorage = localStorage.getItem("toDo_9AM");
  firstuserinput_9AM.value = toDo_9amlocalstorage;


  $(".default_city").on("click", function(event) {  
    event.preventDefault();
    var city = $(this).data('city')
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city+ "&units=imperial&appid=2037beb12c5ae83890a3ac50a7a50a6a"

    $.get(queryURL).then(function(data){      // API request 
      // console.log(data)
      $(".city").text(data.name).css("color",);
      $(".temp").text(data.main.temp + " °F");
      $(".humidity").text(data.main.humidity);
      $(".wind").text(data.wind.speed); 
      $(".uv").text(data[0]);   
    })

    var city1 = $(this).data('city')
    var forecastqueryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city1 + "&units=imperial&appid=2037beb12c5ae83890a3ac50a7a50a6a"
    // console.log(forecastqueryURL)

    $.get(forecastqueryURL).then(function(data){      // API request 
      console.log(data)
      // console.log(data.list[0].main.temp_min) // temp at 6AM & 6PM

      $("#max_temp1").text(data.list[0].main.temp_max);
      $("#min_temp1").text(data.list[4].main.temp_min);

      $("#max_temp2").text(data.list[8].main.temp_max);
      $("#min_temp2").text(data.list[12].main.temp_min);

      $("#max_temp3").text(data.list[16].main.temp_max);
      $("#min_temp3").text(data.list[20].main.temp_min);

      $("#max_temp4").text(data.list[24].main.temp_max);
      $("#min_temp4").text(data.list[28].main.temp_min);

      $("#max_temp5").text(data.list[32].main.temp_max);
      $("#min_temp5").text(data.list[36].main.temp_min);
    })
  });
