/*jslint node: true */
'use strict';

module.exports = {
  //setting the goto object of function
  goto: function(currentfloor, buttonpressed){
    var start = currentfloor;
    var convertButtonToInteger = parseInt(buttonpressed);
    var ride = start + convertButtonToInteger;
    return ride;

  }
};
