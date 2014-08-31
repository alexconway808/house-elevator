// Problem/Coding solution outline

// 1. Skeleton

// 2. Validate inputs

// 3. Base case - if all else fails, then return false, or 
// whatever will happen if false

// 4. True cases - work through the logic of true cases, validate
// and confirm with console logs


//Setup function, all functions have inputs and outputs
function substring(input1, input2){

  //Validate inputs
  If input1 and input2 exist and are type string

  //Compare strings
  If input1 === input2
    return true;

  //indexOf shows the first position of a match of a string
  if input1 indexOf index2 > -1
    return true;

  //Return true/false
    return false;
}

//


//Another solution
function substring(sub, string){
  //validate

  for (var i = 0; i < string.length; i++){
    var isGood = beginsWith(sub, string.slice(i));
    if (isGood){
      return true;
    }
  }
}

function beginsWith(s, word){
  for (var i = 0; i < s.length; i++){
    if(s[i] !== word[i])
    return false;
  }
}
return true;


//


//Another solution
function subString(string, find){
 
  for(var i = 0; i < string.lenght; i++){

    if(find[0] === string[i]){

      for(var k = 1; k < find.length; k++){

        if(find[k] !== string[i + k]){

          break;
        }
        
        if(k === find.length - 1){

          return true;
        }
      }
    }
  }
}

return false;

