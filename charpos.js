function characterCounter(letters) {
  var object = {};
  for(var i = 0; i < letters.length; i++){
    if(letters[i] !== ' '){
      if(typeof object[letters[i]] !== 'undefined'){
        object[letters[i]].push(i);
      } else {
        object[letters[i]] = [i];
      }
    }
  }
    return object;
  }
console.log(characterCounter('lighthouse labs'));

/*
var object = {};
var a = letters.split("");
for (var i in a){
  var b = object[i];
  if (object[b]){
    object[b] ++
  } else {
    object[b] = 1
  }
}
*/