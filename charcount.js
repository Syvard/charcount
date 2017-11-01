function characterCounter(letters) {
  var object = {};
  for(var i = 0; i < letters.length; i++){
    if(letters[i] !== ' '){
      if(typeof object[letters[i]] !== 'undefined'){
        object[letters[i]] += 1;
      } else {
        object[letters[i]] = 1;
      }
    }
  }
    return object;
  }
console.log(characterCounter('lighthouse labs'));