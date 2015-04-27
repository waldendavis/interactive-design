// 1) Find your API's unique code.
//    To do this, go to your API's page and copy the string of numbers and letters after "apis/" in the URL
//    Paste this code in line 10 of the below code after "api/" and before the "?"

// 2) Find your username's unique API key.
//    When you are logged into Kimono, click your name at the top right and click "Account".
//    Your API key will appear. Paste this code in line 10 of the below code after "apikey-"

$.ajax({
    "url":"https://www.kimonolabs.com/api/3n4p6oy6?apikey=iMdDmR4fkuEdO38181VbIPI1uh3GyOGm",
    "crossDomain":true,
    "dataType":"jsonp",
    // Make a call to the Kimono API following the "url" 
    
    'success': function(response){ 
    // If the call request was successful and the data was retrieved, this function will create a list displaying the data
        
    var collection = response.results.collection1;

    for (var i = 0; i < 3; i++){

      var randomCollection = collection[Math.floor(Math.random()*collection.length)];
      var photoURL = randomCollection.photo.href;
      var photoTEXT = randomCollection.location.text;

      if(i == 0){
        $('.container').append('<img src="' + photoURL + '">');
        $('.location').append('<div>' + photoTEXT + '</div>')
        $('.container').click(function(){
          $('.location').show(1000);
        });
      }

    }

  }
 
  })