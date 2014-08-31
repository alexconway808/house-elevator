
//function substring(string1, string2)
//Input takes in 2 strings
//Output returns true if string1 is a part of string2
//Else false

function subString(string1, string2){

  var result = string2.split(string1);

  for(var i = 0; i < result.length; i++){
    if(result[i] === ''){
      return true;
    }
    else if(result.length > 1){
      return true;
    }
  }
  console.log(result);
  return false;
}

module.exports = subString;