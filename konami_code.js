const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var keypresses = [];

function init() {
  //Add event listeners
  var detector = document.querySelector('#detector');
  detector.addEventListener('keypress', detectKeys);
}

function detectKeys(e){
  //Call on event
  //Add keys to Array
  //If array is full, check if presses match konamiCode
  let key = e.detail || e.which;
  console.log(key);
  if (keypresses.length === 10){
    console.log(`removed keypress ${keypresses.shift()}`);
  }
  else if (keypresses.length > 10){
    console.log(`Something went wrong. There are ${keypresses.length} elements in keypresses`);
    keypresses.length = 9;
  }
  
  keypresses.push(key);
  
  let correct = 0;
  if (keypresses.length === 10){
    for(let i = 0; i < keypresses.length; i++){
      if (parseInt(keypresses[i]) === code[i]){
        correct += 1;
      }
    }
  }
  
  if (correct === 10){
    alert("Neva gunna give you up, neva gunna let you doowwwnn");
  }
  }
}