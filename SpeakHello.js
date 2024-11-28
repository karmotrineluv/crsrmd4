(function () {

  // Step 3: Create the helloSpeaker object
  var helloSpeaker = {};

  // The word "Hello" will be stored in this variable
  var speakWord = "Hello";

  // Step 4: Attach the speak function to the helloSpeaker object
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // Step 5: Expose the helloSpeaker object to the global scope
  window.helloSpeaker = helloSpeaker;

})();
