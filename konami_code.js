const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var keypresses = [];

function init() {
  //Add event listeners
  var detector = document.querySelector('#detector');
  detector.addEventListener('press', detectKeys);
}

function detectKeys(e){
  //Call on event
  //Add keys to Array
  //If array is full, check if presses match konamiCode
}