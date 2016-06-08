(function (window) {
var speakWord = "Good bye";
var byeSpeaker = {};
byeSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
};
window.byeSpeaker = byeSpeaker;
})(window);