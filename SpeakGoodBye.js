(function () {

  // Step 7: Create the byeSpeaker object
  var byeSpeaker = {};

  // The word "Good Bye" will be stored in this variable
  var speakWord = "Good Bye";

  // Step 8: Attach the speak function to the byeSpeaker object
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // Step 9: Expose the byeSpeaker object to the global scope
  window.byeSpeaker = byeSpeaker;

})();
