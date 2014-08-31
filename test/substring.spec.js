var chai = require('chai');
var expect = chai.expect;
var elevator = require('./../substring.js');

describe('A SubString', function () {
  it('should contain', function () {
    // make sure the function in present and returns a truthy value.
    var doesElevatorExist = elevator.goto;

    expect(subString).to.not.be.undefined;
    expect(subString).to.a.instanceOf(Function);

  });

  describe('should contain the substring', function () {
    it('should', function () {
      var result = subString('race', 'racecar');

      expect(result).to.equal(true);
    });
  });
});