(function () {

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // Create the helloSpeaker object
  var helloSpeaker = {
    speak: function (name) {
      console.log("Hello " + name);
    }
  };

  // Create the byeSpeaker object
  var byeSpeaker = {
    speak: function (name) {
      console.log("Good Bye " + name);
    }
  };

  // Loop over the names array and say either 'Hello' or 'Good Bye'
  for (var i = 0; i < names.length; i++) {

    // Retrieve the first letter of the current name in the loop
    var firstLetter = names[i].charAt(0).toLowerCase();

    // Compare the 'firstLetter' to 'j'
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }

})();
