/*jslint node: true */
'use strict';

module.exports = {
  //setting the goto object of function
  goto: function(currentfloor, buttonpressed){
    var convertButtonToInteger = parseInt(buttonpressed);
    var rideUp = currentfloor + convertButtonToInteger;
    var rideDown = convertButtonToInteger - currentfloor;

    if (buttonpressed instanceof Object || currentfloor instanceof Object){
      return 0;
    }
    if (typeof currentfloor === 'string' || typeof buttonpressed === 'number'){
      return 0;
    }
    if (currentfloor === 0 && convertButtonToInteger <= 3) {
      return rideUp;
    }
    if (currentfloor <= 3 && currentfloor > 0) {
      return rideDown;
    }
    if (convertButtonToInteger >= 4) {
      return currentfloor;
    }
    if (currentfloor >= 4){
      return convertButtonToInteger;
    }
  }
};
