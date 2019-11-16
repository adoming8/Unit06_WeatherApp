
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
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=imperial&appid=2037beb12c5ae83890a3ac50a7a50a6a"

    $.get(queryURL).then(function(data){      // API request 
      $(".city").html( `<h3> City: ${data.name} Weather </h3>`).css("color",);
      $(".wind").html( ` <h3> Wind Speed: ${data.wind.speed}</h3> `);
      $(".humidity").html(` <h3> Humidity: ${data.main.humidity}</h3> `);
      $(".temp").html(` <h3> Temperature: ${data.main.temp}</h3>`);
      

      var toDo_obj = {                  // obj with user hourly input values
        key_9AM: firstuserinput_9AM.value,
        }
   localStorage.setItem("toDo_9AM", toDo_obj.key_9AM);
    })
  });

  var firstuserinput_9AM = document.getElementById("desiredcity-input");
  var toDo_9amlocalstorage = localStorage.getItem("toDo_9AM");
  firstuserinput_9AM.value = toDo_9amlocalstorage;


  // $("#Austin").on("click", function(event) {  
  //   event.preventDefault();
  //   var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=Austin&units=imperial&appid=2037beb12c5ae83890a3ac50a7a50a6a"

  //   $.get(queryURL).then(function(data){      // API request 
  //     $(".city").html( `<h3> City: ${data.name} Weather </h3>`).css("color");
  //     $(".wind").html( ` <h3> Wind Speed: ${data.wind.speed}</h3> `);
  //     $(".humidity").html(` <h3> Humidity: ${data.main.humidity}</h3> `);
  //     $(".temp").html(` <h3> Temperature: ${data.main.temp}</h3>`);
  //   })
  // });

  $(".default_city").on("click", function(event) {  
    event.preventDefault();
    var city = $(this).data('city')
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city+ "&units=imperial&appid=2037beb12c5ae83890a3ac50a7a50a6a"
    
    // "http://api.openweathermap.org/data/2.5/weather?q=Austin&units=imperial&appid=2037beb12c5ae83890a3ac50a7a50a6a"

    $.get(queryURL).then(function(data){      // API request 
      $(".city").html( `<h3> City: ${data.name} Weather </h3>`).css("color");
      $(".wind").html( ` <h3> Wind Speed: ${data.wind.speed}</h3> `);
      $(".humidity").html(` <h3> Humidity: ${data.main.humidity}</h3> `);
      $(".temp").html(` <h3> Temperature: ${data.main.temp}</h3>`);
    })
  });
